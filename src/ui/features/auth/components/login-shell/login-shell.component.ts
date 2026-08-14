import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from '../login-card/login-card.component';

@Component({
  selector: 'app-login-shell',
  standalone: true,
  imports: [CommonModule, LoginCardComponent],
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent {}
