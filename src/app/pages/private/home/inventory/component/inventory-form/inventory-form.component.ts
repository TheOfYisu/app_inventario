import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {InventoryService} from "../../../../../../core/services/inventory.service";

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {
  form_general: FormGroup;
  form_computer:FormGroup;
  form_additional: FormGroup;
  devicesellec:string;
  checked = false;

  devices = [
    {value: 'Computer'},
    {value: 'Display'},
    {value: 'Keyboard'},
  ]

  status = [
    {value: 'Available'},
    {value: 'In Use'},
    {value: 'Damaged'},
  ]

  locations = [
    {value: 'OFFI 1010'},
    {value: 'OFFI 1001'},
    {value: 'OFFI 213'},
  ]

  operations = [
    {value: 'Centrum'},
    {value: 'Transportation'},
    {value: 'Soft-g.NET'}
  ]

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private InventoryService:InventoryService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  fuctionback() {
    this.router.navigate(['/pages/private/home/inventory'])
  }

  form(forms: string) {
    this.devicesellec = forms
  }

  createForm() {
    this.form_general = this.fb.group({
      select_device: [null, Validators.required],
      internal_serial: [null, Validators.required],
      brand: [null, Validators.required],
      model: [null, Validators.required],
      serial: [null, Validators.required],
      selected_status: [null, Validators.required],
      select_location: [null, Validators.required],
      select_operation: [null, Validators.required],
      date_picker: [null, Validators.required],
      unit_value: [null, Validators.required],
      electronic_invoice: [null, Validators.required],
      supplier: [null, Validators.required],
    });
    this.form_computer=this.fb.group({
      brand_proccessor : [null, Validators.required],
      model_proccessor : [null, Validators.required],
      type_ram : [null, Validators.required],
      capacy_ram : [null, Validators.required],
      type_storage : [null, Validators.required],
      capacy_storage : [null, Validators.required]
    })
    this.form_additional=this.fb.group({
      brand_carger:[null],
      serial_carger:[null]
    })
  }

  get seletdevice(): boolean {
    return this.form_general.get('select_device').value;
  }

  fuctionsave() {
    this.InventoryService.adddevice(this.form_general.value)
  }
}
