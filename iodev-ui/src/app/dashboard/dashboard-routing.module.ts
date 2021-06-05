import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
