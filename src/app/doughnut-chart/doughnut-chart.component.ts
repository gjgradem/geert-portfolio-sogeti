import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  
  @Input() percentage: number; 

  public doughnutChartData = [];
  public doughnutChartColors = [
    {
      backgroundColor: ['#0070ad', 'white']
    }
  ];
  public doughnutChartType = 'doughnut';

  constructor() {
  } 

  ngOnInit(): void {
    console.log(this.percentage);
    let rest = 100 - this.percentage;
    this.doughnutChartData.push(this.percentage);
    this.doughnutChartData.push(rest);
  }

}
