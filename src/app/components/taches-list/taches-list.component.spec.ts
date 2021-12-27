import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tachesListComponent } from './taches-list.component';

describe('tachesListComponent', () => {
  let component: tachesListComponent;
  let fixture: ComponentFixture<tachesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tachesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tachesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
