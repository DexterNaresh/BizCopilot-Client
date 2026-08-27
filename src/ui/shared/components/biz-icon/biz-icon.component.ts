import { Component, Input, OnChanges, SimpleChanges, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'biz-icon',
  standalone: true,
  template: `<div class="biz-icon-container" [innerHTML]="svgContent" [class.filled]="filled"></div>`,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
    .biz-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1em;
      height: 1em;
      fill: currentColor;
    }
    
    /* Global SVG fixes so it scales with font-size and color */
    ::ng-deep .biz-icon-container svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      pointer-events: none;
    }
    
    /* Support filled variant if Material Symbols Outlined uses variation axes */
    /* Note: if using actual filled SVGs this would fetch a different file, 
       but we can apply some CSS tricks or trust the parent to style it if possible. */
  `]
})
export class BizIconComponent implements OnChanges {
  @Input() name!: string;
  @Input() category: string = 'common';
  @Input() filled: boolean = false;
  
  svgContent: SafeHtml = '';

  constructor(
    private assetService: AssetService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] || changes['category']) {
      if (this.name) {
        this.loadIcon();
      } else {
        this.svgContent = '';
      }
    }
  }

  private loadIcon() {
    this.assetService.getIcon(this.category, this.name).subscribe(svgText => {
      // Since we are loading from our local trusted assets/icons directory,
      // we can safely bypass Angular's HTML sanitizer, which otherwise strips SVG tags.
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgText || '');
    });
  }
}
