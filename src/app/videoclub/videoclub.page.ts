import { NgIf } from '@angular/common';
import { Component, OnInit, NgModule, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterModule, Routes, ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})

export class VideoclubPage implements OnInit {
  listaPeliculas: any;
  modoLista: boolean=true;

  constructor(private router: Router, PeliculasService: PeliculasService) {
    this.listaPeliculas=[PeliculasService.getPeliculas]

  }

  cambiarVista(valid: boolean){
    this.modoLista = valid;
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter VideoclubPage')
  }

  verPaginaDetalle(id: any) : void {
    this.router.navigate(['/detalle', [id]])
    console.log(id)
  }

  ngOnInit() {
  }

}
