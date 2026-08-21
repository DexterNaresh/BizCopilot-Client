import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-icon-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-icon-picker.component.html',
  styleUrls: ['./category-icon-picker.component.scss']
})
export class CategoryIconPickerComponent {
  @Input() selectedIcon: string | null = null;
  @Output() iconSelect = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  searchQuery = '';
  
  allIcons = [
    'local_cafe', 'restaurant', 'cake', 'lunch_dining', 'fastfood', 
    'local_pizza', 'icecream', 'bakery_dining', 'local_bar', 'local_drink', 
    'ramen_dining', 'set_meal', 'shopping_basket', 'category', 'star', 
    'favorite', 'sell', 'checkroom', 'build', 'science', 'computer', 
    'headphones', 'sports_esports', 'directions_car', 'fitness_center',
    'pets', 'home', 'child_care', 'palette', 'redeem'
  ];

  get filteredIcons(): string[] {
    if (!this.searchQuery) return this.allIcons;
    const lowerQuery = this.searchQuery.toLowerCase();
    return this.allIcons.filter(icon => icon.includes(lowerQuery) || icon.replace('_', ' ').includes(lowerQuery));
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  selectIcon(icon: string) {
    this.iconSelect.emit(icon);
  }

  closePicker() {
    this.close.emit();
  }
}
