import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./semaphore.component.css']
})

export class SemaphoreComponent implements OnInit {

  @Input() status: number;

  constructor() { }

  ngOnInit() {
  }

  get isBusy() {
    return this.status === 3; // 'busy';
  }

  get isAlmostDone() {
    return this.status === 2; // 'almostDone';
  }

  get isIdle() {
    return this.status === 1; // 'idle';
  }

}
