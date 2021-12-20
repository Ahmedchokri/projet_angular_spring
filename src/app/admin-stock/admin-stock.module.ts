import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';




import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  AgmCoreModule
} from '@agm/core';

import {NgxPaginationModule} from 'ngx-pagination'; 
//                //ng2-order-pipe

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { MatIconModule } from '@angular/material/icon';

import { NgxJdenticonModule } from "ngx-jdenticon";


import { QRCodeModule } from 'angularx-qrcode';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentsModule } from 'app/components/components.module';
import { AppRoutingModule } from 'app/app.routing';
import { AddStock1Component } from 'app/add-stock1/add-stock1.component';
import { Editstock1Component } from 'app/editstock1/editstock1.component';
import { StockComponent } from 'app/stock/stock.component';
import { StockserviceService } from 'app/stockservice.service';

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
    AddStock1Component,
    Editstock1Component,
    StockComponent,
  ],
  providers: [StockserviceService]},
)
export class AdminStockModule { }
