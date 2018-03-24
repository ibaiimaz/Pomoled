import { TestBed, inject } from '@angular/core/testing';

import { PomodoroService } from './pomodoro.service';

describe('PomodoroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PomodoroService]
    });
  });

  it('should be created', inject([PomodoroService], (service: PomodoroService) => {
    expect(service).toBeTruthy();
  }));
});
