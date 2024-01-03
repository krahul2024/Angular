import { Component } from '@angular/core';

@Component({
  selector: 'hotel-root', // if we change the prefix hotel here we need to change the same in index.html and angular.json file and then restart the shell again 
  templateUrl: './app.component.html',
  // template : `<h3>This is some string from app.component.ts file</h3>
  //   <p> This is some paragraph</p>
  // `, 
  styleUrls: ['./app.component.css'], 
  // styles : []
})
export class AppComponent {
  title = 'hotel-app';
}
