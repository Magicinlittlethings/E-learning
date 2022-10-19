import { Component, OnInit } from '@angular/core';
import {  faMagnifyingGlass, faGear, faEllipsis, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  gear = faGear;
  search = faMagnifyingGlass;
  ellipsis = faEllipsis;
  star = faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
