import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {
  value!:number;
  result!:string;

  value2!:number;
  result2!:string;

  arrayList: any[] = [];
  result3!:string;

  val1!: number;
  val2!: number;
  constructor() { }

  ngOnInit(): void {
  }

  reverseStr(value:any){
    const strValue = String(value);
    this.result = "result: " + strValue.split("").reverse().join('');
  }
  getArrayOrdered(value:any){
    const array = String(value).split('')
    const res = array.sort((a, b) => (a < b ? -1 : 1))

    this.result2 = "result: " + res.join(',');//strValue.split("").reverse().join('');
  }

  IntercambiarValores(){
    [ this.val2, this.val1 ] = [ this.val1, this.val2 ];
  }
}
