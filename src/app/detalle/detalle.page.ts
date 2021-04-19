import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
pelicula: any;
  constructor(public activatedRoute: ActivatedRoute, PeliculasService:PeliculasService) {

    this.pelicula = PeliculasService.getPelicula;

   }

   
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id)
   }

}
