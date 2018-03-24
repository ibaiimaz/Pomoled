import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AppComponent } from './app.component';
import { SemaphoreComponent } from './semaphore/semaphore.component';
import { PomodoroService } from './pomodoro.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: 'http://192.168.1.42:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SemaphoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    PomodoroService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
