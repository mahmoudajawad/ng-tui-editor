import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { NgTuiEditorComponent } from 'ng-tui-editor/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'ng-tui-editor-test';
	showEditor: boolean = false;

	form: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			editor1: ['# First Editor Data \n Goes here', Validators.required],
			editor2: ['# Second Editor Data \n Goes here', Validators.required],
			editor3: ['# Third Editor Data \n Goes here', Validators.required]
		});
		setTimeout(() => {
			this.showEditor = true;
		}, 1000);
	}

	editorChange(editor: NgTuiEditorComponent) {
		console.log(editor.getValue());
	}
}
