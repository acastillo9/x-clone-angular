import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    dateBirth: new FormControl<Date>(new Date()),
  });

  constructor(private usersService: UsersService) {}

  signUp() {
    console.log(this.registerForm.value);

    this.usersService.save(this.registerForm.value as User).subscribe((newUser) => {
      console.log('new user', newUser);
    })
  }
}
