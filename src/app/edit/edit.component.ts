import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from 'app/modals/product';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
modifyForm: FormGroup;
product : produit =new produit();

imgFile: string;
element: HTMLImageElement;
@Output() request = new EventEmitter();
@Input() producit1:produit;

  constructor(private activatedroute : ActivatedRoute,private ec:ProductService,private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void { 
  
     
     this.ec.getproduct(this.producit1.idproduit).subscribe(res=>{
       this.product=res;
      this.imgFile=this.product.image;
  
      this.modifyForm.get('image').setValue(this.product.image
        , {emitModelToViewChange: false});
     })
     
  
    this.modifyForm=new FormGroup({
      idproduit:new FormControl({value:this.product.idproduit,disabled: true},[Validators.required]),
      codeproduit : new FormControl(this.product.codeproduit,Validators.compose([Validators.required, Validators.min(100)])),
      libelleproduit: new FormControl(this.product.libelleproduit,Validators.compose([Validators.required,Validators.minLength(5)])), 
     prixunitaire : new FormControl(this.product.prixunitaire,Validators.compose([Validators.required,Validators.min(100)])),
    
      image : new FormControl(this.imgFile,Validators.compose([Validators.required])),
      });
  
    }
    modify(){
  if (this.modifyForm.valid){
     let serializedForm = JSON.stringify(this.modifyForm.getRawValue());
      console.log(serializedForm);
    this.ec.modifyproduct(serializedForm).subscribe(res =>{
        this.modifyForm.reset(); 
        this.imgFile='';
   this.request.emit("good");
  
    }
    );
    this.snackBar.open('le produit est modifié avec succée !' ,'ok',{
      data:{
        duration:500,
    type:'error',
    message: 'le produit est modifié avec succée',
    buttonText: 'OK',
    
      },
      verticalPosition:'bottom',
      horizontalPosition:'center',
      panelClass:'ok',
      
    })
  }
     
  

    }
    
    onImageChange(e) {
      const reader = new FileReader();
      if(e.target.files && e.target.files.length) {
        const [file] = e.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
     
          this.imgFile = reader.result as string;
          console.log(this.imgFile);
          this.modifyForm.patchValue({
            image: reader.result
            
          });
          this.modifyForm.get('image').setValue(reader.result
            , {emitModelToViewChange: false});
         
        };
      }
    }
    ngOnChanges(changes:SimpleChanges){
  

       if(!changes.producit1.firstChange){
      this.imgFile=this.producit1.image;
      this.modifyForm.get('image').setValue(this.imgFile
        , {emitModelToViewChange: false});
     
    };
  
       this.modifyForm.setControl('idproduit',new FormControl({value:this.producit1.idproduit,disabled: true},[Validators.required]));
       this.modifyForm.setControl('codeproduit',new FormControl(this.producit1.codeproduit,Validators.compose([Validators.required, Validators.min(100)])));
       this.modifyForm.setControl('libelleproduit',new FormControl(this.producit1.libelleproduit,Validators.compose([Validators.required,Validators.minLength(5)])));
       this.modifyForm.setControl('prixunitaire',new FormControl(this.producit1.prixunitaire,Validators.compose([Validators.required,Validators.min(100)])));
      
     }
    
  }


