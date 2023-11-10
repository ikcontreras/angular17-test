import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
    HttpClientModule,
  ]
})
export class SharedModule {}
