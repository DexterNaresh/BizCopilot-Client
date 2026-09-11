import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bills-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills-header.component.html',
  styleUrls: ['./bills-header.component.scss']
})
export class BillsHeaderComponent {
  @Input() isMobile = false;
}
