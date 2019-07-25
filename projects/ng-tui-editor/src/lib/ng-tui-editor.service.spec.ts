import { TestBed } from '@angular/core/testing';

import { NgTuiEditorService } from './ng-tui-editor.service';

describe('NgTuiEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTuiEditorService = TestBed.get(NgTuiEditorService);
    expect(service).toBeTruthy();
  });
});
