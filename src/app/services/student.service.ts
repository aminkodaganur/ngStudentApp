import { Injectable } from '@angular/core';
import { Http,HttpModule } from '@angular/http';
import { Observable } from "rxjs/Observable";
@Injectable()

export class StudentService{

    allStudent : any = [];

    constructor(private http: Http){}


    putAllStudents(data){
        this.allStudent = data;
    }

    getAllStudent(){
        return this.allStudent;
    }

    getAllStudentsServer(): Observable<any> {
        let data$ = this.http.get('assets/student.json');
        return data$;
    }

    addStudent(newStudent){
        this.allStudent.push(newStudent);
    }

    removeStudent(uid){
        const index = this.allStudent.findIndex(item => item.uid === uid);
        this.allStudent.splice(index,1);
    }
    getStudentByUID(uid){
        const index = this.allStudent.findIndex(item => item.uid === uid);
        return this.allStudent[index];
    }
    updateStudent(data,uid){
        const index = this.allStudent.findIndex(item => item.uid === uid);
        this.allStudent[index]['fname'] = data['fname'];
        this.allStudent[index]['lname'] = data['lname'];
        this.allStudent[index]['school'] = data['school'];
        this.allStudent[index]['gender'] = data['gender'];
        this.allStudent[index]['uid'] = data['uid'];
        this.allStudent[index]['avt'] = data['avt'];
    }
}