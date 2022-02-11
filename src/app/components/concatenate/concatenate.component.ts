import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-concatenate',
  templateUrl: './concatenate.component.html',
  styleUrls: ['./concatenate.component.css']
})
export class ConcatenateComponent implements OnInit {
  formConcat!: FormGroup;
  result:string = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formConcat = this.formBuilder.group({
      number: [ null , Validators.required],
      number2: [ null , Validators.required]
    });
    this.formConcat.get('number')!.valueChanges.subscribe( data => {
      this.result = '';
    });
    this.formConcat.get('number2')!.valueChanges.subscribe( data => {
      this.result = '';
    });
  }

  submitHandle = () =>{
    const number = this.formConcat.value.number;
    const number2 = this.formConcat.value.number2;
    this.result = this.getConcat(number, number2);
  }

  getConcat(value1: string, value2: string){
    return `${value1} y ${value2} = ${value1 + value2}`;
  }
}
