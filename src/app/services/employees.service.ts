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

  deleteEmployee(id:string){
    return this.http.delete(`${this.url}/employees/${id}.json`)
  }
  getEmployee(id:string){
    return this.http.get(`${this.url}/employees/${id}.json`)
  }

  updateEmployee( employee: EmployeeModel){

    const employeeTemplate={
      ...employee

    };
  
    delete employeeTemplate.id;
    console.log('ohneId',employeeTemplate)
  
    return this.http.put(`${this.url}/employees/${employee.id}.json`, employeeTemplate);
    
  }

  getEmployees(){
    return this.http.get(`${this.url}/employees.json`)
    .pipe( map( 
      this.createArray
    ));
  }

  
  private createArray( employeesObj:any ){
    
    const employees: EmployeeModel[]=[];
    console.log('employeesObj',employeesObj);
    if( employeesObj === null) return [];
    /* if( employeesObj === null) return [];
 */

    Object.keys( employeesObj).forEach((key) =>{
      const employee: EmployeeModel= employeesObj[key];
      employee.id= key;

      employees.push( employee );
    });
    return employees;
  }

  

  
}
