import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { detailproduit } from 'app/modals/detailproduit';
@Component({
  selector: 'app-detailsproduit',
  templateUrl: './detailsproduit.component.html',
  styleUrls: ['./detailsproduit.component.css']
})
export class DetailsproduitComponent implements OnInit {
   categorie=[
    {value: '0', viewValue: 'Electromenager'},
    {value: '1', viewValue: 'Alimentaire'},
    {value: '2', viewValue: 'Quincaillerie'},
   ]
   myForm : FormGroup;
   @Output() request5= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.myForm =new FormGroup({
    date_creation: new FormControl( '',Validators.required),
  date_dermodification:new FormControl('' ,Validators.required),
  categorieproduit:new FormControl('',Validators.required),
  
  })
  }
  
  save(){
    if (this.myForm.valid){
      console.log(this.myForm.valid)
         this.request5.emit(this.myForm.getRawValue());
         this.myForm.reset()
    }
  }
}
