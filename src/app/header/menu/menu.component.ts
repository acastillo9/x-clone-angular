import { Component } from '@angular/core';
import { faHouse, faMagnifyingGlass, faTable, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faTable = faTable;
  faUser = faUser;
}
