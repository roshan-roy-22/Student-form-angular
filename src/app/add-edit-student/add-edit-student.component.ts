import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from '../Services/app.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css'],
})
export class AddEditStudentComponent implements OnInit {
  courses: String[] = [
    'MEARN Stack',
    'Python Django',
    'Flutter',
    'Data Science',
    'Asp.Net',
  ];
  studentForm: FormGroup;

  constructor(
    private api: AppService,
    private dialogref: MatDialogRef<AddEditStudentComponent>,
    private fb: FormBuilder,
    @Inject (MAT_DIALOG_DATA) public data:any
  ) {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      course: '',
      qualification: '',
    });
  }

  ngOnInit(): void {
    this.studentForm.patchValue(this.data)
  }
  onFormSubmit() {
    if (this.studentForm.valid) {
      if(this.data){

        this.api.updateStudent(this.data.id,this.studentForm.value).subscribe({
          next:(res:any)=>{
            alert("Student Updated Succesfully");
            this.dialogref.close(true)
          },error:(err:any)=>{
            console.log(err);
          }
        })
      }else{
        this.api.addStudent(this.studentForm.value).subscribe({
          next:(res:any)=>{
            alert("Student Registered Succesfully");
            this.dialogref.close(true)
          },error:(err:any)=>{
            console.log(err);
          }
        })
      }
     
    }
  }
}
