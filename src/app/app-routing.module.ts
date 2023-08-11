import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { EspaciosComponent } from './pages/espacios/espacios.component';
import { MembresiasComponent } from './pages/membresias/membresias.component';
import { EventosComponent } from './pages/eventos/eventos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'explorar',
    component: ExplorarComponent,
  },
  {
    path: 'espacios',
    component: EspaciosComponent,
  },
  {
    path: 'membresias',
    component: MembresiasComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
