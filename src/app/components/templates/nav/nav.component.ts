import { Component, Input, OnInit } from '@angular/core';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() opened = false;

  constructor() { }

  ngOnInit() { }

}
