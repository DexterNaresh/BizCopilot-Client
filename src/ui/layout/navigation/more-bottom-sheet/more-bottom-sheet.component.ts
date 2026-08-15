import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-bottom-sheet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './more-bottom-sheet.component.html',
  styleUrls: ['./more-bottom-sheet.component.scss']
})
export class MoreBottomSheetComponent {
  @Output() close = new EventEmitter<void>();
}
