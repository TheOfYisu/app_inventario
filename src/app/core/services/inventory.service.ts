import {Injectable} from '@angular/core';
import {inventory_init_interface, device_information_general} from 'src/app/interfaces/inventory';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class InventoryService {

  private devices_init=new BehaviorSubject(<inventory_init_interface[]>([]))
  devices_init$=this.devices_init.asObservable()

  listdevicescomputers:inventory_init_interface[]=[
    {id_device:'01',internal_serial:'sc-01',brand:'dell',model:'vostro 14',serial:'x2154',status:'disponible'}
  ]
  listdevicesdisplay:inventory_init_interface[]=[
    {id_device:'01',internal_serial:'sc-01',brand:'viwvision',model:'fx2145',serial:'a',status:'uso'}
  ]

  constructor() {
    this.getdeviceinit('computer')
    console.log(this.devices_init.value)
  }

  getdeviceinit(device:string){
    if (device=='computer'){
      return this.devices_init.next(this.listdevicescomputers)
    }else if (device=='display'){
      return this.devices_init.next(this.listdevicesdisplay)
    }
  }

  adddevice(devece_general:device_information_general[]){
    const list:inventory_init_interface={
      id_device:devece_general['internal_serial'],internal_serial:devece_general['internal_serial'],brand:devece_general['brand'],model:devece_general['model'],serial:devece_general['serial'],status:devece_general['selected_status']
    }
    this.devices_init.next([...this.devices_init.value,list])
    console.log(this.devices_init.value)
  }

}
