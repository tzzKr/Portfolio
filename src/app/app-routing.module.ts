import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
