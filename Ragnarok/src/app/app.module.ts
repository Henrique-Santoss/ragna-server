import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { UserCardComponent } from './_components/user-card/user-card.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseUiComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    AccountPageComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
