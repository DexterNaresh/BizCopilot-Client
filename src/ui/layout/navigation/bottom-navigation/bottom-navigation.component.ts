import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent {
  @Output() openMore = new EventEmitter<void>();
  private router = inject(Router);

  isMoreActive(): boolean {
    const activePaths = [
      '/customers', '/reports', '/offers', '/bills', 
      '/ai-assistant', '/backup-sync', '/settings', '/business-profile'
    ];
    return activePaths.some(path => this.router.url.startsWith(path));
  }
}
