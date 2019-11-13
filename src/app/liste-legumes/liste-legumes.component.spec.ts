import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLegumesComponent } from './liste-legumes.component';

describe('ListeLegumesComponent', () => {
  let component: ListeLegumesComponent;
  let fixture: ComponentFixture<ListeLegumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLegumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
