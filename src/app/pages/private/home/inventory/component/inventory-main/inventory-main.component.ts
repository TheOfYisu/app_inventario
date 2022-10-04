import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory-main',
  templateUrl: './inventory-main.component.html',
  styleUrls: ['./inventory-main.component.css']
})


export class InventoryMainComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const device = 'Computers'
    this.router.navigate(['/pages/private/home/inventory'], {queryParams: {device}})
  }

  adddevice() {
    this.router.navigate(['/pages/private/home/inventory/form'])
  }

  showdevices(tab) {
    const device = tab.textLabel
    this.router.navigate(['/pages/private/home/inventory'], {queryParams: {device}})
  }
}
