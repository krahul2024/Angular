import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Meridian Hotel'; 
  numberOfRooms = 10; 
  hideRooms = false; 


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms; 
  }

}
