import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'', component:DashboardComponent},
    {path:'gestion/:id', component:GestionComponent},
    {path:'ajout', component:AjoutComponent},
    {path:'poc', component:ContainerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
