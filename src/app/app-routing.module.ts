import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  { path: '', loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
