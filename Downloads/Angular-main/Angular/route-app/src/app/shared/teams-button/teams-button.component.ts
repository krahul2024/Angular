import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teams-button',
  templateUrl: './teams-button.component.html',
  styleUrls: ['./teams-button.component.css']
})
export class TeamsButtonComponent {

 @Input() linkToShare : string = 'https://google.com'
 @Input() message : string = 'this is some message!'
}
