import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router = inject(Router);

  recentBills = [
    { id: 'INV-2026-089', time: '10 mins ago', customer: 'Walk-In Customer', amount: 480.00, status: 'Paid' },
    { id: 'INV-2026-088', time: '32 mins ago', customer: 'Rahul Sharma', amount: 1250.00, status: 'Paid' },
    { id: 'INV-2026-087', time: '1 hour ago', customer: 'Priya Patel', amount: 820.00, status: 'Paid' },
    { id: 'INV-2026-086', time: '2 hours ago', customer: 'Walk-In Customer', amount: 310.00, status: 'Paid' }
  ];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
