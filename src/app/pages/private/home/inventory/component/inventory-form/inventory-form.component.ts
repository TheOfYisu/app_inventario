import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryService } from '../../../../../../core/services/inventory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css'],
})
export class InventoryFormComponent implements OnInit {
  select_device: FormGroup;
  form_general: FormGroup;
  devicesellec: string;
  checked = false;
  valitbutton = !false;

  devices = [
    {
      id: 1,
      description: 'Computer',
    },
    {
      id: 2,
      description: 'Display',
    },
    {
      id: 3,
      description: 'Keyboards',
    },
    {
      id: 4,
      description: 'Mouses',
    },
    {
      id: 5,
      description: 'Ups',
    },
    {
      id: 6,
      description: 'Home Appliances',
    },
  ];

  /* devices = [
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
  ] */

  status = [{ value: 'Available' }, { value: 'In Use' }, { value: 'Damaged' }];

  locations = [
    { value: 'OFFI 1010' },
    { value: 'OFFI 1001' },
    { value: 'OFFI 213' },
  ];

  operations = [
    { value: 'Centrum' },
    { value: 'Transportation' },
    { value: 'Soft-g.NET' },
  ];

  networks_devices = [
    { value: 'Switch' },
    { value: 'Router' },
    { value: 'Biometrico' },
    { value: 'Modem' },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private InventoryService: InventoryService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  changeDevice(device: string) {
    this.devicesellec = device;
    const controlsComputer = [
      'brand_proccessor',
      'model_proccessor',
      'type_ram',
      'capacy_ram',
      'type_storage',
      'capacy_storage',
    ];
    switch (device) {
      case 'Computer':
        controlsComputer.forEach((control: string) => {
          if (control) {
            this.setRequired(control);
          }
        });
        break;
      case 'Display':
        controlsComputer.forEach((control: string) => {
          if (control) {
            this.setNotRequired(control);
          }
        });
        break;
      case 'Networks':
        controlsComputer.forEach((control: string) => {
          if (control) {
            this.setNotRequired(control);
          }
        });
        break;
      case 'Home Appliances':
        controlsComputer.forEach((control: string) => {
          if (control) {
            this.setNotRequired(control);
          }
        });
        break;
      default:
        controlsComputer.forEach((control: string) => {
          if (control) {
            this.setNotRequired(control);
          }
        });
        break;
    }
  }

  setRequired(control: string) {
    if (control) {
      this.form_general.get(control).setValidators(Validators.required);
      this.form_general.updateValueAndValidity();
    }
  }

  setNotRequired(control: string) {
    if (control) {
      this.form_general.get(control).clearValidators();
      this.form_general.get(control).disable();
      this.form_general.get(control).setValue(null);
      this.form_general.updateValueAndValidity();
    }
  }

  createForm() {
    this.form_general = this.fb.group({
      select_devices: [null, Validators.required],
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
      brand_proccessor: null,
      model_proccessor: null,
      type_ram: null,
      capacy_ram: null,
      type_storage: null,
      capacy_storage: null,
      brand_carger: null,
      serial_carger: null,
      havecharger: null
    });
  }

  get seletdevice(): boolean {
    return this.form_general.get('select_devices').value;
  }

  get formIsValid(): boolean {
    return this.form_general.valid;
  }

  savedevice() {
    const formData = Object.assign({}, this.form_general.getRawValue());
    console.log(formData)
    /* if (formData.select_devices === 'Computer') {
      if (this.form_general.valid) {
        this.InventoryService.adddevice_computer(
          this.form_general.value,
          this.form_computer.value,
          this.form_additional.value
        );
      } else {
        alert('faltan datos');
      }
    } else if (this.select_device.get('select_devices').value == 'Display') {
      if (this.form_general.valid) {
        this.InventoryService.adddevice_display(
          this.form_general.value,
          this.form_additional.value
        );
      } else {
        alert('faltan datos');
      }
    } else {
      this.InventoryService.adddevice_general(this.form_general.value);
    } */
  }
}
