import { Component } from '@angular/core';
import { NgTuiEditorComponent } from 'ng-tui-editor/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ng-tui-editor-test';

	value: string = '';

	editorChange(editor: NgTuiEditorComponent) {
		console.log(editor.getValue());
	}
}
