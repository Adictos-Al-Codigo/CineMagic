import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemoviesdbService {

  api_url:string = "https://api.themoviedb.org/3/";

  constructor(private httpClientModule:HttpClient) { }

  GetPhotosReleases(){
    return this.httpClientModule.get(this.api_url + "movie/now_playing?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&page=1");
  }

}
