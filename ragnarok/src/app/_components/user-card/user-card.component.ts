import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user'

@Component({
  selector: 'app-user-card',
  standalone: false,

  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    gender: '',
    birthYear: 0,
    birthMonth: 0,
    birthDay: 0,
  };

  @Output() userInfoEmitter = new EventEmitter<User>();

  RetornarDados(){
    this.userInfoEmitter.emit(this.user);
  }
}
