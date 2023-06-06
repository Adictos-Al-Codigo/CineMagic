import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosuelComponent } from './carrosuel/carrosuel.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [CarrosuelComponent, HeaderComponent],
  exports: [CarrosuelComponent, HeaderComponent],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponenteModule { }
