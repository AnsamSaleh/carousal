import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";


let typeDecorator = Component({
  selector: 'app-houre-pipe',
  templateUrl: './houre-pipe.component.html',
  styleUrls: ['./houre-pipe.component.css']
});

@typeDecorator
export class HourePipeComponent implements OnInit {
  counter: object;
  
  constructor() {}
  ngOnInit(){
    interval(200)
      .subscribe(
      (val: number) => {
        let hours = Math.floor(val / 3600)
        let minutes = Math.floor((val % 3600)/60);
        let seconds = Math.floor(val % 60);

        this.counter={
          h:hours,
          m:minutes,
          s:seconds
        }
        console.log(this.counter);

      }
    )
  }
}

