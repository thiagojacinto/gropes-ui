import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsuarioComponent } from './dashboard/dashboard-usuario/dashboard-usuario.component';
import { RegistrarUsuarioComponent } from './registro/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path: 'registro/usuario', component: RegistrarUsuarioComponent},
  {path: 'dashboard/:uid', component: DashboardUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
