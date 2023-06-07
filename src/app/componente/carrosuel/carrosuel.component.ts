import { Component, OnInit } from '@angular/core';
import { ThemoviesdbService } from 'src/app/servicios/themoviesdb.service';


@Component({
  selector: 'app-carrosuel',
  templateUrl: './carrosuel.component.html',
  styleUrls: ['./carrosuel.component.scss'],
})
export class CarrosuelComponent  implements OnInit {

  constructor(private themoviesdbService:ThemoviesdbService) { }

  public url_fotos:any;

  ngOnInit() {
    this.GetPhotosReleases();
  }

  GetPhotosReleases(){
    this.themoviesdbService.GetPhotosReleases().subscribe({
      next: (s)=>{
        this.url_fotos = s;
        console.log(this.url_fotos);
      },
      error: (err) =>{
        debugger;
      }
    })
  }



}
