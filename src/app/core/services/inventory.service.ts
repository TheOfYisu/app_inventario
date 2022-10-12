import {Injectable} from '@angular/core';
import {inventory_init_interface, device_information_general, computer, aditional} from 'src/app/interfaces/inventory';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class InventoryService {

  private devices_init=new BehaviorSubject(<inventory_init_interface[]>([]))
  devices_init$=this.devices_init.asObservable()

  listdevicescomputers:inventory_init_interface[]=[
    {No:1,brand:'dell',model:'vostro 14',serial:'x2154',operation:'Centrum',location:'Offi 1010',status:'disponible'}
  ]
  listdevicesdisplay:inventory_init_interface[]=[
    {No:1,brand:'viwvision',model:'fx2145',serial:'a',operation:'Centrum',location:'Offi 1010',status:'uso'}
  ]

  constructor() {
    this.getdeviceinit('computer')
  }

  getdeviceinit(device:string){
    if (device=='computer'){
      return this.devices_init.next(this.listdevicescomputers)
    }else if (device=='display'){
      return this.devices_init.next(this.listdevicesdisplay)
    }
  }

  adddevice_computer(devece_general:device_information_general,computer_infotmation:computer,additional_informattion:aditional){
    console.log(devece_general,computer_infotmation,additional_informattion)
  }

  adddevice_display(devece_general:device_information_general,additional_informattion:aditional){
    console.log(devece_general,additional_informattion)
  }

  adddevice_general(device_general:device_information_general){
    console.log(device_general)
  }



}
