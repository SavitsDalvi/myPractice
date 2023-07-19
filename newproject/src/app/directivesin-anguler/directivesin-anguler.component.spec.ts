import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesinAngulerComponent } from './directivesin-anguler.component';

describe('DirectivesinAngulerComponent', () => {
  let component: DirectivesinAngulerComponent;
  let fixture: ComponentFixture<DirectivesinAngulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesinAngulerComponent]
    });
    fixture = TestBed.createComponent(DirectivesinAngulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
