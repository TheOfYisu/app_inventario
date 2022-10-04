import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inventory-view-device',
  templateUrl: './inventory-view-device.component.html',
  styleUrls: ['./inventory-view-device.component.css']
})
export class InventoryViewDeviceComponent implements OnInit {

  form_general: FormGroup;
  onedevice="Computer"
  device: String
  imgdevice="https://i.dell.com/das/xa.ashx/global-site-design%20WEB/8e7e3ad0-7079-eb70-42b4-16e1d835dfb1/1/OriginalPng?id=Dell/Product_Images/Dell_Client_Products/Notebooks/Vostro_Notebooks/14_3468/global_spi/notebook-vostro-14-3468-non-touch-left-windows-hero-504x350-ng.psd"

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

  fuctionback() {
    this.router.navigate(['/pages/private/home/inventory'])
  }

  fuctionedit() {
    alert("Editaste este device")
  }

  constructor(
    private router: Router,
    private getrouter: ActivatedRoute,
    private fb: FormBuilder,
  ) {
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
  }

  ngOnInit(): void {
    this.getrouter.queryParams.subscribe(
      (params: Params) => {
        this.device = params['device']
      }
    )
  }

}
