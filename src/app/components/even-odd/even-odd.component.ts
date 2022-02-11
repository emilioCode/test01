import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css']
})
export class EvenOddComponent implements OnInit {
  formEvenOdd!: FormGroup;
  result: string = "";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEvenOdd = this.formBuilder.group({
      number: [ null , Validators.required]
    });
    this.formEvenOdd.get('number')!.valueChanges.subscribe( data => {
      this.result = '';
    });
  }

  submitHandle = () => {
    this.result = this.isEvenOrOdd(this.formEvenOdd.value.number);
  }

  isEvenOrOdd = (value: number): string =>  {
    return value == 0? 'The number is neutral': value % 2 == 0? 'The number is even': 'The number is odd';
  }

}
