import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SetupFacade } from '../../setup.facade';

@Component({
  selector: 'app-setup-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setup-complete.component.html',
  styleUrls: ['./setup-complete.component.scss']
})
export class SetupCompleteComponent {
  public facade = inject(SetupFacade);
  private router = inject(Router);

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
