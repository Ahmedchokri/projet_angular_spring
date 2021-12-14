import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ClientService } from 'app/client.service';
import { DetailfactureService } from 'app/detailfacture.service';
import { FactureService } from 'app/facture.service';
import { Client } from 'app/modals/client';
import { Detailfacture } from 'app/modals/detailfacture';
import { Facture } from 'app/modals/facture';
import { produit } from 'app/modals/product';
import { ProductService } from 'app/product.service';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  facture :Facture =new Facture();
  detailfacture: Detailfacture=new Detailfacture();
  prixunitaire:number;
  result :number ;
  prix: number=0 ;
  name = 'Angular';
  produits:produit[];
  clients:Client[];
  produ:produit;
  productForm: FormGroup;
   quantite:number ;
   idfacture:number;
   idproduit:number;
  constructor(private fb:FormBuilder,private ec:ProductService,private cs:ClientService,private fs:FactureService,private cv:DetailfactureService) {
   
    this.productForm = this.fb.group({
      client: '',
      dateFacture: '',
      Montant_remise:0, 
      Montant_Facture:0,
      Products: this.fb.array([
        this.fb.group({
          produit: 0,
          qty: 1,
          price: 0,
          pourcentage_remise: 0, 
          Montant_remise:'',
        })
      ]) ,
    });
  }
  ngOnInit(): void {
    this.ec.allproducts().subscribe(products => {
     this.produits=products;
    })
    this.cs.getClient().subscribe(clients => {
      this.clients=clients;
    })

  }

  Products() : FormArray {
    return this.productForm.get("Products") as FormArray
  }
   
  newQuantity(): FormGroup {
    
    return this.fb.group({
      produit: 0,
      qty: 1,
      price:0,
      pourcentage_remise: 0,
      Montant_remise:'',
    })
  }
   
  addProduct() {
   
    this.Products().push(this.newQuantity());
    
  }
   
  removeQuantity(i:number) {
    this.Products().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
    //////facture 
    let client_idclient=this.productForm.value['client'];
    this.facture.datefacture=this.productForm.value['dateFacture'];
    this.facture.montantfacture=this.productForm.value['Montant_Facture'];
    this.facture.montantremise=this.productForm.value['Montant_remise'];
    
     //////detail facture
     let serializedfacture= JSON.stringify(this.facture);
     console.log(serializedfacture);
     this.fs.addfacture(serializedfacture,client_idclient).subscribe(result => {
    this.idfacture=result;
  
          for(var i=0; i<this.productForm.value['Products'].length; i++){
   
      this.idproduit=this.productForm.value['Products'][i]['produit'];
      this.detailfacture.montantremise=this.productForm.value['Products'][i]['Montant_remise'];
      this.detailfacture.pourcentageremise=this.productForm.value['Products'][i]['pourcentage_remise'];
      this.detailfacture.quantite=this.productForm.value['Products'][i]['qty'];
      this.detailfacture.prixtotal=this.productForm.value['Products'][i]['price'];
      this.idfacture=result;
      
      let serializedfacture1= JSON.stringify(this.detailfacture);

       this.cv.adddetailfacture( serializedfacture1,this.idproduit,this.idfacture).subscribe(result =>{
        console.log('yes');
      })
}
window.location.reload();
     });
    


     
  }
 change(prixunitaire,i,product){
  let pourcentage_remise:number= this.productForm.get("Products").value[i]['pourcentage_remise'];
  let quantite:number= this.productForm.get("Products").value[i]['qty'];
  this.productForm.get("Products").value[i]['Montant_remise']=((prixunitaire*quantite*pourcentage_remise)/100);
   this.productForm.get("Products").value[i]['price']=(prixunitaire*quantite)-((prixunitaire*quantite*pourcentage_remise)/100);
    let total:number=(prixunitaire*quantite)-((prixunitaire*quantite*pourcentage_remise)/100);
    let totalremise:number=(prixunitaire*quantite*pourcentage_remise)/100;
  
  this.Products().controls.forEach((contol)=>{

    if(contol==product){
      contol.get("price").setValue(total);
      contol.get("Montant_remise").setValue(totalremise);
    }
    
  });
  this.onchange();
 }
 change1(i,product){

  let prodid = this.productForm.get("Products").value[i]['produit'];
 this.ec.getproduct(prodid).subscribe(result =>{
   this.produ=result;
   this.change(this.produ.prixunitaire,i,product);
 
 })
 
 }
change2(i,product){
  let pourcentage_remise:number= this.productForm.get("Products").value[i]['pourcentage_remise'];
  let quantity:number= this.productForm.get("Products").value[i]['qty'];
  let prodid = this.productForm.get("Products").value[i]['produit'];
  this.ec.getproduct(prodid).subscribe(result =>{
    this.produ=result;
   this.productForm.get("Products").value[i]['Montant_remise']=(quantity*pourcentage_remise*this.produ.prixunitaire)/100;
  let total:number=(quantity*pourcentage_remise*this.produ.prixunitaire)/100;
  this.productForm.get("Products").value[i]['price']=(this.produ.prixunitaire*quantity)-((this.produ.prixunitaire*quantity*pourcentage_remise)/100);
  let total1:number=(this.produ.prixunitaire*quantity)-((this.produ.prixunitaire*quantity*pourcentage_remise)/100);

 this.Products().controls.forEach((contol)=>{

  if(contol==product){
    contol.get("Montant_remise").setValue(total);
    contol.get("price").setValue(total1);
  
  }
  this.onchange();

});
  })
  


}
onchange(){
 console.log(  this.productForm.get("Products").value );
 let total :number=0 ;
 let total1 :number=0;
 for (let i=0;i<this.productForm.get("Products").value.length;i++){
   total =total+this.productForm.get("Products").value[i]['price']
   total1 =total1+this.productForm.get("Products").value[i]['Montant_remise']
 }
 this.productForm.get('Montant_Facture').setValue(total);
 this.productForm.get('Montant_remise').setValue(total1);
}
}
