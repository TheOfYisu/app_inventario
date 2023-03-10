import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {InventoryService} from 'src/app/core/services/inventory.service'

@Component({
  selector: 'app-inventory-grid',
  templateUrl: './inventory-grid.component.html',
  styleUrls: ['./inventory-grid.component.css']
})
export class InventoryGridComponent implements OnInit {

  device: String
  rowData = []
  colDefs = [
    {field: "No"},
    {field: "brand"},
    {field: "model"},
    {field: "serial"},
    {field: "operation"},
    {field: "location"},
    {field: "status"}
  ];

  constructor(
    private router: Router,
    private getrouter: ActivatedRoute,
    private InventoryService: InventoryService
  ) {
  }

  ngOnInit(): void {
    this.getrouter.queryParams.subscribe(
      (params: Params) => {
        this.device = params['device']
        if (params['device'] == 'Computers') {
          this.InventoryService.getdeviceinit('computer')
          this.InventoryService.devices_init$.subscribe((data)=>{
            this.rowData=data
          })
        } else if ((params['device'] == 'Monitors')) {
          this.InventoryService.getdeviceinit('display')
          this.InventoryService.devices_init$.subscribe((data)=>{
            this.rowData=data
          })
        }
      }
    )
  }

  viewdevice(row) {
    const serial = row.serial
    const device = this.device
    this.router.navigate(['/pages/private/home/inventory/view/device'], {queryParams: {serial, device}})
  }

}
