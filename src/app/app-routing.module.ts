import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './clienti-components/add-cliente/add-cliente.component';
import { ClienteDetailComponent } from './clienti-components/cliente-detail/cliente-detail.component';
import { ClientiComponent } from './clienti-components/clienti/clienti.component';
import { EditClienteComponent } from './clienti-components/edit-cliente/edit-cliente.component';
import { AddComuniComponent } from './comuni-component/add-comuni/add-comuni.component';
import { ComuniComponent } from './comuni-component/comuni/comuni.component';
import { EditComuniComponent } from './comuni-component/edit-comuni/edit-comuni.component';
import { DashboardComponent } from './dashboard-component/dashboard/dashboard.component';
import { AddFattureComponent } from './fatture-component/add-fatture/add-fatture.component';
import { EditFattureComponent } from './fatture-component/edit-fatture/edit-fatture.component';
import { FattureDetailComponent } from './fatture-component/fatture-detail/fatture-detail.component';
import { FattureComponent } from './fatture-component/fatture/fatture.component';
import { LoginComponent } from './login/login.component';
import { AddProvinceComponent } from './province-component/add-province/add-province.component';
import { EditProvinceComponent } from './province-component/edit-province/edit-province.component';
import { ProvinceComponent } from './province-component/province/province.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path:'', component: LoginComponent},

  { path:'dashboard', component: DashboardComponent,canActivate: [LoginGuard]},

 
  { path:"clienti",component: ClientiComponent,canActivate: [LoginGuard] },
  { path:"clienti/page/:page",component: ClientiComponent,canActivate: [LoginGuard] },
  { path:"addCliente",component: AddClienteComponent ,canActivate: [LoginGuard]},
  { path:"editClienti/:id",component: EditClienteComponent,canActivate: [LoginGuard] },
  { path:"clienteDetail/:id",component: ClienteDetailComponent,canActivate: [LoginGuard] },
  
  
  { path:"province/page/:page",component: ProvinceComponent,canActivate: [LoginGuard] },
  { path:"addProvincia",component: AddProvinceComponent ,canActivate: [LoginGuard] },
  { path:"editProvincia/:id",component: EditProvinceComponent ,canActivate: [LoginGuard] },

  
  { path:"comuni/page/:page",component: ComuniComponent,canActivate: [LoginGuard] },
  { path:"editComuni/:id",component: EditComuniComponent ,canActivate: [LoginGuard] },
  { path:"addComuni",component: AddComuniComponent ,canActivate: [LoginGuard] },


  { path:"fatture/page/:page",component: FattureComponent ,canActivate: [LoginGuard] },
  { path:"fattureDetail/:id",component: FattureDetailComponent,canActivate: [LoginGuard] },
  { path:"editFatture/:id",component: EditFattureComponent,canActivate: [LoginGuard] },
  { path:"addFatture/:id",component: AddFattureComponent,canActivate: [LoginGuard] },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
