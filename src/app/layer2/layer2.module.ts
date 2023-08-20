import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layer2RoutingModule } from './layer2-routing.module';
import { Layer2Component } from './layer2/layer2.component';


@NgModule({
  declarations: [
    Layer2Component
  ],
  imports: [
    CommonModule,
    Layer2RoutingModule
  ]
})
export class Layer2Module { }
