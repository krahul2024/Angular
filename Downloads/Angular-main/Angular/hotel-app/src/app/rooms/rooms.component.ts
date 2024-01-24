import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms'; // Room interface
import { rooms as Rooms } from '../../assets/data';

console.log(Rooms[0])

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Meridian Hotel'; 

  numberOfRooms = 20; 
  selectedRoom ! : RoomsList; 

  hideRooms = false; 

  rooms : Room = {
    availableRooms : 10, 
    bookedRooms : 5, 
    totalRooms : 20, 
  }

  roomsList : RoomsList[] = Rooms.slice(0,5); 


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms; 
  }

  selectRoom(room : RoomsList){
    this.selectedRoom = room; 
    console.log(room)
  }


}

