import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangedManComponent } from './hanged-man.component';

describe('HangedManComponent', () => {
  let component: HangedManComponent;
  let fixture: ComponentFixture<HangedManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangedManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangedManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
