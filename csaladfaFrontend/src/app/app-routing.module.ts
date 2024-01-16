import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsaladtagokComponent } from './parts/csaladtagok/csaladtagok.component';
import { UjtagokComponent } from './parts/ujtagok/ujtagok.component';
import { HomeComponent } from './parts/home/home.component';

const routes: Routes = [
  {path:'csaladtagok', component:CsaladtagokComponent},
  {path:'ujtagok', component:UjtagokComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
