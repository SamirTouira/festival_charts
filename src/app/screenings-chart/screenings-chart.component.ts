import { Component, ViewChild, OnInit } from "@angular/core";
import { ChartOptions, globalOptions } from "../chart-options";
import { ChartComponent } from "ng-apexcharts";
import * as data from "../data-ter.json";


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
      ...globalOptions,
      series: [{
        name: "Screenings",
        data: this.screeningsData
      }],
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
      chart: {
        type: "bar",

        ...globalOptions.chart,
      },
      xaxis: {
        labels: {
          show: true,
          rotate: -20,
          rotateAlways: true,
          datetimeFormatter:{
            day: 'dd MMM',
          },
          offsetY: 10
        },
        offsetX: 15,
        title:{
          text: "Weeks",
          offsetX: -40
        }
      },
      yaxis: {
        title: {
          text: "Screenings number"
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          startingShape: "flat",
          endingShape: "flat"
        }
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " screenings";
          }
        }
      }
    };
   }

  ngOnInit(): void {
    this.screeningsPerWeek();
  }

  screeningsPerWeek() {
    // Creation of an empty array for all screenings and get the currently date
    const today = new Date();
    const allScreenings = [];
    // Setting up the date between 1 and 30 October from fake data and get weeks number with getWeekNumber()
    const firstDate = this.getWeekNumber('2020-10-01');
    const lastDate = this.getWeekNumber('2020-10-31');
    // Initialization of the number of screenings for the loop for()
    let nbScreenings = 0;
    // Pushing the empty array allScreenings to the array start from fake datas screenings.start and get the number of week about this
    this.screenings.map(u => allScreenings.push(this.getWeekNumber(u.start)));
    // Initialization of the loop to browse the interval between number of weeks, filtering and pushing inside screenings data
    for (let e = firstDate; e <= lastDate; e++){
      nbScreenings = allScreenings.filter(screen => screen === e).length;
      this.screeningsData.push({x: this.getFirstAndLastDay(e, today.getFullYear()), y: nbScreenings});
    }
    return this.screeningsData;
  }

  getFirstAndLastDay(weekNumber: number, year: number){
    const firstDayOfYear = new Date(year, 0, 1).getDay();
    const d = new Date(year, 0, 1);
    const w = d.getTime() - (3600000 * 24 * (firstDayOfYear -1)) + 604800000 * (weekNumber - 1);
    const firstDay = new Date(w);
    const lastDay = new Date(w + 518400000);

    return `${firstDay.getDate()}/${firstDay.getMonth() + 1} - ${lastDay.getDate()}/${lastDay.getMonth() + 1}`;
  }

  getDateOfWeek(year, week, day){
    const firstDayOfYear = new Date(year, 0, 1);
    const days = 2 + day + (week - 1) * 7 - firstDayOfYear.getDay();

    return new Date(year, 0, days);
  }

  getWeekNumber(dateScreeningWeek: any) { // I've typed any, but it can be also the type string
    const today = new Date(dateScreeningWeek);
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
    const resultWeekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 2) / 7);

    return resultWeekNumber;
  }

}
