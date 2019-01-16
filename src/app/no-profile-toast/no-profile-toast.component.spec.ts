import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProfileToastComponent } from './no-profile-toast.component';

describe('NoProfileToastComponent', () => {
  let component: NoProfileToastComponent;
  let fixture: ComponentFixture<NoProfileToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoProfileToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoProfileToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
