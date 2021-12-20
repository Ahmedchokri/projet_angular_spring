import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { UpdaterayonComponent } from 'app/updaterayon/updaterayon.component';
import { AgmCoreModule } from '@agm/core';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from 'app/app.routing';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [ 
    AddrayonComponent,
    UpdaterayonComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,

 
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ]
})
export class AdminRayonModule { }
