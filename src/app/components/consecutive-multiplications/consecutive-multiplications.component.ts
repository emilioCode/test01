import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consecutive-multiplications',
  templateUrl: './consecutive-multiplications.component.html',
  styleUrls: ['./consecutive-multiplications.component.css']
})
export class ConsecutiveMultiplicationsComponent implements OnInit {

  form!: FormGroup;
  result:string = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      number: [ null , Validators.required],
      number2: [ null , Validators.required]
    });
    this.form.get('number')!.valueChanges.subscribe( data => {
      this.result = '';
    });
    this.form.get('number2')!.valueChanges.subscribe( data => {
      this.result = '';
    });
  }

  submitHandle = () =>{
    const number = this.form.value.number;
    const number2 = this.form.value.number2;
    this.result = this.calculate(number, number2);
  }

  calculate(value1: number, value2: number): string{
    // return `${value1} y ${value2} = ${value1 + value2}`;
    let res = "";
    let acumulador = 0;
    let contador = 0;
    if ( value1 >= 0 && value2 >= 0 )
    {
        acumulador = 0;

        if ( value2 != 0 )
        {
            contador = 1;
            while ( contador <= value2 )
            {
                acumulador += value1;
                contador++;
            }
        }
        res = String(acumulador);
    }
    else
    {
      res = "ERROR: Ambos n%cmeros deben ser mayores o iguales que cero.";
    }
    return res;
  }

}
