import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosuelComponent } from './carrosuel/carrosuel.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [CarrosuelComponent, HeaderComponent, FooterComponent],
  exports: [CarrosuelComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponenteModule { }
