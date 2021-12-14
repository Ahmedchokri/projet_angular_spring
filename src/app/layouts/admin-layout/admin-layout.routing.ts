import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';



import { ListproductComponent } from 'app/listproduct/listproduct.component';
import { ClientComponent } from 'app/client/client.component';
import { FournisseurComponent } from 'app/fournisseur/fournisseur.component';
import { StockComponent } from 'app/stock/stock.component';
import { RayonComponent } from 'app/rayon/rayon.component';
import { AcceuilComponent } from 'app/acceuil/acceuil.component';
import { FactureComponent } from 'app/facture/facture.component';
import { EditComponent } from 'app/edit/edit.component';
import { ListfactureComponent } from 'app/listfacture/listfacture.component';
import { AddfournisseurComponent } from 'app/addfournisseur/addfournisseur.component';
import { UpdatefournisseurComponent } from 'app/updatefournisseur/updatefournisseur.component';
import { ListClientComponent } from 'app/list-client/list-client.component';
import { AddClientComponent } from 'app/add-client/add-client.component';
import { UpdateClientComponent } from 'app/update-client/update-client.component';
import { DetailclientComponent } from 'app/detailclient/detailclient.component';
import { LoginComponent } from 'app/login/login.component';
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { UpdaterayonComponent } from 'app/updaterayon/updaterayon.component';
import { AddStock1Component } from 'app/add-stock1/add-stock1.component';
import { FullCalendarComponent } from 'app/full-calendar/full-calendar.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: AcceuilComponent },
    { path: 'user',   component: UserProfileComponent },
    { path: 'produit',     component: ListproductComponent,children:[
        {path:'modifier/:idproduit',component: EditComponent},
    ]},
    { path: 'stock',     component: StockComponent },
    { path: 'fournisseur',          component: FournisseurComponent,children:[
        {path:'addfournisseur',component:AddfournisseurComponent},
     {path:"updatefournisseur/:idfournisseur" , component:UpdatefournisseurComponent},
    ] },
    { path: 'client'      , component: ClientComponent ,children:[
        {path:"ajoutclient",component:AddClientComponent},
        {path:"updateclient/:id",component:UpdateClientComponent},
        {path:"detailclient/:id",component:DetailclientComponent},
    ]},

     {path: 'facture', component: ListfactureComponent,children :[{path:'addfacture', component:FactureComponent},{path:'fullcalendar',component:FullCalendarComponent}]},
     {path:"clients",component:ListClientComponent},
    
   
     {path:"addfacture",component:FactureComponent},
    
     {path:'addfournisseur',component:AddfournisseurComponent},
     {path:"rayon" , component: RayonComponent ,children:[
        {path:"addrayon", component:AddrayonComponent},
         {path:"updaterayon/:idrayon" , component:UpdaterayonComponent}
      ]}, 
      {path:'AddStock1',component:AddStock1Component},


];
