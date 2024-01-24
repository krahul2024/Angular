import { Component } from '@angular/core';
import { User } from '../heroes-list/user.interface';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  usersList: User[] = [
    { name: 'Rahul', email: 'rasah@softwareag.com' },
    { name: 'Hirok', email: 'hina@softwareag.com' },
    { name: 'Ayushman', email: 'aysi@softwareag.com' }
  ]

  concatUsers(users_: User[]) {
    let tempUsersList: string = users_[0].email
    for (let i = 1; i < users_.length; i++) {
      tempUsersList = tempUsersList + ',' + users_[i].email;
    }

    console.log(tempUsersList);
    return tempUsersList;
  }

  header: string = 'msteams:/l/chat/0/0?'
  tenantId: string = ''; // tenantId=<tenantId>
  // users=<user1>,<user2>,...
  allUsers: string = this.concatUsers(this.usersList)
  topicName: string = 'New MS Teams chat'
  message: string = 'Some message for this chat!'
  type: string = 'chat'
  directDl: string = 'true'
  msLaunch: string = 'true'
  enableMobilePage: string = 'true'
  fqdn: string = 'teams.microsoft.com'
  chatsUrl: string = `${this.header}&users=${this.allUsers}&topicName=${this.topicName}&message=${this.message}&type=${this.type}&msLaunch=${this.msLaunch}&enableMobilePage=${this.enableMobilePage}&fqdn=${this.fqdn}`


  shareChatToTeams() {
    let text: string = '';
    for (let i = 0; i < this.usersList.length; i++) {
      text += `Name: ${this.usersList[i].name},  Email: ${this.usersList[i].email}\n\n`;
    }
    this.message = text;
    this.topicName = 'New Chat';
    this.chatsUrl = `${this.header}&users=${this.allUsers}&topicName=${this.topicName}&message=${this.message}&type=${this.type}&msLaunch=${this.msLaunch}&enableMobilePage=${this.enableMobilePage}&fqdn=${this.fqdn}`
    window.open(this.chatsUrl);
    this.message = 'Hello, this is a new chat...';
  }



  // to update the chatname 
  updateNameAndOpenChat(chatName: string) {
    this.topicName = chatName
    this.chatsUrl = `${this.header}&users=${this.allUsers}&topicName=${this.topicName}&message=${this.message}&type=${this.type}&msLaunch=${this.msLaunch}&enableMobilePage=${this.enableMobilePage}&fqdn=${this.fqdn}`
    console.log(this.topicName, this.chatsUrl)
    window.open(this.chatsUrl)
  }

  shareToTeams() {
    let teamsUrl: string = 'https://teams.microsoft.com/share?href=https://google.com';
    window.open(teamsUrl)
  }

  embedContent: string | null | undefined = `
  <table style="border: 1px; border-radius:5px;">
  <tr>
      <td>Name</td>
      <td>Age</td>
  </tr>
  <tr>
      <td>rahul</td>
      <td class="td">23</td>
  </tr>
  <tr class="">
      <td>ayush</td>
      <td>23</td>
  </tr>
</table>
  `

  validAge(age_: number) {
    return age_ > 0 && age_ < 150;
  }


  userForm = new FormGroup({
    tableRows: new FormArray([])
  });

  insertRow() {
    let newRow = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(/^\$/)])
    });

    (this.userForm.get('tableRows') as FormArray).push(newRow)
  }

  deleteRow(idx: number) {
    (this.userForm.get('tableRows') as FormArray).removeAt(idx)
  }

  updateDynamicContent(form : FormGroup) {
      let formData = form.get('tableRows')?.value;
      const tableData = JSON.stringify(formData);
      console.log({formData}, {htmlData : this.generateHTMLTable(formData)});
      this.embedContent = this.generateHTMLTable(formData)
  }

  generateHTMLTable(data: any[]): string {
    if (!data || data.length === 0) {
      return ''; // Return an empty string if there is no data
    }
  
    const headers = Object.keys(data[0]);
    const tableRows = data.map(row => {
      return '<tr>' + headers.map(header => `<td>${row[header]}</td>`).join('') + '</tr>';
    });
  
    return `
      <table border="1">
        <thead>
          <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
        </thead>
        <tbody>${tableRows.join('')}</tbody>
      </table>`;
  }

 
  


  getTableRowControls(): FormControl[] {
    return (this.userForm.get('tableRows') as FormArray).controls as FormControl[];
  }
}



// header : string = 'msteams:/l/chat/0/0?'
// users : string = 'users=rasah@softwareag.com,aysi@softwareag.com,hina@softwareag.com'
// topicName : string = 'Chat Topic Name' 
// message = 'message to send' 
// launchAgent = 'join_launcher'
// type = 'chat'
// directDl = 'true'
// msLaunch = 'true'
// enableMobilePage = 'true'
// fqdn = 'teams.microsoft.com'