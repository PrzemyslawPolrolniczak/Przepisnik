import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../shared/menu/menu-interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  activeSubComponent: string;
  menuOptions: MenuInterface[] = [
    {
      id: 0,
      name: 'O twórcy',
      data: 'creator',
      active: false
    },
    {
      id: 1,
      name: 'Baza przepisów',
      data: 'database',
      active: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  changeEvent(e :string):void {
    this.activeSubComponent = e;
  }

}
