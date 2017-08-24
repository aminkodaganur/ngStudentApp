import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from "../services/student.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
	selector: 'app-student-edit',
	templateUrl: './student-edit.component.html',
	styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

	studentForm: FormGroup;
	uid : any;

	constructor(private _studentService: StudentService,private formBuilder: FormBuilder, private router: ActivatedRoute, private routerB : Router) {
		this.router.params.subscribe(params => {			
			if(params['uid']=='000New'){
				//do nothing
			}else{
				this.uid = params['uid'];
			}
		});
	}

	ngOnInit() {
		this.studentForm = this.formBuilder.group({
			"fname"  : ['',Validators.required],
			"lname"  : [],
			"school" : ['delhi'],
			"gender" : ['male'],
			"uid" 	 : ['',[Validators.required,Validators.pattern(/^[a-zA-Z][0-9]{7}$/)]],
			"avt" 	 : ['mark.png']
		});
		if(this.uid){
			this.populateData();
		}
		let self = this;
		this.studentForm.controls['gender'].valueChanges.subscribe(function(){
			self.toggelAvt();
		});
	}

	populateData(){
		let exStudent = this._studentService.getStudentByUID(this.uid);
		this.studentForm.controls['fname'].setValue(exStudent.fname);
		this.studentForm.controls['lname'].setValue(exStudent.lname);
		this.studentForm.controls['school'].setValue(exStudent.school);
		this.studentForm.controls['gender'].setValue(exStudent.gender);
		this.studentForm.controls['uid'].setValue(exStudent.uid);
		this.studentForm.controls['avt'].setValue(exStudent.avt);
	}

	submitData(){
		if(this.studentForm.valid){
			let data = {
				"fname"  : this.studentForm.controls['fname'].value,
                "lname"  : this.studentForm.controls['lname'].value,
                "school" : this.studentForm.controls['school'].value,
                "gender" : this.studentForm.controls['gender'].value,
                "uid" 	 : this.studentForm.controls['uid'].value,
                "avt" 	 : this.studentForm.controls['avt'].value
			}
			if(this.uid){
				this._studentService.updateStudent(data,this.uid);
			}
			else{
				this._studentService.addStudent(data);
			}			
			this.routerB.navigate(['/list']);
		}
	}

	toggelAvt(){
		if(this.studentForm.controls['gender'].value == 'male'){
			this.studentForm.controls['avt'].setValue('mark.png');
		}else{
			this.studentForm.controls['avt'].setValue('lena.png');
		}
	}
}
