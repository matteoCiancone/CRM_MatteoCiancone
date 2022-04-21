import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientiComponent } from './clienti-components/clienti/clienti.component';
import { AddClienteComponent } from './clienti-components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clienti-components/edit-cliente/edit-cliente.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { ClienteDetailComponent } from './clienti-components/cliente-detail/cliente-detail.component';
import { ProvinceComponent } from './province-component/province/province.component';
import { EditProvinceComponent } from './province-component/edit-province/edit-province.component';
import { AddProvinceComponent } from './province-component/add-province/add-province.component';
import { ProvinceDetailComponent } from './province-component/province-detail/province-detail.component';
import { ComuniComponent } from './comuni-component/comuni/comuni.component';
import { EditComuniComponent } from './comuni-component/edit-comuni/edit-comuni.component';
import { AddComuniComponent } from './comuni-component/add-comuni/add-comuni.component';
import { DetailComuniComponent } from './comuni-component/detail-comuni/detail-comuni.component';
import { StatoFatturaComponent } from './stato-fattura-component/stato-fattura/stato-fattura.component';
import { EditStatoFatturaComponent } from './stato-fattura-component/edit-stato-fattura/edit-stato-fattura.component';
import { FattureComponent } from './fatture-component/fatture/fatture.component';
import { AddFattureComponent } from './fatture-component/add-fatture/add-fatture.component';
import { EditFattureComponent } from './fatture-component/edit-fatture/edit-fatture.component';
import { DashboardComponent } from './dashboard-component/dashboard/dashboard.component';
import { FattureDetailComponent } from './fatture-component/fatture-detail/fatture-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ClientiComponent,
    AddClienteComponent,
    EditClienteComponent,
    ClienteDetailComponent,
    ProvinceComponent,
    EditProvinceComponent,
    AddProvinceComponent,
    ProvinceDetailComponent,
    ComuniComponent,
    EditComuniComponent,
    AddComuniComponent,
    DetailComuniComponent,
    StatoFatturaComponent,
    EditStatoFatturaComponent,
    FattureComponent,
    AddFattureComponent,
    EditFattureComponent,
    DashboardComponent,
    FattureDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    AppRoutingModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
