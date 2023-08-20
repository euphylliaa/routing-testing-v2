import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layer1RoutingModule } from './layer1-routing.module';
import { Layer1Component } from './layer1/layer1.component';


@NgModule({
  declarations: [
    Layer1Component
  ],
  imports: [
    CommonModule,
    Layer1RoutingModule
  ]
})
export class Layer1Module { }
