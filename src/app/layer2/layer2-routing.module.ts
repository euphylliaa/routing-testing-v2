import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layer2Component } from './layer2/layer2.component';

const routes: Routes = [
  {
    path: '',
    component: Layer2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layer2RoutingModule { }
