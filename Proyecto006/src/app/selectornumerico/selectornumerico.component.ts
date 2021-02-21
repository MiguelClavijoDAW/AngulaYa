import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {

  @Input() minimo: String="";
  @Input() maximo: String="";
  actual: number=0;
  constructor() { }

  ngOnInit() {
    this.actual = Number(this.minimo);
  }

  incrementar() {
    if (this.actual<Number(this.maximo))
      this.actual++;
  }

  decrementar() {
    if (this.actual>Number(this.minimo))
      this.actual--;
  }  

  fijar(v:number) {
    if (v>=Number(this.minimo) && v<=Number(this.maximo))
      this.actual=v;
  }

}
