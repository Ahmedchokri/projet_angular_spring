import { DatePipe, formatDate } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsproductService } from 'app/detailsproduct.service';
import { detailproduit } from 'app/modals/detailproduit';
import * as moment from 'moment';
import * as _moment from 'moment';

@Component({
  selector: 'app-editdetailproduct',
  templateUrl: './editdetailproduct.component.html',
  styleUrls: ['./editdetailproduct.component.css']
})
export class EditdetailproductComponent implements OnInit {
   moment = _moment;
  categorie=[
    {value: '0', viewValue: 'Electromenager'},
    {value: '1', viewValue: 'Alimentaire'},
    {value: '2', viewValue: 'Quincaillerie'},
   ]
   @Input() request : detailproduit;
   @Output() request1= new EventEmitter();
   detailsproduct : detailproduit =new detailproduit();
   myForm:FormGroup;

  
  constructor(private ec:DetailsproductService) {

   }

  ngOnInit(): void {
  this.myForm =new FormGroup({
    iddetailproduit: new FormControl({value:this.request.iddetailproduit,disabled: true}),
    date_creation: new FormControl( new Date(this.request.date_creation).toISOString()),
  date_dermodification:new FormControl( new Date(this.request.date_dermodification).toISOString()),
  categorieproduit:new FormControl(this.request.categorieproduit),
  
  })
  
 

 /* this.detailsproduct.date_dermodification=outputDate.toDateString();*/
  }
  save(){

if (this.myForm.valid){
  let serializedForm = JSON.stringify(this.myForm.getRawValue());
 this.ec.modifydetailproduct(serializedForm).subscribe();
this.request1.emit();
window.location.reload();
}
  }
}




