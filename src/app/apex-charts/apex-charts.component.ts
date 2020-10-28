import { Component, OnInit, ViewChild } from '@angular/core';
import * as data from "../data-ter.json";
import { ChartComponent } from "ng-apexcharts";
import { ChartOptions, globalOptions } from "../chart-options";

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.css']
})



export class ApexChartsComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;

  public users = data.users;
  public data = [];
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.initChart();
  }


  initChart(): void {
    this.chartOptions = {
      ...globalOptions,
      series: [{
          name: "Users",
          data: this.getFirstConnexionNb()
        }],
      chart: {
        type: "area",
        ...globalOptions.chart
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'dd/MM',
        }
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#999",
            label: {
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396"
              }
            }
          },
        ]
      },
      title: {
        text: "Number of first connexions users per day",
        align: "center",
        floating: true,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  'white'
        }
      },
    };
  }



  ngOnInit(){
    this.data = this.getFirstConnexionNb();
  }

  getFirstConnexionNb() {
    const firstCoData = [];
    const firstDay = new Date('2020-10-01');
    const lastDay = new Date('2020-10-10');
    for (const d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      const nbConnexion = this.users.filter(u => new Date(u.firstConnexion).toDateString() === d.toDateString());
      console.log(firstCoData);
      firstCoData.push({x: new Date(d), y: nbConnexion.length});
    }
    return firstCoData;
  }
}
