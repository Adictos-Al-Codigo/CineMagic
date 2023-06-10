import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreMiPageRoutingModule } from './sobre-mi-routing.module';

import { SobreMiPage } from './sobre-mi.page';
import { ComponenteModule } from 'src/app/componente/componente.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreMiPageRoutingModule,
    ComponenteModule
  ],
  declarations: [SobreMiPage]
})
export class SobreMiPageModule {}
