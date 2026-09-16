import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-create-offer-mobile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-offer-mobile.component.html',
  styleUrls: ['./create-offer-mobile.component.scss']
})
export class CreateOfferMobileComponent {
  @Input() offerForm!: FormGroup;
  @Input() currentStep!: number;
  @Input() totalSteps!: number;
  
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Output() goToStep = new EventEmitter<number>();

  public offerService = inject(OfferService);
  private fb = inject(FormBuilder);

  productSearchQuery = '';
  categorySearchQuery = '';
  productDropdownOpen = false;

  readonly allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  getNextStepName(): string {
    const stepNames: { [key: number]: string } = {
      1: 'Select Offer Type',
      2: 'Configure Offer',
      3: 'Applies To',
      4: 'Conditions',
      5: 'Schedule',
      6: 'Review',
      7: 'Save Offer'
    };
    return stepNames[this.currentStep] || 'Next';
  }

  getStepSubtitle(): string {
    const subtitles: { [key: number]: string } = {
      1: 'Create a new offer to attract customers and grow your business.',
      2: 'Choose the promotion type for this offer.',
      3: 'Set the discount details for this offer.',
      4: 'Choose where this offer can be applied.',
      5: 'Set minimum requirements for this offer.',
      6: 'Set the schedule for this offer.',
      7: 'Review your offer details before creating.',
      8: 'Your offer has been created successfully.'
    };
    return subtitles[this.currentStep] || subtitles[1];
  }

  // --- Type Icon Helper ---
  getTypeIcon(type?: string): string {
    const t = type || this.offerForm.get('type')?.value;
    switch (t) {
      case 'Percentage Off': return '%';
      case 'Flat Discount': return '₹';
      case 'Buy X Get Y': return '🎁';
      case 'Quantity Discount': return '🛒';
      case 'Spend & Save': return '🎫';
      case 'Tiered Offer': return '📊';
      case 'Bundle / Combo': return '📦';
      default: return '🏷️';
    }
  }

  // --- Form Array Getters ---
  get quantityTiers(): FormArray {
    return this.offerForm.get('config.quantityTiers') as FormArray;
  }

  get spendTiers(): FormArray {
    return this.offerForm.get('config.spendTiers') as FormArray;
  }

  addQuantityTier() {
    this.quantityTiers.push(this.fb.group({ minQty: [1], discountPercentage: [5] }));
  }

  removeQuantityTier(index: number) {
    if (this.quantityTiers.length > 1) {
      this.quantityTiers.removeAt(index);
    }
  }

  addSpendTier() {
    this.spendTiers.push(this.fb.group({ minSpend: [1000], rewardPercentage: [10] }));
  }

  removeSpendTier(index: number) {
    if (this.spendTiers.length > 1) {
      this.spendTiers.removeAt(index);
    }
  }

  // --- Day Selection ---
  toggleDay(day: string) {
    const currentDays: string[] = [...(this.offerForm.get('selectedDays')?.value || [])];
    const index = currentDays.indexOf(day);
    if (index > -1) {
      currentDays.splice(index, 1);
    } else {
      currentDays.push(day);
    }
    this.offerForm.get('selectedDays')?.setValue(currentDays);
  }

  isDaySelected(day: string): boolean {
    const currentDays: string[] = this.offerForm.get('selectedDays')?.value || [];
    return currentDays.includes(day);
  }

  // --- Product Helpers ---
  getFilteredProducts() {
    const query = this.productSearchQuery.toLowerCase().trim();
    const products = this.offerService.getProducts();
    if (!query) return products;
    return products.filter(p => p.name.toLowerCase().includes(query));
  }

  isProductSelected(productId: string): boolean {
    const selected: string[] = this.offerForm.get('selectedProducts')?.value || [];
    return selected.includes(productId);
  }

