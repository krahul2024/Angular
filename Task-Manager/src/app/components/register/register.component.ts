import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // defining the default user model for passing into the registration form
  userModel: User = {
    name: '',
    age: 28,
    gender: 'Female',
    email: 'harpreet.kaur@example.com',
    password: 'securepassword123',
    phone : 3252352322, 
    address: {
      street: '456 Green Avenue',
      city: 'Delhi',
      state: 'Delhi',
      postalCode: 110026,
    },
  };

  onSubmit() {
    alert('Done.'); 
    console.log('User Details : ', this.userModel);
  }

}
