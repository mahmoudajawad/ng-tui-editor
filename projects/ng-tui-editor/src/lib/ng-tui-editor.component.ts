import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, forwardRef, AfterViewInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import tuiEditor from 'tui-editor';

@Component({
	selector: 'tui-editor',
	template: `<div #tuiEditor></div>`,
	providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgTuiEditorComponent),
        multi: true
    }]
})
export class NgTuiEditorComponent implements ControlValueAccessor, OnInit {

    onChange: (_: any) => void = (_: any) => {};
	onTouched: () => void = () => {};
	
	private editor!: tuiEditor;
	private EditorElement: ElementRef<HTMLDivElement>;
	@ViewChild('tuiEditor', { static: true }) set EditorElementSetter(el: ElementRef) {
		this.EditorElement = el;
	}
	@Input('initialEditType') private initialEditType: 'markdown' | 'wysiwyg';
	@Input('ngModel') value: string;
	@Input('previewStyle') private previewStyle: 'vertical' | 'tab';
	@Input('height') private height: string;
	@Input('dir') private dir: 'ltr' | 'rtl' = 'ltr';
	@Output('change') private change: EventEmitter<NgTuiEditorComponent> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {
		this.editor = new tuiEditor({
			el: this.EditorElement.nativeElement,
			initialValue: this.value,
			initialEditType: this.initialEditType || 'wysiwyg',
			previewStyle: this.previewStyle || 'vertical',
			height: this.height || '300px',
			events: ({
				change: ($event) => {
					let value = this.getValue();
					this.writeValue(value);
					this.change.emit(this);
				}
			} as any)
		});
		this.EditorElement.nativeElement.querySelector('.tui-editor-contents').setAttribute('dir', this.dir);
	}

    updateChanges(): void {
		this.onChange(this.value);
    }
    writeValue(value: string): void {
		if (value != this.editor.getValue()) {
			this.editor.setValue(value);
		}
        this.value = value;
        this.updateChanges();
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

	public getHTML(): string {
		return this.editor.getHtml();
	}
	public getValue(): string {
		return this.editor.getMarkdown();
	}

}
