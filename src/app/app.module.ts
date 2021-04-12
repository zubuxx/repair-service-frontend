import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuClientComponent } from './client/menu-client/menu-client.component';
import { MenuPanelComponent } from './panel/menu-panel/menu-panel.component';
import { OrdersComponent } from './panel/orders/orders.component';
import { EmplyeesComponent } from './panel/emplyees/emplyees.component';
import { AccountComponent } from './panel/account/account.component';
import { StatisticsComponent } from './panel/statistics/statistics.component';
import { BlackListComponent } from './panel/black-list/black-list.component';
import { RepairsComponent } from './panel/repairs/repairs.component';
import { ContactComponent } from './client/contact/contact.component';
import { AboutComponent } from './client/about/about.component';
import { ServicesComponent } from './client/services/services.component';
import { SparePartsComponent } from './client/spare-parts/spare-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ClientComponent,
    PageNotFoundComponent,
    MenuClientComponent,
    MenuPanelComponent,
    OrdersComponent,
    EmplyeesComponent,
    AccountComponent,
    StatisticsComponent,
    BlackListComponent,
    RepairsComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    SparePartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
