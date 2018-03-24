import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoreComponent } from './semaphore.component';

describe('SemaphoreComponent', () => {
  let component: SemaphoreComponent;
  let fixture: ComponentFixture<SemaphoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemaphoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaphoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
