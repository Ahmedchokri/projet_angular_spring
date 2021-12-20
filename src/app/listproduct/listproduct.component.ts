import { Component, Inject, OnInit,ViewChild,} from '@angular/core';
import { produit } from 'app/modals/product';
import { MatPaginator, } from '@angular/material/paginator';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ProductService } from 'app/product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ListdetailsproductComponent } from 'app/listdetailsproduct/listdetailsproduct.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import{QRCodeModule} from 'angularx-qrcode';
import { QrScannerComponent } from 'angular2-qrscanner';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  @ViewChild(QrScannerComponent,{static:true}) qrScannerComponent: QrScannerComponent ;
  scancode1:boolean;
  qrData:string;
  showqr:boolean=false;
  public createdcode:string=null;
  test:string;
change:boolean=false;
change1:boolean=false
listproduits:produit[]=[];
listfilter:produit[]=[];
dataSource:MatTableDataSource<produit>;
displayedColumns=[ "codeproduit","libelle", "prix_unitaire","status"];
id:string;
fileName= 'ExcelSheet.xlsx';
search : string;
request:string;
showimage:boolean=false;
createcode:string;
producit1 :produit=new produit();
@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator,{static:true}) paginator: MatPaginator; 

  constructor(private ec:ProductService,public dialog: MatDialog,private snackBar: MatSnackBar) { 
 
  

}
openDialog(id): void {
  const dialogRef = this.dialog.open(ListdetailsproductComponent, {
    width: '700px',
    height:'700px',
    data: id,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}
showqr1(){
 this.showqr=true;
  this.qrScannerComponent.getMediaDevices().then(devices => {
    console.log(devices);
    const videoDevices: MediaDeviceInfo[] = [];
    for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
            videoDevices.push(device);
        }
    }
    if (videoDevices.length > 0){
        let choosenDev;
        for (const dev of videoDevices){
            if (dev.label.includes('front')){
                choosenDev = dev;
                break;
            }
        }
        if (choosenDev) {
            this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
            this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
    }
});
this.qrScannerComponent.capturedQr.subscribe(result => {
let j:boolean = false;
 let i=0;
 let produitshow :produit;
while((i<this.listproduits.length)&&(j==false)){
  this.createdcode='BEGIN QRCODE:NAME:'+this.listproduits[i].codeproduit+':TECH ADDA DATE:2020-07-18';
  if(result===this.createdcode){
    j= true;
    console.log(this.listproduits[i]); 
    produitshow=this.listproduits[i];
  }
  else{
    j=false;
    i=i+1;
 
  }
}
   if (j==true){
         this.play();
         this.snackBar.open('le produit existe ayant le code : '+produitshow.codeproduit,'ok',{
          data:{
            duration:500,
        type:'error',
        message: 'Product exist/n le code du produit'+produitshow.codeproduit,
        buttonText: 'OK',
        
          },
          verticalPosition:'bottom',
          horizontalPosition:'center',
          panelClass:'ok',
          
        })
    }
    else{
      this.play1();
      this.snackBar.open('Produit n"existe pas','error',{
        data:{
          duration:500,
      type:'error',
      message: 'Product dont exist',
      buttonText: 'OK',
      
        },
        verticalPosition:'bottom',
        horizontalPosition:'center',
        panelClass:'error',
        
      })
    }

});
}
  ngOnInit(): void { 
 
  this.ec.allproducts().subscribe(
    
    res =>{
    this.listproduits=res;
    this.dataSource=new MatTableDataSource(this.listproduits);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
    
  });
  

}
exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
       ws['!cols'][3] = { hidden: true };
       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
 
 search1(){
   if(this.search!=''){
this.ec.allproducts().subscribe(
     
    res =>{
    this.listproduits=res;
    console.log(this.listproduits);
    this.listfilter=this.listproduits.filter((produit) =>{
      return ((produit.codeproduit === this.search)||(produit.libelleproduit===this.search));
   })
    console.log(this.listfilter);
    this.dataSource=new MatTableDataSource(this.listfilter);
    this.dataSource.paginator=this.paginator;
    
  });


   }
   else{
     this.ngOnInit();
  }

 }
changer(){ 
  this.change=true;
  this.change1=false;
}
ajouter_list(){
 
this.ngOnInit();
}
delete( id){
  console.log(id);
this.ec.deleteProduct(id).subscribe(()=>{this.ngOnInit()});
this.snackBar.open('Produit deleted succefully','success'),{
  data:{
    duration:500,
type:'success',
message: 'Product deleted successfully',
buttonText: 'OK',

  },
  verticalPosition:'bottom',
  horizontalPosition:'center',
  panelClass:'success',
  
}

}
modifier($x){
this.producit1=$x;
this.change1=true;
this.change=false;
}
charger($event){
  this.ngOnInit();
}
show2($x){
this.showimage=true;
this.request=$x;
}
play(){
  let audio = new Audio();
  audio.src = "./assets/img/song.mp3";
  audio.load();
  audio.play();
}
play1(){
  let audio = new Audio();
  audio.src = "./assets/img/song1.mp3";
  audio.load();
  audio.play();
}
public sortData(): void {
  switch (this.sort.direction) {
    case 'asc':
      this.sort.direction = 'asc';
      break;
    case 'desc':
      this.sort.direction = 'desc';
      break;
    default:
      this.sort.direction = 'asc';
  }
}
}



