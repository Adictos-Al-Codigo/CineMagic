import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  
  @Input() public name!:string
  constructor(private loadingCtrl:LoadingController, private router:Router) { }

  ngOnInit() {}

  async showLoading(page:string) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando la Página...',
      duration: 3000,
    });
    
    this.router.navigate([page]);
    loading.present();

  }
  



}
