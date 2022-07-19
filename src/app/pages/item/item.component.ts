import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  employee= new EmployeeModel();

  constructor( private employeesService: EmployeesService) { }

  ngOnInit(): void {
  }

  save( form: NgForm){

    if(form.invalid) return;

    if(this.employee.id){
      this.employeesService.updateEmployee( this.employee).subscribe( res =>{
        console.log(res)
      })

    }else{
      this.employeesService.createEmployee( this.employee).subscribe( res =>{
        this.employee=res;
    
      });
        

    }

   
  }
}
