import { Component, OnInit, ViewChild } from '@angular/core';
import * as data from "../data-ter.json";

import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke,
  ApexGrid,
  ApexTheme,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
  grid: ApexGrid;
  theme: ApexTheme;
  legend: ApexLegend;
};


@Component({
  selector: 'app-graphic-screenings',
  templateUrl: './graphic-screenings.component.html',
  styleUrls: ['./graphic-screenings.component.css']
})
export class GraphicScreeningsComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;

  public users = data.users;
  public screenings = data.screenings;
  public data = [];
  public chartOptions: Partial<ChartOptions>;
  public connexionsData = [];
  public screeningsData = [];

  constructor() {
    this.initChart();
   }

  ngOnInit(): void {
    this.screeningsPerWeek();
    this.getWeekNumber();
  }

  initChart(): void {
    this.chartOptions = {
      series: [{
          name: "Screenings",
          data: this.screeningsData
        }],
      chart: {
        type: "area",
        height: 350,
        width: 950
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'dd/MM',
        }
      },
      yaxis: {
        forceNiceScale: true,
        labels: {
          show: true,
          align: 'right'
        },
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
        text: "Number of screenings per week",
        align: "center",
        floating: true,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  'white'
        }
      },
      dataLabels: {
        enabled: true,
      },
      markers: {
        size: 7
      },
      theme: {
        mode: 'dark',
        palette: 'palette2',
        monochrome: {
            enabled: true,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
        },
    }
    };
  }

  screeningsPerWeek() {

    // Creation of an empty array
    const allArray = [];
    // Setting up the date between 1 and 30 October from fake data
    const firstDay = new Date('2020-10-01');
    const lastDay = new Date('2020-10-31');
    // Initialize number of users connexion
    let nbScreenings = 0;
    // Loop all users to get all the connexions array data
    this.screenings.map(u => allArray.push(u.start));
    // console.log(this.screenings);
    // Flat on the all arrays to get one array with all dates
    const group = allArray.reduce((firstArray, secondArray) => firstArray.concat(secondArray), []);
    // Loop the dates inside the array [connexions] to get the number of connexions users in the same day
    for (const d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      nbScreenings = group.filter(date => new Date(date).toDateString() === d.toDateString()).length;

      this.screeningsData.push({x: new Date(d), y: Math.floor(nbScreenings)});
      // console.log(nbScreenings);

    }
    // Render this function
    return this.screeningsData;
  }

  getWeekNumber(){
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
    const test = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    console.log(test);
  }


}
