import { Component } from '@angular/core';
import { ChartConfiguration, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    //'In-Store Sales',
    //'Mail-Order Sales',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [350, 450, 100, 300],
        label: 'Series A',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'white',
        ],
      },
      // { data: [ 50, 150, 120 ], label: 'Series B' },
      // { data: [ 250, 130, 70 ], label: 'Series C' }
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    rotation: 225,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() {}
}
