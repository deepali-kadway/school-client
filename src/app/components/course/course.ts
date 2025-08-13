import { Component } from '@angular/core';
import { Courses } from '../../services/courses';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
  title: string = 'List of Courses';
  courses: string[];

  // dependency injection of Courses service
  // when this component is created, angular finds and injects an instance of the courseService class into serviceVariable within constructor function
  constructor(serviceVariable: Courses){
    // we can use the serviceVariable to call getCourses function from courses service
    this.courses = serviceVariable.getCourses();
  }
}
