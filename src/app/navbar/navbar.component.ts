import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }
  @Output('selected1') selected1: EventEmitter<any> = new EventEmitter<any>()


  ngOnInit() {
  }

}
