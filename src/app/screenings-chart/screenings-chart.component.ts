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
  ApexMarkers,
  ApexTitleSubtitle
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
  title: ApexTitleSubtitle;
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
          text: "Screenings number"
        }
      },
      fill: {
        opacity: 1
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

    // this.getFirstMonday();
    // this.getDateOfWeek('40', '2020');
  }

  screeningsPerWeek() {

    // Creation of an empty array
    // const allScreenings = [];
    // const startDateArray = [];
    // Setting up the date between 1 and 30 October from fake data
    // const firstDate = this.getWeekNumber('2020-10-01');
    // const lastDate = this.getWeekNumber('2020-10-31');

    // let nbScreenings = 0;
    // let nbScreeningSurCetteSemaine = 0;

    // this.screenings.map(u => allScreenings.push(this.getWeekNumber(u.start)));
    // console.log('all screenings : ', allScreenings);


    // for (const d =  firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      //   nbScreenings = group.filter(date => new Date(date).toDateString() === d.toDateString()).length;

      //   this.screeningsData.push({x: new Date(d), y: nbScreenings});
      //   // console.log(nbScreenings);
      //   // console.log(this.getWeekNumber('2020-10-01'));
      //   this.screenings.map(s => startDateArray.push(s.start));
      //   console.log(groupStartDate);
    // console.log(firstDate);
    // console.log(lastDate);
    // for (let e = firstDate; e <= lastDate; e++){
    //   nbScreenings = allScreenings.filter(screen => screen === e).length;
    //   console.log(e, ' : ', nbScreenings);
    // }
    // console.log('date : ', this.getWeekNumber("2020-10-03"))

      // }
    // return this.screeningsData;

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
    // Render this function
  }

  isValidDate(d) {
    return d instanceof Date && !isNaN(d.getDate());
  }

  getDateOfWeek(year, week, day){
    const firstDayOfYear = new Date(year, 0, 1);
    const days = 2 + day + (week - 1) * 7 - firstDayOfYear.getDay();
    // console.log(days);
    return new Date(year, 0, days);
  }

  getWeekNumber(dateScreeningWeek: any) { // peut-être un type Date plutôt que string
    const today = new Date(dateScreeningWeek);
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
    console.log('firstDayOfYear : ', firstDayOfYear);
    console.log('pasDayOfYear : ', pastDaysOfYear);
    const firstMondayOfTheYear = 2;
    const test = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
    console.log(firstDayOfYear.getDay())
    // console.log(test);
    return test;
  }

  getFirstMonday(){
    console.log(new Date().getDate());
    const year = new Date().getFullYear();
    // récupère l'année
    // récupérer le 1e jours de l'année
    const firstDayOfYear = new Date(year, 0, 1);
    if(firstDayOfYear.getDay() !== 1) {

    }
    console.log(firstDayOfYear.getDay())
  }

}
