import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopSidebarComponent } from '../desktop-sidebar/desktop-sidebar.component';
import { BottomNavigationComponent } from '../bottom-navigation/bottom-navigation.component';
import { MoreBottomSheetComponent } from '../more-bottom-sheet/more-bottom-sheet.component';

@Component({
  selector: 'app-navigation-shell',
  standalone: true,
  imports: [CommonModule, DesktopSidebarComponent, BottomNavigationComponent, MoreBottomSheetComponent],
  templateUrl: './navigation-shell.component.html',
  styleUrls: ['./navigation-shell.component.scss']
})
export class NavigationShellComponent {
  public isMoreSheetOpen = signal(false);

  openMoreSheet() {
    this.isMoreSheetOpen.set(true);
  }

  closeMoreSheet() {
    this.isMoreSheetOpen.set(false);
  }
}
