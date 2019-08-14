import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardService } from './core/services/card.service';
import { UserService } from './core/services/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCardModule } from './create-card/create-card.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './core/services/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    MatButtonModule,
    CreateCardModule
  ],
  providers: [CardService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpMockRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
