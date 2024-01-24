// chat.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  goToChatsHeader: string = 'https://teams.microsoft.com/l/chat/0/0?';
  tenantId: string = ''; // tenantId=<tenantId>
  users: string[] = ['culerrahul2024@gmail.com', 'sandipkumar2024@gmail.com']; // users=<user1>,<user2>,...
  topicName: string = 'Test Chat'; // topicName=<chat name>
  message: string = 'Hello!'; // message=<precanned text>
  chatsUrl: string = `${this.goToChatsHeader}users=${this.users[0]},${this.users[1]}&topicName=${this.topicName}&message=${this.message}`;

  constructor(private router: Router) {}

  // function which takes me to chats url
  goToChats() {
    console.log(this.chatsUrl);
    // window.location.href = this.chatsUrl;
    window.open(this.chatsUrl, '_blank'); 
  }
}
