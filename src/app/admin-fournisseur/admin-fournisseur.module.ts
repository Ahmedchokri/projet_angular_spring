import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatefournisseurComponent } from 'app/updatefournisseur/updatefournisseur.component';
import { AddfournisseurComponent } from 'app/addfournisseur/addfournisseur.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    AddfournisseurComponent,
    UpdatefournisseurComponent,],
  imports: [
    CommonModule, 
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    SweetAlert2Module,
   
  ]
})
export class AdminFournisseurModule { }
