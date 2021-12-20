import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


import { MDBBootstrapModule ,DropdownModule} from 'angular-bootstrap-md';

import { ProductService } from 'app/product.service';
import { DetailsproductService } from 'app/detailsproduct.service';

import {MatSnackBarModule} from '@angular/material/snack-bar'

import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import{QRCodeModule} from 'angularx-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { StockserviceService } from 'app/stockservice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from 'app/login/login.component';

import { NgxJdenticonModule } from "ngx-jdenticon";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);


@NgModule({
  imports: [ 
    MatDatepickerModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatNativeDateModule,
    ChartsModule,
    DropdownModule,
    MatSnackBarModule,
    QRCodeModule,
    NgQrScannerModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    NgxJdenticonModule,
    SweetAlert2Module,
    FullCalendarModule,
 

  ],
  declarations: [
    
    LoginComponent,
  ],
  providers: [ProductService,DetailsproductService,StockserviceService,MatDatepickerModule,DatePipe,{provide:MAT_DATE_LOCALE,useValue:"en-GB"},

],
  
})

export class AdminLayoutModule {}
