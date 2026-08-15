import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationShellComponent } from '../navigation/navigation-shell/navigation-shell.component';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationShellComponent],
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {}
