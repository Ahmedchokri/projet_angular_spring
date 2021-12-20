import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddproductComponent } from 'app/addproduct/addproduct.component';
import { ListproductComponent } from 'app/listproduct/listproduct.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EditComponent } from 'app/edit/edit.component';

import { DetailsproduitComponent } from 'app/detailsproduit/detailsproduit.component';

import { MDBBootstrapModule ,DropdownModule} from 'angular-bootstrap-md';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListdetailsproductComponent } from 'app/listdetailsproduct/listdetailsproduct.component';
import { ProductService } from 'app/product.service';
import { DetailsproductService } from 'app/detailsproduct.service';
import { ShowimageComponent } from 'app/showimage/showimage.component';
import { EditdetailproductComponent } from 'app/editdetailproduct/editdetailproduct.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { ChartviewComponent } from 'app/chartview/chartview.component';
// For MDB Angular Free
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import{QRCodeModule} from 'angularx-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { FactureComponent } from 'app/facture/facture.component';
import { ListClientComponent } from 'app/list-client/list-client.component';
import { UpdateClientComponent } from 'app/update-client/update-client.component';
import { AddClientComponent } from 'app/add-client/add-client.component';
import { ListfactureComponent } from 'app/listfacture/listfacture.component';
import { DetailclientComponent } from 'app/detailclient/detailclient.component';
import { AddfournisseurComponent } from 'app/addfournisseur/addfournisseur.component';
import { UpdatefournisseurComponent } from 'app/updatefournisseur/updatefournisseur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { StockserviceService } from 'app/stockservice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from 'app/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from 'app/http-interceptor.service';
import { NgxJdenticonModule } from "ngx-jdenticon";
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { UpdaterayonComponent } from 'app/updaterayon/updaterayon.component';

import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ListdetailfactureComponent } from 'app/listdetailfacture/listdetailfacture.component';
import { FullCalendarComponent } from 'app/full-calendar/full-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

@NgModule({
  declarations: [
    ListproductComponent,
    EditComponent,
     AddproductComponent,
     DetailsproduitComponent,
     ListdetailsproductComponent,
     ShowimageComponent,
     EditdetailproductComponent,
     ChartviewComponent,
  ],
  
  imports: [
    CommonModule, 
    MatDatepickerModule,
    CommonModule,
    RouterModule,
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
  providers: [ProductService,DetailsproductService,MatDatepickerModule,DatePipe,{provide:MAT_DATE_LOCALE,useValue:"en-GB"},

],
})
export class AdminProductModule { }
