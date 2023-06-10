import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() public name!:string
  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando la Página...',
      duration: 3000,
    });

    debugger;

    loading.present();
  }
  



}
