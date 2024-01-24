usersList = [
    { name : 'Rahul', email : 'rasah@softwareag.com' }, 
    { name : 'Hirok', email : 'hina@softwareag.com' },
    { name : 'Ayushman', email : 'aysi@softwareag.com'}
  ]

  goToChatsHeader  = 'https://teams.microsoft.com/l/chat/0/0?';
  tenantId = ''; // tenantId=<tenantId>
  // users=<user1>,<user2>,...
  usersConcat = this.usersList.join('')
  topicName  = 'Some Chat'; // topicName=<chat name>
  message  = 'Hello!'; // message=<precanned text>
  chatsUrl  = `${this.goToChatsHeader}&users=${this.usersConcat}&topicName=${this.topicName}&message=${this.message}`;
