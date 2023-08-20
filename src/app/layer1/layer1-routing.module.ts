import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layer1Component } from './layer1/layer1.component';

const routes: Routes = [
  {
    path: '',
    component: Layer1Component,
    children: [
      {
        path: 'layer2',
        loadChildren: () => import('../layer2/layer2-routing.module').then(m => m.Layer2RoutingModule),
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layer1RoutingModule { }
