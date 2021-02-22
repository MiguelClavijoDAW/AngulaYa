import { Component, OnInit, Input } from '@angular/core';
import {Articulo} from '../app.component';
@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css']
})
export class ListadoarticulosComponent implements OnInit {

  @Input() datos!:Articulo[];

  constructor() { }

  ngOnInit(): void {
  }

}
