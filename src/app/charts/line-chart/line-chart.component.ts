import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartDataset } from 'chart.js/dist/types/index';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chart') chart: ElementRef<HTMLCanvasElement>;
  @Input() datasets: ChartDataset[];
  @Input() chartTitle: string;
  @Input() labels?: string[];

  chartCanvas: Chart;

  ngAfterViewInit() {
    this.updateChart();
  }

  ngOnChanges() {
    if (this.chartCanvas) {
      this.chartCanvas.destroy();
      this.updateChart();
    }
  }

  updateChart() {
    this.chartCanvas = new Chart(this.chart.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels ? this.labels : undefined,
        datasets: this.datasets
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: this.chartTitle,
            font: {
              size: 16
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
