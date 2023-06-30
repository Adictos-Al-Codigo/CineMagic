import { LoginI } from './../modelo/login.interface';
import { RegistrarI } from '../modelo/registration.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemoviesdbService {

  api_url:string = "https://api.themoviedb.org/3/";

  constructor(private httpClientModule:HttpClient) { }
  

  // Obtener estrenos
  GetPhotosReleases(){
    return this.httpClientModule.get(this.api_url + "movie/now_playing?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&page=1");
  }

  // Obtener carteleras

  GetAllBillboards(){
    return this.httpClientModule.get(this.api_url + "movie/upcoming?api_key=43bb95cae941badc90476b9f10f04134&language=es-ES&page=1");
  }

  GetMoviesDetails(idPelicula:string){
    return this.httpClientModule.get(this.api_url + "movie/" + idPelicula + "?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES");
  }

  ObtainAllGenres(){
    return this.httpClientModule.get(this.api_url + "genre/movie/list?api_key=435a680aac6331beaf591ad78cfc73f9");
  }

  GetFilmPhotos(idPelicula:string){
    return this.httpClientModule.get(this.api_url + "movie/" + idPelicula + "/images?api_key=435a680aac6331beaf591ad78cfc73f9");
  }

  GetMovieByName(nomPelicula:string, numPag:string){
    return this.httpClientModule.get("https://api.themoviedb.org/3/search/movie?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + nomPelicula + "&page=" + numPag + "&include_adult=true");
  }

  // Apis creadas de Usuario

  // Login

  Login(form:LoginI):Observable<LoginI>{
    let api_url = "http://127.0.0.1:3000/api/login";
    return this.httpClientModule.post<LoginI>(api_url,form);
  }

  // Registro

  Registration(_Form:RegistrarI):Observable<RegistrarI>{
    let api_url = "http://127.0.0.1:3000/api/user";
    return this.httpClientModule.post<RegistrarI>(api_url,_Form);
  }
}
