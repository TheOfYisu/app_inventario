import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  collapsed=true;
  navData = navbarData;

  constructor() {}

  ngOnInit(): void {
    Swal.fire({
      icon: 'success',
      title: 'Welcome',
    })
  }
}
