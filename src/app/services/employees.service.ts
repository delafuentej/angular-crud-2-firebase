import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url="https://angular-crud-6bb29-default-rtdb.europe-west1.firebasedatabase.app"

  constructor(private http: HttpClient) { }

  createEmployee( employee: EmployeeModel){
    return this.http.post(`${this.url}/employees.json`, employee)
    .pipe( map(  (res: any)=> {
     employee.id= res.name;
     return employee;
    }))
  }

  updateEmployee( employee: EmployeeModel){

    const employeeTemplate={
      ...employee

    };
  
    delete employeeTemplate.id;
    console.log('ohneId',employeeTemplate)
  
    return this.http.put(`${this.url}/employees/${employee.id}.json`, employeeTemplate);
    
  }
}
