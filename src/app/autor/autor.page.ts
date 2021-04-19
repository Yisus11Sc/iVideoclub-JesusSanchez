import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})

export class AutorPage implements OnInit {

  

  constructor(){
    this.autor= {name:'Jesus Sanchez Cabrera', email:'sacj1998@gmail.com', twiter: '@Twiter', phone: '9998887777'}
  }

  autor:{name:string, email:string, twiter:string, phone:string};

  ionViewDidEnter(){
    console.log('ionViewDidEnter AutorPage')
  }

  ngOnInit() {
  }

}
