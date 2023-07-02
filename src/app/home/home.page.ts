import { Component, OnInit } from '@angular/core';
import { ThemoviesdbService } from '../servicios/themoviesdb.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private themoviesdbService:ThemoviesdbService, private alertController:AlertController, private router:Router) {}


  isModalOpen = false;
  public carteleras:any;
  public detallePelicula:any;
  public generos:any;
  public fotos:any;
  public peliculasEncontradas:any;
  public numPag:number =0;
  public mostrarComentario:boolean = false;
  public lista_comentarios:any;
  public id_pelicula!:string;
  public nombre_pelicula!:string;

  public MensajeForm = new FormGroup({
    comentario : new FormControl("",Validators.required),
    id_pelicula : new FormControl(""),
    nombre_pelicula : new FormControl(""),
    users_id : new FormControl("")
  });

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

  GetMoviesDetails(idPelicula:string, title:string){
    this.themoviesdbService.GetMoviesDetails(idPelicula).subscribe({
      next: (s) =>{
        this.detallePelicula = s;
        this.getAllComment();
        this.id_pelicula = idPelicula;
        this.nombre_pelicula = title;
        console.log(s);
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

  // Consumiendo la Api de Comentario

  getAllComment(){
    this.themoviesdbService.GetAllComments().subscribe({
      next: (s) =>{
        this.lista_comentarios = s;
        console.log(s);
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Mensaje Registrado Correctamente',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  

  CreateComment(MensajeForm:any){
    this.MensajeForm.setValue({
      id_pelicula: this.id_pelicula,
      comentario: MensajeForm,
      nombre_pelicula: this.nombre_pelicula,
      users_id : localStorage.getItem("id_user")
    });
    this.themoviesdbService.CreateComment(this.MensajeForm.value).subscribe({
      next: (s) =>{
        this.presentAlert();
        this.isModalOpen=false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
}
