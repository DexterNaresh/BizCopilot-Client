import { Component, HostListener, OnInit, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from '../services/offer.service';
import { CreateOfferMobileComponent } from './mobile/create-offer-mobile.component';

@Component({
  selector: 'app-create-offer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CreateOfferMobileComponent],
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {
  isMobile = false;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  public offerService = inject(OfferService);
  private el = inject(ElementRef);

  offerForm!: FormGroup;

  // Mobile Wizard State
  currentStep = 1;
  readonly totalSteps = 8;

  // Desktop State
  showPreviewOverlay = false;

  // Search & Filter States
  productSearchQuery = '';
  categorySearchQuery = '';
  productDropdownOpen = false;
  bundleDropdownOpen = false;

  readonly allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  ngOnInit() {
    this.checkViewport();
    this.initForm();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // If the click is inside the host element, we assume it might be on the search input or dropdown.
    // However, to be precise, we check if the click target is outside the search-picker wrappers.
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.productDropdownOpen = false;
      this.bundleDropdownOpen = false;
    } else {
      // If clicked inside, we specifically check if it's outside the product search picker
      const isProductPicker = (event.target as HTMLElement).closest('.search-picker-wrapper');
      if (!isProductPicker) {
        this.productDropdownOpen = false;
      }
    }
  }

  private checkViewport() {
    this.isMobile = window.innerWidth < 600;
  }

  private initForm() {
    this.offerForm = this.fb.group({
      // 1. Basic Info
      name: ['Juice Fest 20%', Validators.required],
      description: ['Get 20% off on all juices'],
      
      // 2. Offer Type
      type: ['Percentage Off', Validators.required],
      
      // 3. Dynamic Configuration
      config: this.fb.group({
        discountPercentage: [20, [Validators.min(1), Validators.max(100)]],
        maxDiscount: [200],
        discountAmount: [500],
        buyQuantity: [1],
        buyItem: ['Apple Juice'],
        getQuantity: [1],
        getItem: ['Orange Juice'],
        minBillAmount: [500],
        spendSaveDiscount: [10],
        quantityTiers: this.fb.array([
          this.fb.group({ minQty: [2], discountPercentage: [5] }),
          this.fb.group({ minQty: [5], discountPercentage: [10] }),
          this.fb.group({ minQty: [10], discountPercentage: [15] })
        ]),
        spendTiers: this.fb.array([
          this.fb.group({ minSpend: [500], rewardPercentage: [10] }),
          this.fb.group({ minSpend: [2500], rewardPercentage: [15] }),
          this.fb.group({ minSpend: [5000], rewardPercentage: [20] })
        ]),
        bundleItems: [['p1', 'p4']], // Apple Juice, Sandwich
        bundleReward: ['Fixed Combo Price ₹180']
      }),
      
      // 4. Applies To
      appliesTo: ['Selected Products', Validators.required],
      selectedProducts: [['p1', 'p2', 'p3']], // Apple, Orange, Mango
      selectedCategories: [['c1', 'c2']], // Beverages, Fresh Juices
      
      // 5. Conditions
      hasMinBill: [true],
      hasMinQuantity: [false],
      minQuantity: [5],
      hasCustomerType: [false],
      customerType: ['Select Customer Type'],
      firstPurchaseOnly: [false],
      
      // 6. Schedule
      startDate: ['2026-09-01', Validators.required],
      endDate: ['2026-09-30', Validators.required],
      selectedDays: [['Mon', 'Tue', 'Wed', 'Thu', 'Fri']],
      startTime: ['09:00'],
      endTime: ['18:00'],
      repeat: ['Does not repeat'],
      status: [true]
    });
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

  // --- Days Selector ---
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

  // --- Product Selection Helpers ---
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

  // --- Category Selection Helpers ---
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

  // --- Bundle Selection Helpers ---
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

  // --- Benefit & Validity Formatting for Summary ---
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

  // --- Common Actions ---
  onCancel() {
    this.router.navigate(['/offers']);
  }

  onSaveOffer() {
    if (this.offerForm.valid) {
      const val = this.offerForm.value;
      this.offerService.addOffer({
        name: val.name,
        description: val.description,
        type: val.type,
        benefit: this.getBenefitText(),
        appliesTo: val.appliesTo,
        appliesToDetails: this.getAppliesToText(),
        validity: `${val.startDate} – ${val.endDate}`
      });
      if (!this.isMobile) {
        this.router.navigate(['/offers']);
      }
    } else {
      this.offerForm.markAllAsTouched();
    }
  }

  // --- Mobile Wizard Actions ---
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    } else {
      this.onSaveOffer();
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    } else {
      this.onCancel();
    }
  }
  
  goToStep(step: number) {
    this.currentStep = step;
  }
}
