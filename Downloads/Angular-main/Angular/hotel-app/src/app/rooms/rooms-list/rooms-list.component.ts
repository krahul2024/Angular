import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'hotel-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  @Input() roomsList : RoomsList[] = []; 
  @Output() selectedRoom = new EventEmitter<RoomsList>(); // for sending data from child to parent 

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room : RoomsList){
    this.selectedRoom.emit(room); // send this room information to the parent 
  }
}
