import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTheme,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexAnnotations,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: Partial<ApexChart>;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  theme: ApexTheme;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  annotations: ApexAnnotations;
  stroke: ApexStroke;
};

export const globalOptions: Partial<ChartOptions> = {
  theme: {
    mode: 'dark',
    palette: 'palette1',
    monochrome: {
      enabled: true,
      color: '#DF6D14',
      shadeTo: 'dark',
      shadeIntensity: 0.65
    }
  },
  dataLabels: {
    enabled: false,
  },
  chart:{
    toolbar:{
      show: false,
      tools:{
        zoom: false
      }
    },
    height: 350,
    width: 950,
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: ["green"],
    width: 2,
    dashArray: 0,
},
}
