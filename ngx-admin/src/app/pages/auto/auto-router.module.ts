import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoComponent } from './auto.component';
import { VehicleAddComponent } from './vehicle-add/vehicle-add.component';
import { AutoDashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{
  path: '',
  component: AutoComponent,
  children: [
    {
      path: '',
      component: AutoDashboardComponent
    },
    {
      path: 'vehicles-add',
      component: VehicleAddComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AutoRoutingModule { }