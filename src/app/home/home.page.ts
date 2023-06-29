import { Component, OnInit } from '@angular/core';
import { ThemoviesdbService } from '../servicios/themoviesdb.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private themoviesdbService:ThemoviesdbService) {}


  isModalOpen = false;
  public carteleras:any;
  public detallePelicula:any;
  public generos:any;
  public fotos:any;
  public peliculasEncontradas:any;
  public numPag:number =0;
  public mostrarComentario:boolean = false;

  ngOnInit(): void {
    this.GetAllBillboards();
    this.ObtainAllGenres();
  }

  GetAllBillboards(){
    this.themoviesdbService.GetAllBillboards().subscribe({
      next:(s) =>{
        this.carteleras = s;
      }, 
      error: (err) =>{
        debugger;
      }
    })
  }

  GetMoviesDetails(idPelicula:string){
    this.themoviesdbService.GetMoviesDetails(idPelicula).subscribe({
      next: (s) =>{
        this.detallePelicula = s;
        
      },
      error: (err) =>{
        debugger;
      }
    })
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ObtainAllGenres(){
    this.themoviesdbService.ObtainAllGenres().subscribe({
      next: (s) =>{
        this.generos = s;
      },
      error: (err) =>{
        debugger;
      }
    })
  }

  GetFilmPhotos(idPelicula:string){
    this.themoviesdbService.GetFilmPhotos(idPelicula).subscribe({
      next: (s) =>{
        this.fotos = s;
      },
      error: (err) =>{
        debugger;
      }
    })
  }

  GetMovieByName(object:any, operacion:string){


    if (operacion == "suma") {
      this.numPag++;
    }else if(operacion == 'resta'){
      this.numPag--;
    }else{
      this.numPag = 1;
    }
    
    this.themoviesdbService.GetMovieByName(object.value,this.numPag.toString()).subscribe({
      next: (s) =>{
        this.peliculasEncontradas = s;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  toggleComentario() {
    this.mostrarComentario = !this.mostrarComentario;
  }
  
}
