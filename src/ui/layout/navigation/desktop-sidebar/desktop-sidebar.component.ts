import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-desktop-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './desktop-sidebar.component.html',
  styleUrls: ['./desktop-sidebar.component.scss']
})
export class DesktopSidebarComponent {}
