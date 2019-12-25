import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenkorbComponent } from './warenkorb.component';

describe('WarenkorbComponent', () => {
  let component: WarenkorbComponent;
  let fixture: ComponentFixture<WarenkorbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarenkorbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarenkorbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
