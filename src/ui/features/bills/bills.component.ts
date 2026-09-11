import { Component, HostListener, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsHeaderComponent } from './components/bills-header/bills-header.component';
import { BillsToolbarComponent } from './components/bills-toolbar/bills-toolbar.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { RecentBillsStateService, RecentBill } from './services/recent-bills-state.service';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [
    CommonModule,
    BillsHeaderComponent,
    BillsToolbarComponent,
    BillListComponent,
    BillDetailsComponent
  ],
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  isMobile = false;
  selectedBill: Signal<RecentBill | null>;

  constructor(public stateService: RecentBillsStateService) {
    this.selectedBill = this.stateService.selectedBill;
  }

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth < 768;
  }

  handleBackToListView() {
    this.stateService.selectBill(null);
  }
}
