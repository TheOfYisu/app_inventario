import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-inventory-view-device',
  templateUrl: './inventory-view-device.component.html',
  styleUrls: ['./inventory-view-device.component.css']
})
export class InventoryViewDeviceComponent implements OnInit {

  device: String

  fuctionback() {
    this.router.navigate(['/pages/private/home/inventory'])
  }

  fuctionedit() {
    alert("Editaste este device")
  }

  constructor(
    private router: Router,
    private getrouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getrouter.queryParams.subscribe(
      (params: Params) => {
        this.device = params['device']
      }
    )
  }

}
