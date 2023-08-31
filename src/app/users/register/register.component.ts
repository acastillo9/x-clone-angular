import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    username: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true }),
    dateBirth: new FormControl(new Date(), { nonNullable: true }),
  });

  constructor(private usersService: UsersService) {}

  get name() { return this.registerForm.get('name')!; }
  get email() { return this.registerForm.get('email')!; }

  signUp() {
    if (this.registerForm.valid) {
      this.usersService.save(this.registerForm.getRawValue()).subscribe((newUser) => {
        console.log('new user', newUser);
      });
    }
  }
}
