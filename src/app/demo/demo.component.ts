import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public chunks = [];
  public matrixChunks = [];
  public matrixH = [];
  public matrixRH = [];
  public matrixLH = [];
  private chunksQty = 25;
  private s = 5;
  private cont = 0;
  public columnas;
  public h1= [];
  public h2= [];
  public lh1= [];
  public lh2= [];
  public rh1= [];
  public rh2= [];

  constructor() { 
     // matrix chinhs
    for ( var i = 0 ; i<this.s ; i++ ) {
      this.matrixChunks[i] = [];
      for ( let j = 0 ; j<this.s ; j++) {
        this.cont++;
        this.matrixChunks[i][j] = this.cont ;
      }
      this.columnas = this.matrixChunks[i];
      console.log(this.columnas)
    }
    console.log(this.matrixChunks)
    
    for (i = 0 ; i < this.chunksQty ; i++){
      this.chunks[i] = i +1;
    }
    console.log(this.chunks)

    this.chunks.forEach( (element,index) => {
      if (( element % this.s )==1) {
        if (element == 1) { element = 1; } else {

          
        this.h1[index] = element - this.s;
        
        this.h2[index] = element + this.s;

        this.rh1[index] = element -1;

        this.rh2[index] = element + this.s + 1;

        this.lh1[index] = element + this.s - 1;

        this.lh2[index] = element + this.s + this.s -1

      }

      } else if (( element % this.s )==0) {
        if (element == this.s) {element = this.s} else {

        this.h1[index] = element - this.s;
        
        this.h2[index] = element + this.s;

        this.rh1[index] = element - this.s - 1;

        this.rh2[index] = element + 1;

        this.lh1[index] = element - (2*this.s) + 1;

        this.lh2[index] = element + this.s -1

        }
      } else { if ( (1 < element)&& (element < this.s) ) { element = element } else {

        this.h1[index] = element - this.s;
        
        this.h2[index] = element + this.s;

        this.rh1[index] = element - this.s - 1;

        this.rh2[index] = element + this.s + 1;

        this.lh1[index] = element - this.s + 1;

        this.lh2[index] = element + this.s -1


      }

      }

    });

    //kkkk
    console.log("horizontal", this.h1, this.h2)
    console.log("right diagonal", this.rh1, this.rh2)
    console.log("left diagonal", this.lh1, this.lh2)
    

  }

  ngOnInit() {

    



  }

}
