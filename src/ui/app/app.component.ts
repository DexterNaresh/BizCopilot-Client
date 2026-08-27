import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserRole } from '@shared/models/user.model';
import { ToastContainerComponent } from '../shared/components/toast-container/toast-container.component';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastContainerComponent, ConfirmDialogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private sessionService: ISessionService) {}

  ngOnInit() {
    // Start dummy session for local dev
    if (!this.sessionService.getCurrentUser()) {
      this.sessionService.startSession({
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Dummy Owner',
        role: UserRole.OWNER
      });
    }
  }
}
