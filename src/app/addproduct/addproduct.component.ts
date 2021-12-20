import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { produit } from 'app/modals/product';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StockserviceService } from 'app/stockservice.service';
import { Stock } from 'app/modals/stock';
import { RayonService } from 'app/rayon.service';
import { Rayon } from 'app/modals/rayon';
import { ProductService } from 'app/product.service';
import { detailproduit } from 'app/modals/detailproduit';
import { DetailsproductService } from 'app/detailsproduct.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  imgFile: string;

product : produit  =new produit();
@Output() request5= new EventEmitter();
addform : FormGroup; 
rayonform:FormGroup;
stockform:FormGroup;
idstock;
stock : Stock[];
rayon:Rayon[];
idrayon;
detail;
prd;
test:boolean=false;
message:string;
  constructor(private st : StockserviceService, private r:RayonService,private pr:ProductService,private dp:DetailsproductService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {  
    this.st.RetrieveallStock().subscribe(res => {
      this.stock=res;
    })
   this.r.Retrieveallrayon().subscribe(res=>{this.rayon=res});
    this.addform=new FormGroup({
      codeproduit : new FormControl(this.product.codeproduit,Validators.compose([Validators.required, Validators.minLength(4)])),
      libelleproduit: new FormControl(this.product.libelleproduit,Validators.minLength(4)), 
     prixunitaire : new FormControl(this.product.prixunitaire,Validators.compose([Validators.required,Validators.min(100)])),
     image: new FormControl(this.product.image,Validators.required),
      });
      this.rayonform=new FormGroup({
        rayon: new FormControl('',Validators.required),
        });
        this.stockform=new FormGroup({
          stock: new FormControl('',Validators.required),
          });
    }
  
save(){
  this.product.image=this.imgFile;
  if (this.addform.valid){
    this.test=true;
    
  let serializedForm = JSON.stringify(this.product);
  this.prd=serializedForm;
  console.log(this.prd);
  this.addform.reset();
  this.imgFile='';
  }
 
}
save1(i){
 
 
  this.detail=i;
 
  
}
save2(){
  if(this.stockform.valid){
    this.test=true;
    let serializedForm = JSON.stringify(this.stockform.getRawValue()['stock']);
  this.idstock=serializedForm;
  this.stockform.reset();
  }
  
}
save3(){
  if(this.rayonform.valid){
    this.test=true;
     let serializedForm = JSON.stringify(this.rayonform.getRawValue()['rayon']);
  this.idrayon=serializedForm;
console.log(this.idrayon);
this.rayonform.reset();
  }
 
}

enregistrer(){
  if (this.test==true){

 this.dp.addddetailproduct(this.detail).subscribe(res =>{
    this.pr.addProduct(this.prd,this.idstock, this.idrayon,res).subscribe();
    this.snackBar.open('le produit est ajouté avec succée !' ,'ok',{
      data:{
        duration:500,
    type:'error',
    message: 'le produit est ajouté avec succée',
    buttonText: 'OK',
    
      },
      verticalPosition:'bottom',
      horizontalPosition:'center',
      panelClass:'ok',
      
    })
    this.message='Le formulaire est remplie';
    this.request5.emit();
    window.location.reload();
}
   
 );
  }
  else{

    this.message ="Vous devrez remplir tout le formulaire"
  }

 
}
onImageChange(e) {
  const reader = new FileReader();
  
  if(e.target.files && e.target.files.length) {
    const [file] = e.target.files;
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      this.imgFile = reader.result as string;
    
 
    };
  }
}


  
}
