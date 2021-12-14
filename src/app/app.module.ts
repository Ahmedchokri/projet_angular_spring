import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ClientComponent } from './client/client.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { StockComponent } from './stock/stock.component';
import { RayonComponent } from './rayon/rayon.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FactureComponent } from './facture/facture.component';
import { EditComponent } from './edit/edit.component';
import { ProductService } from './product.service';
import { ShowimageComponent } from './showimage/showimage.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
//                //ng2-order-pipe

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditdetailproductComponent } from './editdetailproduct/editdetailproduct.component';
import { ChartviewComponent } from './chartview/chartview.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ListfactureComponent } from './listfacture/listfacture.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { AddfournisseurComponent } from './addfournisseur/addfournisseur.component';
import { UpdatefournisseurComponent } from './updatefournisseur/updatefournisseur.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { NgxJdenticonModule } from "ngx-jdenticon";


import { QRCodeModule } from 'angularx-qrcode';
import { MatDialogModule } from '@angular/material/dialog';
import { AddStock1Component } from './add-stock1/add-stock1.component';
import { Editstock1Component } from './editstock1/editstock1.component';
import { ListdetailfactureComponent } from './listdetailfacture/listdetailfacture.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTooltipModule,
    MatFormFieldModule,
  MatDialogModule,
 
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatIconModule,
    QRCodeModule,
    NgxJdenticonModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientComponent,
    FournisseurComponent,
    StockComponent,
    RayonComponent,
    AcceuilComponent,
     
    ListClientComponent,
          AddStock1Component,
          Editstock1Component,
      
         
    
 
 
    
   
 

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
