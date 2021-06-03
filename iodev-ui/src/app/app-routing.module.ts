import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsuarioComponent } from './dashboard/dashboard-usuario/dashboard-usuario.component';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { Erro404Component } from './paginas/erro404/erro404.component';
import { HomeComponent } from './paginas/home/home.component';
import { RegistrarUsuarioComponent } from './registro/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: 'registro/usuario', component: RegistrarUsuarioComponent },
  {
    path: 'dashboard/:uid',
    component: DashboardUsuarioComponent,
    resolve: {
      dados: DashboardResolver,
    },
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'erro404', component: Erro404Component },
  { path: '**', redirectTo: '/erro404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
