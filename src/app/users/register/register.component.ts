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
    name: new FormControl('', { nonNullable: true }),
    username: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    dateBirth: new FormControl<Date>(new Date(), { nonNullable: true }),
  });

  constructor(private usersService: UsersService) {}

  signUp() {
    this.usersService.save(this.registerForm.getRawValue()).subscribe((newUser) => {
      console.log('new user', newUser);
    })
  }
}
