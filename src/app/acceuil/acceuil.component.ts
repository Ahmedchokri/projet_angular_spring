import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client.service';
import { FactureService } from 'app/facture.service';
import { FournisseurService } from 'app/fournisseur.service';
import { Client } from 'app/modals/client';
import { produit } from 'app/modals/product';
import { ProductService } from 'app/product.service';
import { StockserviceService } from 'app/stockservice.service';
import * as Chart from 'chart.js';
import * as Chartist from 'chartist';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  title = 'dashboard';
  chart;
  chart2 = [];
  bar: any;
  doughnut: any;
  clientfidele:Client;
  totalstock:number;
  data1 = [];
  listclientfidele : String ="";
  list = [];
  list1=[];
  libellet: string;
  listRevenuebycategorieclient = [];
  labels = [];
  count = [];
  count1 = [];
  labels1 = [];
  labels2=[];
  count2 = [];
  total: number;
  totalrevenue: number;
  totalfournisseur: number;

  constructor(private ec: ProductService, private cl: ClientService, private ft: FactureService, private fr: FournisseurService,private st: StockserviceService) { }


  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 100;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),

            tension: 0.1
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    this.st.gettotalstock().subscribe(res => {
      this.totalstock=res;
    })
 this.cl.getclientfidele().subscribe(res=>{
   console.log(res);
   for(let i of res){
     this.cl.getClientById(i[1]).subscribe(res=>{
       this.clientfidele=res;
       this.listclientfidele=this.listclientfidele+' '+this.clientfidele.nom
     })
   }
 })

    this.cl.gettotalclient().subscribe(total => { this.total = total })
    this.ft.gettotalRevenue().subscribe(totalrevenue => { this.totalrevenue = totalrevenue })
    this.fr.gettotalfournisseur().subscribe(totalfournisseur => { this.totalfournisseur = totalfournisseur })
    this.ec.getquantitybycategorie().subscribe(data => {
      this.list = data;

      for (let i of this.list) {
        this.labels.push(i[1]);
      }
      for (let i of this.list) {
        this.count.push(i[0]);
      }
      this.chart = new Chart('line', {
        type: 'line',
        
        options: {
          
          legend: {
            display: false
            
          },
          scales: {

            xAxes: [{
              gridLines: { color: "#FFFFFF", },

              display: true,
              scaleLabel: {

                display: true,
                labelString: 'Product category',
                fontColor: '#FFFFFF',
                fontSize: 10,
                fontFamily: 'Goudy Bookletter 1911',

              },

              ticks: {

                fontColor: "white",
                fontSize: 10
              }
            }

            ],
            yAxes: [{
              gridLines: { color: "#FFFFFF" },
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Quantity',
                fontColor: '#FFFFFF',
                fontSize: 10,
                fontFamily: 'Goudy Bookletter 1911',
              },
              ticks: {
                fontColor: "white",
                fontSize: 10
              }
            }]
          },
          responsive: true,



          defaultColor: '#FFFFFF',

        },
        data: {
          labels: this.labels,
          datasets: [
           {
            label: 'Quantity',
            data: this.count,
            fill: false,
            borderColor: 'rgb(255,215,0)',

           } ]
        },
      });
    });




 
    this.ft.getRevenuebycategorieclient().subscribe(res => {
      this.listRevenuebycategorieclient = res;

      for (let i of this.listRevenuebycategorieclient) {
        this.labels1.push(i[1]);
      }
      for (let i of this.listRevenuebycategorieclient) {
        this.count1.push(i[0]);
      }



      this.chart = new Chart('bar', {

        type: 'bar',
        options: {
          legend: {
            display: false
          },
          scales: {

            xAxes: [{
              gridLines: { color: "#FFFFFF", },

              display: true,
              scaleLabel: {

                display: true,
                labelString: 'Client category',
                fontColor: '#FFFFFF',
                fontSize: 10,
                fontFamily: 'Goudy Bookletter 1911',

              },

              ticks: {

                fontColor: "white",
                fontSize: 10
              }
            }

            ],
            yAxes: [{
              gridLines: { color: "#FFFFFF" },
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Ammount',
                fontColor: '#FFFFFF',
                fontSize: 10,
                fontFamily: 'Goudy Bookletter 1911',
              },
              ticks: {
                fontColor: "white",
                fontSize: 10
              }
            }]
          },
          responsive: true,



          defaultColor: '#FFFFFF',

        },

        data: {

          labels: this.labels1,

          datasets: [
            {
              label: '',
              borderWidth: 0.5,
              barPercentage: 0.5,
              barThickness: 6,
              type: 'bar',
              data: this.count1,
              backgroundColor: 'white',
              borderColor: 'white',
              fill: false,
              pointBorderColor: 'white',
              pointHoverBackgroundColor: 'white',

              borderDash: [2, 5],
            },

          ]

        },



      });
    });

    this.ec.getmostproductsale().subscribe(result => {

      this.libellet = result.libelleproduit;
    })
   this.cl.nombredeclientparprofession().subscribe(result => {
    this.list1 = result;
 
    for (let i of this.list1) {
      this.labels2.push(i[1]);
      console.log(this.labels2)
    }
    for (let i of this.list1) {
      this.count2.push(i[0]);
      console.log(this.count2)
    }
 this.chart = new Chart('polarArea', {
      type: 'polarArea',
      data: {
        labels: this.labels2,
        datasets: [
         {
          data: this.count2,
          fill: true,
         
          borderColor: '#FFFFFF',
          pointBackgroundColor: '#FFFFFF',
          pointBorderColor: '#FFFFFF',
          pointHoverBackgroundColor: '#FFFFFF',
          pointHoverBorderColor: '#FFFFFF',
          backgroundColor: [
            'rgb(255, 132, 0)',
            'rgb(54, 162, 235)',
          'rgb(75, 192, 192)',
          'rgb(201, 203, 207)',
          'rgb(255, 99, 132)',
        ]
         } ,
        ]
      },
      
    });
   })





    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

   

  }
  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }

}
