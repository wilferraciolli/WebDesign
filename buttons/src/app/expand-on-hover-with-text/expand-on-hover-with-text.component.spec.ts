import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandOnHoverWithTextComponent } from './expand-on-hover-with-text.component';

describe('ExpandOnHoverWithTextComponent', () => {
  let component: ExpandOnHoverWithTextComponent;
  let fixture: ComponentFixture<ExpandOnHoverWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandOnHoverWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandOnHoverWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
