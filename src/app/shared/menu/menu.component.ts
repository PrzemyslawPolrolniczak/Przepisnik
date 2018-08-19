import { Component, OnInit, Input } from '@angular/core';
import { MenuInterface } from './menu-interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuItems: MenuInterface[];
  constructor() { }
  

  ngOnInit() {
    console.log(this.menuItems);
  }

  turnActive(value: number):void {
    this.menuItems.map(x => x.id == value ? x.active = true : x.active = false) 
  }

}
