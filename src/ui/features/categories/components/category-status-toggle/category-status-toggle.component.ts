import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-status-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-status-toggle.component.html',
  styleUrls: ['./category-status-toggle.component.scss']
})
export class CategoryStatusToggleComponent {
  @Input({ required: true }) status: 'active' | 'inactive' = 'active';
  @Output() statusChange = new EventEmitter<'active' | 'inactive'>();

  toggleStatus(event: Event) {
    event.stopPropagation(); // Prevent row click if any
    const newStatus = this.status === 'active' ? 'inactive' : 'active';
    this.statusChange.emit(newStatus);
  }
}
