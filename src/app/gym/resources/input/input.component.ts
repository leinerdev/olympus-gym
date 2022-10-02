import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() icon!: string;
  @Input() inputType!: string;
  @Input() placeHolder!: string;
  @Input() label!: string;
  @Input() set control(value: AbstractControl | string) {
    if (this.formControl !== value) {
      this.formControl = value as FormControl;
    }
  }

  formControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
