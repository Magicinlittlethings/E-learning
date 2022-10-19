import { Component, OnInit } from '@angular/core';
import {  faMagnifyingGlass, faGear, faEllipsis, faStar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  gear = faGear;
  search = faMagnifyingGlass;
  ellipsis = faEllipsis;
  star = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
