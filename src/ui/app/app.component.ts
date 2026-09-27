import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserRole } from '@shared/models/user.model';
import { ToastContainerComponent } from '../shared/components/toast-container/toast-container.component';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { OnInit } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastContainerComponent, ConfirmDialogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private sessionService: ISessionService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    // Start dummy session for local dev
    if (!this.sessionService.getCurrentUser() && environment.seedTestData) {
      this.sessionService.startSession({
        id: (environment as any).testUserId || 'TEST-USER-0000',
        name: 'Dummy Owner',
        role: UserRole.OWNER
      });
    }
  }
}
