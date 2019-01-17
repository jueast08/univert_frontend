import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestFormComponent } from './add-quest-form.component';

describe('AddQuestFormComponent', () => {
  let component: AddQuestFormComponent;
  let fixture: ComponentFixture<AddQuestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
