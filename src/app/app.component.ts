import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { AppService } from './Services/app.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-front';
  displayedColumns: string[] = ['registerNo', 'firstName', 'lastName', 'email','dob','gender','course','qualification','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private api:AppService){}

  ngOnInit(): void {
    this.getAllStudent();
  }

  openAddEditStudForm(){
   const dialogRef= this.dialog.open(AddEditStudentComponent)
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getAllStudent();
        }
      }
    })
  }

  editAStudent(data:any){
const dialogRef=this.dialog.open(AddEditStudentComponent,{
  data,
})
dialogRef.afterClosed().subscribe({
  next:(val)=>{
    if(val){
      this.getAllStudent();
    }
  }
})
  }

  getAllStudent(){
    this.api.getAllStudent().subscribe({
      next:(res)=>{
        // console.log(res);
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteAStudent(id:any){
    this.api.deleteStudent(id).subscribe({
      next:(res:any)=>{
        alert("Student Deleted")
        this.getAllStudent()
      },
      error:(err:any)=>{
        alert(err)
      }
    })
  }

}
