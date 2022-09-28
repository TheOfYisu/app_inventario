import {Validators} from "@angular/forms";

export interface inventory_init_interface {
  id_device: string;
  internal_serial: string;
  brand: string;
  model: string;
  serial: string;
  status:string;
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
