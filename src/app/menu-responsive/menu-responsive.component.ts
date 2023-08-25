import { Component } from '@angular/core';
import { faHouse, faMagnifyingGlass, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.scss']
})
export class MenuResponsiveComponent {
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faBell = faBell;
  faEnvelope = faEnvelope;
}
