import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardResolver } from './dashboard/dashboard.resolver';
import { Erro404Component } from './paginas/erro404/erro404.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {
    path: 'registro/usuario',
    loadChildren: () =>
      import('./registro/registro.module').then((r) => r.RegistroModule),
  },
  {
    path: 'dashboard/:uid',
    resolve: {
      dados: DashboardResolver,
    },
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashboardModule),
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
