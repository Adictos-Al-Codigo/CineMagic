import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

  GetMovieByName(nomPelicula:string){
    return this.httpClientModule.get("https://api.themoviedb.org/3/search/movie?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + nomPelicula + "&page=1&include_adult=true");
  }
}
