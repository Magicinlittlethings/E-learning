import { Component, OnInit } from '@angular/core';
import {   faArrowLeft,faEllipsis, faBookmark, faStar, faPlay} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent implements OnInit {
 arrow= faArrowLeft;
 ellipsis =faEllipsis;
 bookmark = faBookmark;
 star =faStar;
 play = faPlay;
  constructor() { }

  ngOnInit(): void {
  }

}
