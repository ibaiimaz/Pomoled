import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Socket } from 'ng-socket-io';

import { PomodoroService } from './pomodoro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  statusGonzalo = 3;
  statusIbai = 3;

  constructor(
    private pomodoroService: PomodoroService,
    private socket: Socket
  ) {}

  ngOnInit() {
    this.initSockets();
  }

  async onStartGonzalo() {
    await this.pomodoroService.start('gonzalo').toPromise();
    // this.statusGonzalo = 1;
  }

  async onStartIbai() {
    await this.pomodoroService.start('ibai').toPromise();
    // this.statusIbai = 1;
  }

  private initSockets() {

    this.socket
      .fromEvent('pomodoro')
      .pipe(map( (data: any) => this.setStatus(data)))
      .subscribe();

    this.socket
      .fromEvent('pomodoro:users')
      .pipe(map( (data: any) => this.setInitialStatus(data)))
      .subscribe();
  }

  private setInitialStatus(data) {
    console.log(data);
    this.statusGonzalo = data.gonzalo;

    this.statusIbai = data.ibai;
  }

  private setStatus(data) {
    console.log(data);
    if (data.user === 'gonzalo') {
      this.statusGonzalo = data.status;
    }
    if (data.user === 'ibai') {
      this.statusIbai = data.status;
    }
  }
}
