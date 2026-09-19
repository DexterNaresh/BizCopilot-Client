import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reports-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reports-header.component.html',
  styleUrls: ['./reports-header.component.scss']
})
export class ReportsHeaderComponent {
  isExportOpen: boolean = false;

  toggleExportMenu(): void {
    this.isExportOpen = !this.isExportOpen;
  }

  exportAs(type: 'pdf' | 'excel' | 'csv'): void {
    this.isExportOpen = false;
    alert(`Exporting Sales Report as ${type.toUpperCase()}...`);
  }
}

