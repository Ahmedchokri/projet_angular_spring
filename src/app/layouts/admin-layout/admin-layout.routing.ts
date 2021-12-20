import { Routes } from '@angular/router';




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
import { AddrayonComponent } from 'app/addrayon/addrayon.component';
import { UpdaterayonComponent } from 'app/updaterayon/updaterayon.component';
import { AddStock1Component } from 'app/add-stock1/add-stock1.component';
import { FullCalendarComponent } from 'app/full-calendar/full-calendar.component';


export const AdminLayoutRoutes: Routes = [
  
    { path: 'dashboard',      component: AcceuilComponent },
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
      {
        path: 'produit',
        component: ListproductComponent,
        children: [{
          path: '',
          loadChildren: () => import('app/admin-product/admin-product.module').then(m => m.AdminProductModule)
        }]
      },
      {
        path: 'stock',
        component: StockComponent,
        children: [{
          path: '',
          loadChildren: () => import('app/admin-stock/admin-stock.module').then(m => m.AdminStockModule)
        }]
      },
      {
        path: 'fournisseur',
        component: FournisseurComponent,
        children: [{
          path: '',
          loadChildren: () => import('app/admin-fournisseur/admin-fournisseur.module').then(m => m.AdminFournisseurModule)
        }]
      },
      {
        path: 'client',
        component: ClientComponent,
        children: [{
          path: '',
          loadChildren: () => import('app/admin-client/admin-client.module').then(m => m.AdminClientModule)
        }]
      },
      {
        path: 'rayon',
        component: RayonComponent,
        children: [{
          path: '',
          loadChildren: () => import('app/admin-rayon/admin-rayon.module').then(m => m.AdminRayonModule)
        }]
      },
      {
        path: 'facture',
        component: FactureComponent,
        children: [{
          path: '',
          loadChildren: () => import('app/admin-facture/admin-facture.module').then(m => m.AdminFactureModule)
        }]
      },

];
