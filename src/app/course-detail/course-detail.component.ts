import { Component, OnInit } from '@angular/core';
import {  faBookmark, faArrowLeft,faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  bookmark = faBookmark;
  arrow = faArrowLeft;
  ellipsis= faEllipsis;
  constructor() { }

  ngOnInit(): void {
  }

}
