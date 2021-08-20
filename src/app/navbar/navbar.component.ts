import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private myserv: MyserviceService) {
    this.genre = this.myserv.genre
  }
  @Output('selected1') selected1: EventEmitter<any> = new EventEmitter<any>()

  genre = 'Web Film'
  selected = 'Genre'

  changeGenre(val: string) {
    this.selected1.emit(val);
  }

  ngOnInit() {
  }

}
