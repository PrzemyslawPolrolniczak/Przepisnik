import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../shared/menu/menu-interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  menuOptions: MenuInterface[] = [
    {
      id: 0,
      name: 'test',
      route: 'none',
      active: false
    },
    {
      id: 1,
      name: 'test',
      route: 'none',
      active: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
