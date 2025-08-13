import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Courses {
  private courses: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  constructor(){}

  // Method to get the list of courses
  getCourses(){
    // typically make call to API for all courses, but will use in memory array for now
    return this.courses;
  }
}
