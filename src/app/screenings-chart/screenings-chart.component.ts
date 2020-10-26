import { Component, ViewChild, OnInit } from "@angular/core";
import * as data from "../data-ter.json";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTheme,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  theme: ApexTheme;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-screenings-chart',
  templateUrl: './screenings-chart.component.html',
  styleUrls: ['./screenings-chart.component.css']
})
export class ScreeningsChartComponent implements OnInit {

  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public users = data.users;
  public screenings = data.screenings;
  public data = [];
  public connexionsData = [];
  public screeningsData = [];

  constructor() {
    this.chartOptions = {
      series: [{
        name: "Screenings",
        data: this.screeningsData
      }],
      theme: {
        mode: 'dark',
        palette: 'palette1',
        monochrome: {
            enabled: true,
            color: '#DF6D14',
            shadeTo: 'dark',
            shadeIntensity: 0.65
        },
      },
      chart: {
        type: "bar",
        height: 350,
        width: 950
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ],
        type: 'datetime',
        labels: {
          format: 'dd/MM',
        }
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
   }

  ngOnInit(): void {
    this.screeningsPerWeek();
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

}
