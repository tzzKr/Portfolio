import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioMasterComponent } from './portfolio-master/portfolio-master.component';

const routes: Routes = [
  { path: '', component: PortfolioMasterComponent },
  { path: 'imprint', component: ImprintComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
