import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory-view-device',
  templateUrl: './inventory-view-device.component.html',
  styleUrls: ['./inventory-view-device.component.css']
})
export class InventoryViewDeviceComponent implements OnInit {

  fuctionback(){
    this.router.navigate(['/pages/private/home/inventory'])
  }

  fuctionedit(){
    alert("Editaste este device")
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
