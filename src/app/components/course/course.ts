import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
title: string = 'List of Courses';
courses: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
}
