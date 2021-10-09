import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCreateComponent } from './components/register/register-create/register-create.component';
import { RegisterDeleteComponent } from './components/register/register-delete/register-delete.component';
import { RegisterUpdateComponent } from './components/register/register-update/register-update.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterGeneralComponent } from './views/register-general/register-general.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "registro",
    component: RegisterGeneralComponent
  },
  {
    path: "registro/novo",
    component: RegisterCreateComponent
  },
  {
    path: "registro/editar/:id",
    component: RegisterUpdateComponent
  },
  {
    path: "registro/deletar/:id",
    component: RegisterDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
