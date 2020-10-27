import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, globalOptions } from "../chart-options";
import { ChartComponent } from "ng-apexcharts";
import * as data from "../data-ter.json";

@Component({
  selector: 'app-graphic-users',
  templateUrl: './graphic-users.component.html',
  styleUrls: ['./graphic-users.component.css']
})
export class GraphicUsersComponent implements OnInit {
@ViewChild("chart", { static: false }) chart: ChartComponent;

  public users = data.users;
  public data = [];
  public chartOptions: Partial<ChartOptions>;
  public connexionsData = [];

  constructor() {
    this.initChart();
   }

  ngOnInit(): void {
    this.connexionsPerDay();
  }

  initChart(): void {
    this.chartOptions = {
      ...globalOptions,
      series: [{
          name: "Users",
          data: this.connexionsData
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
        text: "Number of connected users per day",
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

  connexionsPerDay() {

    // Creation of an empty array
    const allArray = [];
    // Setting up the date between 1 and 30 October from fake data
    const firstDay = new Date('2020-10-01');
    const lastDay = new Date('2020-10-31');
    // Initialize number of users connexion
    let nbConnexion = 0;
    // Loop all users to get all the connexions array data
    this.users.map(u => allArray.push(u.connexions));
    // Flat on the all arrays to get one array with all dates
    const group = allArray.reduce((hello, world) => hello.concat(world), []);
    // Loop the dates inside the array [connexions] to get the number of connexions users in the same day
    for (const d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      nbConnexion = group.filter(date => new Date(date).toDateString() === d.toDateString()).length;

      this.connexionsData.push({x: new Date(d), y: nbConnexion});
      console.log(this.connexionsData);

    }
    // Render this function
    return this.connexionsData;
  }

}
