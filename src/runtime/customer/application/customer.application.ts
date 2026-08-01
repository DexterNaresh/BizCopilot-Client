import { Injectable } from '@angular/core';
import { CustomerService } from '@runtime/customer/customer.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@runtime/billing/application/dto/sales.dto';
import { CustomerEntity } from '../models/customer.entity';
import { CustomerCreateRequest, CustomerUpdateRequest, CustomerArchiveRequest, CustomerInfo } from '@runtime/customer/application/dto/customer.dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerApplication {
  constructor(
    private customerService: CustomerService,
    private IPermissionService: IPermissionService,
    private ISessionService: ISessionService
  ) {}

  createCustomer(request: CustomerCreateRequest): ApplicationResponse<CustomerInfo> {
    return this.executeWithPermission(request.userId, 'CUSTOMER_CREATE', () => {
      return this.mapToInfo(this.customerService.createCustomer(request));
    });
  }

  updateCustomer(request: CustomerUpdateRequest): ApplicationResponse<CustomerInfo> {
    return this.executeWithPermission(request.userId, 'CUSTOMER_UPDATE', () => {
      return this.mapToInfo(this.customerService.updateCustomer(request));
    });
  }

  archiveCustomer(request: CustomerArchiveRequest): ApplicationResponse<CustomerInfo> {
    return this.executeWithPermission(request.userId, 'CUSTOMER_ARCHIVE', () => {
      return this.mapToInfo(this.customerService.archiveCustomer(request));
    });
  }

  private mapToInfo(entity: CustomerEntity): CustomerInfo {
    return {
      customer_id: entity.customer_id,
      name: entity.name,
      phone: entity.phone,
      email: entity.email,
      status: entity.status,
      is_system: entity.is_system,
      isSystem: entity.isSystem,
      created_at: entity.created_at
    };
  }

  private executeWithPermission<T>(userId: string, permission: any, operation: () => T): ApplicationResponse<T> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== userId) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'Invalid session or user mismatch.'
          }
        };
      }

      if (!this.IPermissionService.hasPermission(currentUser.role, permission)) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'You do not have permission to perform this action.'
          }
        };
      }

      const result = operation();
      return {
        success: true,
        data: result
      };

    } catch (error: any) {
      const message = error.message || 'Unknown error occurred.';
      const [code, ...msgParts] = message.split(': ');
      
      return {
        success: false,
        error: {
          code: msgParts.length > 0 ? code : 'UNKNOWN_ERROR',
          message: msgParts.length > 0 ? msgParts.join(': ').trim() : message
        }
      };
    }
  }
}
