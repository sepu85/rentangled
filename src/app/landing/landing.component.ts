import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public  imagenes_carrusel = [
    "../../assets/Entanglements_Hackaton.001.png",
    "../../assets/Entanglements_Hackaton.002.png",
    "../../assets/Entanglements_Hackaton.003.png",
    "../../assets/Entanglements_Hackaton.004.png",
    "../../assets/Entanglements_Hackaton.005.png",
    "../../assets/Entanglements_Hackaton.006.png",
    "../../assets/Entanglements_Hackaton.007.png",
    "../../assets/Entanglements_Hackaton.008.png",
    "../../assets/Entanglements_Hackaton.009.png",
    "../../assets/Entanglements_Hackaton.010.png"
    ]; 
    public contador = 0;
    public img = "../../assets/Entanglements_Hackaton.001.png";


    irAtras(event) {
      
      if ( this.contador > 0 ){
          this.img = this.imagenes_carrusel[this.contador-1];
          this.contador--;
          } else {
          this.img = this.imagenes_carrusel[this.imagenes_carrusel.length - 1];
          this.contador = this.imagenes_carrusel.length -1;
          }
       return this.img;
      }

      irAdelante() {
        
        if (this.contador < this.imagenes_carrusel.length -1){
                
          this.img = this.imagenes_carrusel[this.contador+1];
          this.contador++;
        } else {
          this.img = this.imagenes_carrusel[0];
          this.contador = 0;
      }
        return this.img;
      }


  constructor() { }

  ngOnInit() {
  }

}
