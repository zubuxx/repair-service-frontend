import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PanelComponent} from "./panel/panel.component";
import {ClientComponent} from "./client/client.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {OrdersComponent} from "./panel/orders/orders.component";
import {RepairsComponent} from "./panel/repairs/repairs.component";
import {AccountComponent} from "./panel/account/account.component";
import {StatisticsComponent} from "./panel/statistics/statistics.component";
import {BlackListComponent} from "./panel/black-list/black-list.component";
import {SparePartsComponent} from "./client/spare-parts/spare-parts.component";
import {ServicesComponent} from "./client/services/services.component";
import {AboutComponent} from "./client/about/about.component";
import {ContactComponent} from "./client/contact/contact.component";

const routes: Routes = [
  {path: 'panel/zamowienia', component  : OrdersComponent},
  {path: 'panel/naprawy', component  : RepairsComponent},
  {path: 'panel/zamowienia', component  : OrdersComponent},
  {path: 'panel/rozliczenia', component  : AccountComponent},
  {path: 'panel/statystyki', component  : StatisticsComponent},
  {path: 'panel/czarna-lista', component  : BlackListComponent},
  {path: 'panel', component : PanelComponent},
  {path: 'client/czesci-zamienne', component : SparePartsComponent},
  {path: 'client/uslugi', component : ServicesComponent},
  {path: 'client/o-firmie', component : AboutComponent},
  {path: 'client/contact', component : ContactComponent},
  {path: '', component : ClientComponent},
  {path: '404', component : PageNotFoundComponent},
  {path: '**', redirectTo : '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
