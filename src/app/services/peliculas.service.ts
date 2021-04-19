import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas:{title:string, year:string, director:string, poster:string, synopsis:string}[];
 
  constructor() {

    this.peliculas= {title:'Sherk', year:'2001', director:'Andrew', poster:'', synopsis:'' }[1];
    this.peliculas= {title:'Sherk 2', year:'2004', director:'Andrew', poster:'', synopsis:'' }[2];
    this.peliculas= {title:'Sherk 3', year:'2007', director:'Andrew', poster:'', synopsis:'' }[3];
    this.peliculas= {title:'Sherk 4', year:'2010', director:'Andrew', poster:'', synopsis:'' }[4];

   }

  getPeliculas(){
    return this.peliculas;
  }

  getPelicula(id:any) {
    return this.peliculas[id];
  }
}
