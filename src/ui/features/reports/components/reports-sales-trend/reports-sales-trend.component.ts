import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TrendDataPoint {
  time: string;
  value: number;
  yPos: number;
}

@Component({
  selector: 'app-reports-sales-trend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-sales-trend.component.html',
  styleUrls: ['./reports-sales-trend.component.scss']
})
export class ReportsSalesTrendComponent implements OnInit, OnChanges {
  @Input() subtitle: string = 'Hourly sales for 25 Aug 2025';

  @Input() rawData: Array<{ time: string; value: number }> = [
    { time: '6 AM', value: 1500 },
    { time: '9 AM', value: 3200 },
    { time: '12 PM', value: 5000 },
    { time: '3 PM', value: 8240 },
    { time: '6 PM', value: 4000 },
    { time: '9 PM', value: 4200 }
  ];

  chartData: TrendDataPoint[] = [];
  yAxisLabels: number[] = [10000, 7500, 5000, 2500, 0];
  maxValue = 10000;
  svgPath: string = '';
  activePointTime: string = '3 PM';

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rawData'] || changes['subtitle']) {
      this.updateChart();
    }
  }

  updateChart(): void {
    if (!this.rawData || this.rawData.length === 0) return;

    const max = Math.max(...this.rawData.map(d => d.value));
    this.maxValue = Math.ceil(max / 2000) * 2000;
    if (this.maxValue === 0) this.maxValue = 10000;

    const stepVal = this.maxValue / 4;
    this.yAxisLabels = [
      this.maxValue,
      Math.round(stepVal * 3),
      Math.round(stepVal * 2),
      Math.round(stepVal * 1),
      0
    ];

    this.chartData = this.rawData.map(d => ({
      ...d,
      yPos: (d.value / this.maxValue) * 100
    }));

    const maxItem = [...this.rawData].sort((a, b) => b.value - a.value)[0];
    if (maxItem) {
      this.activePointTime = maxItem.time;
    }

    this.generateSvgPath();
  }

  setActivePoint(time: string): void {
    this.activePointTime = time;
  }

  generateSvgPath() {
    if (this.chartData.length === 0) return;
    
    const step = 1000 / (this.chartData.length - 1);
    let path = `M 0,${100 - this.chartData[0].yPos} `;
    
    for (let i = 1; i < this.chartData.length; i++) {
      const prevX = (i - 1) * step;
      const prevY = 100 - this.chartData[i - 1].yPos;
      const currX = i * step;
      const currY = 100 - this.chartData[i].yPos;
      
      const controlX1 = prevX + (step / 2);
      const controlY1 = prevY;
      const controlX2 = prevX + (step / 2);
      const controlY2 = currY;
      
      path += `C ${controlX1},${controlY1} ${controlX2},${controlY2} ${currX},${currY} `;
    }
    
    this.svgPath = path;
  }
}


