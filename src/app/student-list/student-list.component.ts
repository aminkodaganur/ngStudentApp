import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from "../services/student.service";
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {

	serverData = [];
	schoolMapping : any = {};

	constructor(private _studentService: StudentService,private router: ActivatedRoute) {
		this.getLatestStudentFromService();
	 }

	ngOnInit() {

		if(! (this.serverData.length > 0)){
			let self = this;
			this._studentService.getAllStudentsServer().subscribe(function (res) {	
				let data = res.json();			
				self.serverData = data['data']['studentsData'];
				self._studentService.putAllStudents(self.serverData);
				
			});
		}

		this.schoolMapping = {
			'delhi' : 'Delhi Public School',
			'inventure' : 'Inventure Academy',
			'greenwood' : 'Greenwood High International School'
		}
	}

	getLatestStudentFromService(){
		this.serverData = this._studentService.getAllStudent();
	}

	removeUser(uid){
		this._studentService.removeStudent(uid);
		this.getLatestStudentFromService();
	}
}
