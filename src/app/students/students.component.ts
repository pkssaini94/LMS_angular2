import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentlist;
  batchList;
  courseList;

  constructor(private data: StudentService, private cdata: CourseService) { }

  ngOnInit() {
    this.data.getStudents()
      .subscribe((res) => {
        console.log(res)
        this.studentlist = res;
      })

    this.cdata.getBatches()
      .subscribe((res) => {
        console.log(res);
        this.batchList = res;
      })

    this.cdata.getCourses()
      .subscribe((res) => {
        console.log("hello")
        console.log(res);
        this.courseList = res;
      })
  }
  addStudent(name: string, cid: number, bid: number) {
    let newStudent = {
      'name': name,
      'cid': cid,
      'bid': bid
    }
    this.data.postStudent(newStudent)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
