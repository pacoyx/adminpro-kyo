import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//modulos
import { PagesModule } from './pages/pages.module';

//servicios
import {  ServiceModule } from './services/service.module';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//rutas
import { APP_ROUTES } from './app.routes';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent    
  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule,FormsModule,ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
