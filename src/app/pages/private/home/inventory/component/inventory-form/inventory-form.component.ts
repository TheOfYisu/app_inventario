import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {InventoryService} from "../../../../../../core/services/inventory.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {
  select_device: FormGroup;
  form_general: FormGroup;
  form_computer: FormGroup;
  form_additional: FormGroup;
  devicesellec: string;
  checked = false;
  valitbutton = !false

  devices = [
    {value: 'Computer'},
    {value: 'Display'},
    {value: 'Keyboards'},
    {value: 'Mouses'},
    {value: 'Ups'},
    {value: 'Headsets'},
    {value: 'Phones'},
    {value: 'Networks'},
    {value: 'Home Appliances'},
    {value: 'Printer'},
    {value: 'Phone Cooperative'},
    {value: 'Other'}
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

  networks_devices = [
    {value: 'Switch'},
    {value: 'Router'},
    {value: 'Biometrico'},
    {value: 'Modem'}
  ]

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private InventoryService: InventoryService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  form(forms: string) {
    this.devicesellec = forms
    this.form_general.reset()
    this.form_computer.reset()
    this.form_additional.reset()
  }

  createForm() {
    this.select_device = this.fb.group({
      select_devices: [null, Validators.required]
    })
    this.form_general = this.fb.group({
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
    this.form_computer = this.fb.group({
      brand_proccessor: [null, Validators.required],
      model_proccessor: [null, Validators.required],
      type_ram: [null, Validators.required],
      capacy_ram: [null, Validators.required],
      type_storage: [null, Validators.required],
      capacy_storage: [null, Validators.required]
    })
    this.form_additional = this.fb.group({
      brand_carger: [null],
      serial_carger: [null]
    })
  }

  get seletdevice(): boolean {
    return this.select_device.get('select_devices').value;
  }

  savedevice() {
    if (this.select_device.get('select_devices').value == 'Computer') {
      if (this.form_general.valid && this.form_computer.valid) {
        this.InventoryService.adddevice_computer(this.form_general.value, this.form_computer.value,this.form_additional.value)
      } else {
        alert("faltan datos")
      }
    }else if (this.select_device.get('select_devices').value == 'Display') {
      if (this.form_general.valid) {
        this.InventoryService.adddevice_display(this.form_general.value,this.form_additional.value)
      } else {
        alert("faltan datos")
      }
    }else {
      this.InventoryService.adddevice_general(this.form_general.value)
    }
  }
}