  toggleProduct(product: any) {
    const selected: string[] = [...(this.offerForm.get('selectedProducts')?.value || [])];
    const index = selected.indexOf(product.id);
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      selected.push(product.id);
    }
    this.offerForm.get('selectedProducts')?.setValue(selected);
  }

  removeProduct(productId: string) {
    const selected: string[] = [...(this.offerForm.get('selectedProducts')?.value || [])];
    const index = selected.indexOf(productId);
    if (index > -1) {
      selected.splice(index, 1);
      this.offerForm.get('selectedProducts')?.setValue(selected);
    }
  }

  clearAllProducts() {
    this.offerForm.get('selectedProducts')?.setValue([]);
  }

  getSelectedProductObjects() {
    const selectedIds: string[] = this.offerForm.get('selectedProducts')?.value || [];
    return this.offerService.getProducts().filter(p => selectedIds.includes(p.id));
  }

  // --- Category Helpers ---
  getFilteredCategories() {
    const query = this.categorySearchQuery.toLowerCase().trim();
    const categories = this.offerService.getCategories();
    if (!query) return categories;
    return categories.filter(c => c.name.toLowerCase().includes(query));
  }

  isCategorySelected(categoryId: string): boolean {
    const selected: string[] = this.offerForm.get('selectedCategories')?.value || [];
    return selected.includes(categoryId);
  }

  toggleCategory(categoryId: string) {
    const selected: string[] = [...(this.offerForm.get('selectedCategories')?.value || [])];
    const index = selected.indexOf(categoryId);
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      selected.push(categoryId);
    }
    this.offerForm.get('selectedCategories')?.setValue(selected);
  }

  getSelectedCategoryObjects() {
    const selectedIds: string[] = this.offerForm.get('selectedCategories')?.value || [];
    return this.offerService.getCategories().filter(c => selectedIds.includes(c.id));
  }

  // --- Bundle Helpers ---
  isBundleProductSelected(productId: string): boolean {
    const selected: string[] = this.offerForm.get('config.bundleItems')?.value || [];
    return selected.includes(productId);
  }

  toggleBundleProduct(product: any) {
    const selected: string[] = [...(this.offerForm.get('config.bundleItems')?.value || [])];
    const index = selected.indexOf(product.id);
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      selected.push(product.id);
    }
    this.offerForm.get('config.bundleItems')?.setValue(selected);
  }

  getSelectedBundleObjects() {
    const selectedIds: string[] = this.offerForm.get('config.bundleItems')?.value || [];
    return this.offerService.getProducts().filter(p => selectedIds.includes(p.id));
  }

  // --- Formatters ---
  getBenefitText(): string {
    const type = this.offerForm.get('type')?.value;
    const config = this.offerForm.get('config')?.value;

    switch (type) {
      case 'Percentage Off': {
        const pct = config.discountPercentage || 0;
        const max = config.maxDiscount ? ` (Max ₹${config.maxDiscount})` : '';
        return `${pct}% off${max}`;
      }
      case 'Flat Discount':
        return `₹${config.discountAmount || 0} off`;
      case 'Buy X Get Y':
        return `Buy ${config.buyQuantity || 1} ${config.buyItem || 'Item'} Get ${config.getQuantity || 1} ${config.getItem || 'Item'}`;
      case 'Quantity Discount':
        return 'Tiered Quantity Discounts';
      case 'Spend & Save':
        return `Spend ₹${config.minBillAmount || 0}, Get ${config.spendSaveDiscount || 0}% Off`;
      case 'Tiered Offer':
        return 'Multi-level Spend Rewards';
      case 'Bundle / Combo':
        return config.bundleReward || 'Special Combo Price';
      default:
        return '-';
    }
  }

  getAppliesToText(): string {
    const appliesTo = this.offerForm.get('appliesTo')?.value;
    if (appliesTo === 'Entire Bill') return 'Entire Bill';
    if (appliesTo === 'Selected Products') {
      const prods = this.getSelectedProductObjects().map(p => p.name);
      return prods.length > 0 ? prods.join(', ') : 'No products selected';
    }
    if (appliesTo === 'Category') {
      const cats = this.getSelectedCategoryObjects().map(c => c.name);
      return cats.length > 0 ? cats.join(', ') : 'No categories selected';
    }
    return '-';
  }

  editStep(stepNumber: number) {
    this.goToStep.emit(stepNumber);
  }

  restartFlow() {
    this.offerForm.reset({
      name: 'Juice Fest 20%',
      description: 'Get 20% off on all juices',
      type: 'Percentage Off',
      config: {
        discountPercentage: 20,
        maxDiscount: 200,
        discountAmount: 500,
        buyQuantity: 1,
        buyItem: 'Apple Juice',
        getQuantity: 1,
        getItem: 'Orange Juice',
        minBillAmount: 500,
        spendSaveDiscount: 10,
        bundleReward: 'Fixed Combo Price ₹180'
      },
      appliesTo: 'Selected Products',
      selectedProducts: ['p1', 'p2', 'p3'],
      selectedCategories: ['c1', 'c2'],
      hasMinBill: true,
      hasMinQuantity: false,
      minQuantity: 5,
      startDate: '2026-09-01',
      endDate: '2026-09-30',
      selectedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      startTime: '09:00',
      endTime: '18:00'
    });
    this.editStep(1);
  }
}
