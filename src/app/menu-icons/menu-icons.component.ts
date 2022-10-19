import { Component, OnInit } from '@angular/core';
import {  faHome, faBookmark, faUser, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent implements OnInit {
  home = faHome;
  bookmark = faBookmark;
  user = faUser;
  book = faBook;
  constructor() { }

  ngOnInit(): void {
  }

}
