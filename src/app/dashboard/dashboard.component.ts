import { AnalyticsService } from './../services/analytics/analytics.service';
import { ChartDataset } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from './../services/socket/socket.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  messageContent = ''
  phoneNumber = ''
  @ViewChild('chart') chart: any;
  analyticsTimeRange = 'monthly'
  chartData: { dataset?: ChartDataset[], labels?: string[] } = {};

  serviceDestructor = new Subject();

  constructor(private socketService: SocketService, private analyticsService: AnalyticsService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.updateChart()
  }

  updateChart() {
    console.log('update chart')
    this.analyticsService.getBuySellAnalytics(this.analyticsTimeRange).pipe(takeUntil(this.serviceDestructor)).subscribe({
      next: (res) => {
        this.chartData.dataset = []
        const labels = res.map((item) => item.label)
        const buyData = res.map((item) => item.nbuys)
        const sellData = res.map((item) => item.nsells)
        this.chartData.labels = labels
        this.chartData.dataset.push({
          label: 'Buyers',
          data: buyData,
        })
        this.chartData.dataset.push({
          label: 'Sellers',
          data: sellData,
        })
      }, error: (err) => {
        this.toastr.error('Error fetching analytics', 'Error')
      }
    })
  }


  // logoutWA() {
  //   this.socketService.logoutWASocket().pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
  //     this.toastr.success('Logged out', 'WA Connection Update')
  //   })
  // }

  ngOnDestroy(): void {
    this.serviceDestructor.next(1);
    this.serviceDestructor.complete();
  }

  // sendMessageWA() {
  //   this.socketService.sendMessageWA(this.messageContent, this.phoneNumber).pipe(takeUntil(this.serviceDestructor)).subscribe((res) => {
  //     this.toastr.success('Message sent', 'Acknowledgement')
  //   })
  // }
}
