import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  subjectlist;
  teacherlist;

  constructor(private sdata: SubjectService, private tdata: TeacherService) { }

  ngOnInit() {
    this.sdata.getSubjects()
      .subscribe((res) => {
        console.log(res);
        this.subjectlist = res;
      })

    this.tdata.getTeachers()
      .subscribe((res) => {
        console.log(res);
        this.teacherlist = res;
      })
  }

  addTeacher(name: string, sid: number) {
    console.log(name);
    console.log(sid);
    let newSubject = {
      'name': name,
      'sid': sid
    }
    this.tdata.postTeachers(newSubject)
      .subscribe((res) => {
        console.log(res);
      })
  }
}
