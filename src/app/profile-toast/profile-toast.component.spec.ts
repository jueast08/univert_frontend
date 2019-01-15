import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileToastComponent } from './profile-toast.component';

describe('ProfileToastComponent', () => {
  let component: ProfileToastComponent;
  let fixture: ComponentFixture<ProfileToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
