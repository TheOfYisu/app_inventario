import {Validators} from "@angular/forms";

export interface inventory_init_interface {
  No: number;
  brand: string;
  model: string;
  serial: string;
  status:string;
  operation:string;
  location:string;
}

export interface device_information_general {
  select_device:string;
  internal_serial:string;
  brand:string;
  model:string;
  serial:string;
  selected_status:string;
  select_location:string;
  select_operation:string;
  date_picker:string;
  unit_value:string;
  electronic_invoice:string;
  supplier:string;
}
export interface computer{
  brand_proccessor: string;
  model_proccessor: string;
  type_ram: string;
  capacy_ram: string;
  type_storage: string;
  capacy_storage:string;
}
export interface aditional{
  brand_carger: string;
  serial_carger: string;
}
