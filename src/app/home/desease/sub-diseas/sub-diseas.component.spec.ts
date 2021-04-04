import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDiseasComponent } from './sub-diseas.component';

describe('SubDiseasComponent', () => {
  let component: SubDiseasComponent;
  let fixture: ComponentFixture<SubDiseasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDiseasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDiseasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
