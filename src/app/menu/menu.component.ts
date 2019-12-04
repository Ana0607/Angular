import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titulo = 'Signos:';
  constructor() { }

  ngOnInit() {
  }

}
