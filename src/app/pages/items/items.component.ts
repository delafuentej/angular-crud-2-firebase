import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public employees:EmployeeModel[]=[];

  public loading:boolean=false;
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.loading=true;
    this.employeesService.getEmployees().subscribe( res =>{
      console.log('res items component',res)
      this.employees=res;
      this.loading=false;
    });
  }

}
