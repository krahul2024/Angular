import { Component, Input } from '@angular/core';
import { User } from 'src/app/heroes-list/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
 @Input() users : User[] = []; 

}
