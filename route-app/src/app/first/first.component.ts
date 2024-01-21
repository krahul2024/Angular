import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  goToChatsHeader: string = 'https://teams.microsoft.com/l/chat/0/0?';
  tenantId: string = ''; // tenantId=<tenantId>
  users: string[] = ['culerrahul2024@gmail.com', 'sandipkumar2024@gmail.com']; // users=<user1>,<user2>,...
  topicName: string = 'Test Chat'; // topicName=<chat name>
  message: string = 'Hello!'; // message=<precanned text>
  chatsUrl: string = `${this.goToChatsHeader}tenantId=${this.tenantId}&users=${this.users[0]},${this.users[1]}&topicName=${this.topicName}&message=${this.message}`;

}
