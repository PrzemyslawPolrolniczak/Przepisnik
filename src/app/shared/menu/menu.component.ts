import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuInterface } from './menu-interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuItems: MenuInterface[];
  @Output() emitData: EventEmitter<any> = new EventEmitter()
  
  constructor() { }
  
  ngOnInit() {
  }

  turnActive(value: number):void {
    this.menuItems.map(x => x.id == value ? (x.active = true, this.emitData.emit(x.data)) : x.active = false)
  }

}
