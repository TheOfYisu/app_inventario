import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-aggrid-forms',
  templateUrl: './aggrid-forms.component.html',
  styleUrls: ['./aggrid-forms.component.css']
})
export class AggridFormsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

@Component({
  selector:'app-aggrid-form-add',
  templateUrl:'aggrid-forms-add.component.html',
  styleUrls: ['aggrid-forms.component.css']
})
export class AggridFormAddComponent{
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
  ) {
    this.form=this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      code:['',Validators.required]
    })
  }
  ingresar(){
    console.log(JSON.stringify(this.form.value))
  }
}
