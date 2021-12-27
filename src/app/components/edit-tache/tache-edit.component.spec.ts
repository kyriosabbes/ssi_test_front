import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tacheEditComponent } from './tache-edit.component';

describe('tacheEditComponent', () => {
  let component: tacheEditComponent;
  let fixture: ComponentFixture<tacheEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tacheEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tacheEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
