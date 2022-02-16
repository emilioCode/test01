import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  form!:FormGroup;
  textButton: string = "";
  colorButton: string = "";
  hide: boolean = true;
  isDisabled!: boolean;
  civilStatuses: string[] = ['Soltero(a)','Casado(a)'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<any>,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.swithOption(this.data.action);
  }

  initializeModalForm(disabled: boolean = false): void {
    this.form = this.formBuilder.group({
      Id: [ { value: this.data.element.Id, disabled: true }  ],
      FirstName: [ this.data.element.FirstName, Validators.required ],
      LastName: [ this.data.element.LastName, Validators.required ],
      BirthDate: [ this.data.element.BirthDate, Validators.required ],
      TelephoneNumber: [ this.data.element.TelephoneNumber, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g) ],
      Email: [ this.data.element.Email ],
      CivilStatus: [ this.data.element.CivilStatus ],
      Disabled: [ this.data.element.Disabled ]
    });
    this.disableComponents(disabled);
  }

  handleSubmit(): void {debugger
    const request: any = {
      Id: Number(this.form.controls.Id.value),
      FirstName: Number(this.form.controls.FirstName.value),
      LastName: this.form.controls.LastName.value,
      BirthDate: this.form.controls.BirthDate.value,
      TelephoneNumber: this.form.controls.TelephoneNumber.value,
      Email: this.form.controls.Email.value,
      CivilStatus: this.form.controls.CivilStatus.value,
      Disabled: this.form.controls.Disabled.value,
    };

    const data = {
      operation: this.data.action,
      stringify: JSON.stringify(request)
    }

    this.http.postData("api/Contact", data)
      .subscribe(res =>{
        this.closeDialog(res.success);
      })

  }

  closeDialog(result:any = null){
    this.dialogRef.close(result);
  }

  swithOption(option: string){
    switch (option) {
      case 'create':
        const init = {
          Id: 0,
          FirstName: null,
          LastName: null,
          BirthDate: null,
          TelephoneNumber: null,
          Email: null,
          CivilStatus: null,
          Disabled: false
        };
        this.data.element =  init;
        this.textButton = "Create";
        this.colorButton = "primary";
        this.initializeModalForm();
        this.form.controls.Disabled.disable();
        break;
      case 'edit':
        this.initializeModalForm();
        this.textButton = "Save";
        this.colorButton = "primary";
        break;
      case 'delete':
        this.initializeModalForm(true);
        this.textButton = this.form.controls.Disabled.value? "Enable": "Disable";
        this.colorButton = "warn";
        break;
      default:
        this.initializeModalForm(true);
        break;
    }
  }

  disableComponents(disabled: boolean = false): void{
    if(disabled){
      this.form.controls.Id.disable();
      this.form.controls.FirstName.disable();
      this.form.controls.LastName.disable();
      this.form.controls.BirthDate.disable();
      this.form.controls.TelephoneNumber.disable();
      this.form.controls.Email.disable();
      this.form.controls.CivilStatus.disable();
      this.form.controls.Disabled.disable();
      this.isDisabled = disabled;
    }

  }



}
