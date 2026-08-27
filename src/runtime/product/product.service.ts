import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { BusinessException } from '@shared/exceptions/business.exception';
import { ValidationException } from '@shared/exceptions/validation.exception';
import { Injectable, Inject } from '@angular/core';
import { IProductRepository } from './repositories/product.repository.interface';
import { ProductEntity } from './models/product.entity';
import { ProductCreateRequest, ProductUpdateRequest, ProductAvailabilityRequest, ProductArchiveRequest } from '@runtime/product/application/dto/product.dto';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';
import { ISequenceService, SequenceType } from '@shared/abstractions/sequence.service.interface';
import { ProductCodeFormatter } from './formatting/product-code.formatter';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    @Inject(IProductRepository) private productRepository: IProductRepository,
    @Inject(IIdentityService) private IIdentityService: IIdentityService,
    @Inject(ITransactionManager) private transactionManager: ITransactionManager,
    @Inject(ISequenceService) private sequenceService: ISequenceService
  ) {}

  createProduct(request: ProductCreateRequest): ProductEntity {
    this.validateProductDetails(request.name, request.price, request.barcode);

    return this.transactionManager.execute(() => {
      const sequence = this.sequenceService.next(SequenceType.PRODUCT_CODE);
      const productCode = ProductCodeFormatter.format(sequence);
      const productId = this.IIdentityService.generateId();

      const productTemplate: ProductEntity = {
        product_id: productId,
        product_code: productCode,
        name: request.name,
        type: request.type || 'QTY',
        price: request.price,
        category: request.category,
        barcode: request.barcode,
        available: 1,
        status: 'ACTIVE',
        created_at: new Date().toISOString()
      };

      return this.productRepository.saveNewProduct(productTemplate);
    });
  }

  updateProduct(request: ProductUpdateRequest): ProductEntity {
    this.validateProductDetails(request.name, request.price, request.barcode, request.product_id);

    const existingProduct = this.productRepository.findById(request.product_id);
    if (!existingProduct) {
      throw new Error(`PRODUCT_NOT_FOUND: Product with id ${request.product_id} does not exist.`);
    }

    if (existingProduct.status === 'ARCHIVED') {
      throw new BusinessException('PRODUCT_ARCHIVED', 'Cannot modify an archived product.');
    }

    const updatedProduct: ProductEntity = {
      ...existingProduct,
      name: request.name,
      type: request.type || existingProduct.type,
      price: request.price,
      category: request.category,
      barcode: request.barcode
    };

    this.productRepository.update(updatedProduct.product_id, updatedProduct);
    return updatedProduct;
  }

  archiveProduct(request: ProductArchiveRequest): ProductEntity {
    const existingProduct = this.productRepository.findById(request.product_id);
    if (!existingProduct) {
      throw new Error(`PRODUCT_NOT_FOUND: Product with id ${request.product_id} does not exist.`);
    }

    if (existingProduct.status === 'ARCHIVED') {
      return existingProduct; // Idempotent
    }

    const updatedProduct: ProductEntity = {
      ...existingProduct,
      status: 'ARCHIVED'
    };

    this.productRepository.update(updatedProduct.product_id, updatedProduct);
    return updatedProduct;
  }

  updateAvailability(request: ProductAvailabilityRequest): ProductEntity {
    const existingProduct = this.productRepository.findById(request.product_id);
    if (!existingProduct) {
      throw new Error(`PRODUCT_NOT_FOUND: Product with id ${request.product_id} does not exist.`);
    }

    const updatedProduct: ProductEntity = {
      ...existingProduct,
      available: request.available ? 1 : 0
    };

    this.productRepository.update(updatedProduct.product_id, updatedProduct);
    return updatedProduct;
  }

  /**
   * Validates common business rules for products.
   */
  private validateProductDetails(name: string, price: number, barcode: string | null, excludeProductId?: string) {
    if (!name || name.trim() === '') {
      throw new ValidationException('Product name is required.');
    }

    if (price <= 0) {
      throw new ValidationException('Selling price must be greater than zero.');
    }

    if (barcode && barcode.trim() !== '') {
      const existing = this.productRepository.findByBarcode(barcode);
      if (existing && existing.product_id !== excludeProductId) {
        throw new BusinessException('BARCODE_CONFLICT', 'Duplicate barcodes are not allowed.');
      }
    }
  }

  getProductsByIds(ids: string[]): ProductEntity[] {
    return this.productRepository.findByIds(ids);
  }

  getAllProducts(): ProductEntity[] {
    return this.productRepository.findAll();
  }
}
