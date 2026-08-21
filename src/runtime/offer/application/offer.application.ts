import { Injectable } from '@angular/core';
import { OfferService } from '@runtime/offer/offer.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@application/contracts/sales/sales.dto';
import { OfferEntity } from '../models/offer.entity';
import { OfferCreateRequest, OfferUpdateRequest, OfferStatusRequest, OfferInfo } from '@runtime/offer/application/dto/offer.dto';

@Injectable({
  providedIn: 'root'
})
export class OfferApplication {
  constructor(
    private offerService: OfferService,
    private IPermissionService: IPermissionService,
    private ISessionService: ISessionService
  ) {}

  createOffer(request: OfferCreateRequest): ApplicationResponse<OfferInfo> {
    return this.executeWithPermission(request.userId, 'OFFER_CREATE', () => {
      return this.mapToInfo(this.offerService.createOffer(request));
    });
  }

  updateOffer(request: OfferUpdateRequest): ApplicationResponse<OfferInfo> {
    return this.executeWithPermission(request.userId, 'OFFER_UPDATE', () => {
      return this.mapToInfo(this.offerService.updateOffer(request));
    });
  }

  changeStatus(request: OfferStatusRequest): ApplicationResponse<OfferInfo> {
    return this.executeWithPermission(request.userId, 'OFFER_ACTIVATE', () => {
      return this.mapToInfo(this.offerService.changeStatus(request));
    });
  }

  private mapToInfo(entity: OfferEntity): OfferInfo {
    return {
      offer_id: entity.offer_id,
      name: entity.name,
      description: entity.description,
      category: entity.category,
      discount_percentage: entity.discount_percentage,
      discount_flat: entity.discount_flat,
      valid_from: entity.valid_from,
      valid_until: entity.valid_until,
      status: entity.status,
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
