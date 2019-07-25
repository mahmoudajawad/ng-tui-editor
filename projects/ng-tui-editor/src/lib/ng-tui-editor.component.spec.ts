import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTuiEditorComponent } from './ng-tui-editor.component';

describe('NgTuiEditorComponent', () => {
  let component: NgTuiEditorComponent;
  let fixture: ComponentFixture<NgTuiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTuiEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTuiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
