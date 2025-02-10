import { ArrowFunctionExpr } from '@angular/compiler'
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute } from '@angular/router';
import {  } from '../register/register.component';

@Component({
  selector: 'app-account-page',
  standalone: false,

  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent implements OnInit{
  userSelecionado: User | undefined;
  users: User[] = [];

  username: string | null = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(){
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  infoUserSelecionado (user: User){
    this.userSelecionado = user;
  };
}
