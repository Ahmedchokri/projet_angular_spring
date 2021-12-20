import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListfactureComponent } from 'app/listfacture/listfacture.component';
import { FactureComponent } from 'app/facture/facture.component';
import { ListdetailfactureComponent } from 'app/listdetailfacture/listdetailfacture.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from 'app/full-calendar/full-calendar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);

@NgModule({
  declarations: [
    FactureComponent,
    ListfactureComponent,
    ListdetailfactureComponent,
    FullCalendarComponent,
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
    MatIconModule,
    FullCalendarModule,
    MatSelectModule,
    FullCalendarModule,
    MatFormFieldModule,
  ]
})
export class AdminFactureModule { }
