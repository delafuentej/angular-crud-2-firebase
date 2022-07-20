import { Component,  OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from '../../models/employee.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public employees:EmployeeModel[]=[];

  public loading:boolean=false;

  public employee:any;


  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.loading=true;
    this.employeesService.getEmployees().subscribe( res =>{
      console.log('res items component',res)
      this.employees=res;
      this.loading=false;
    });
  
  

  }

  deleteEmployee(employee: EmployeeModel, i:number){
    Swal.fire({
     title:'Are you sure?',
     text: `Are you sure to delete ${employee.firstName} ${employee.lastName}`,
     icon:'question',
     showConfirmButton:true,
     showCancelButton:true


    }). then( res =>{
     if(res.value){
       this.employees.splice(i,1);
       this.employeesService.deleteEmployee( employee.id).subscribe;
     }
    })
  }
  
}




