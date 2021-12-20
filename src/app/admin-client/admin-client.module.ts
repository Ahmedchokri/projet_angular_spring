import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from 'app/add-client/add-client.component';
import { DetailclientComponent } from 'app/detailclient/detailclient.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateClientComponent } from 'app/update-client/update-client.component';
import { ListClientComponent } from 'app/list-client/list-client.component';



@NgModule({
  declarations: [
    DetailclientComponent,
    AddClientComponent,
    UpdateClientComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
 
  ]
})
export class AdminClientModule { }
