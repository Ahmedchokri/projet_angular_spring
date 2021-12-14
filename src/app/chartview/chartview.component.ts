import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { data } from 'jquery';

@Component({
  selector: 'app-chartview',
  templateUrl: './chartview.component.html',
  styleUrls: ['./chartview.component.css']
})
export class ChartviewComponent implements OnInit {
  list=[];
  newlist=[];
  labels=[];
  title="stock";
  count=[]; 
  search:string;
  public chartDatasets: Array<any> = [];
  public chartLabels: Array<any> = [];
  constructor(private ec:ProductService) {
 
   }

  ngOnInit(): void {  
    this.labels=[];
    this.count=[]; 
     this.ec.getquantitybycategorie().subscribe(data =>
      {

        this.list=data;
         
          for(let i of this.list){
            this.labels.push(i[1]);
          }
          for(let i of this.list){
            this.count.push(i[0]);
          }
    
this.chartDatasets=[{data: this.count, label: 'My First dataset'}]
     this.chartLabels=this.labels;

   
    });
  }
  public chartType: string = 'doughnut';



  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD','#a42df3'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1','#a42df3'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  search1(){
   if(this.search!=''){
     this.labels=[];
     this.count=[];
     this.newlist=[];
 this.ec.getquantitystockbycategorie().subscribe(data=>{
   this.list=data;
   console.log(this.list)
   for ( let i of this.list){
    if(i[2]===this.search){
      this.newlist.push(i);
    }
   
} 
for(let i of this.newlist){
  this.labels.push(i[1]);
}
for(let i of this.newlist){
  this.count.push(i[0]);
}

this.chartDatasets=[{data: this.count, label: 'My First dataset'}]
this.chartLabels=this.labels;
console.log(this.newlist);
 

  });


}
   else{ 
     this.ngOnInit();
   }
  }
}
