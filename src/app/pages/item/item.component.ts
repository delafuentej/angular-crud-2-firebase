import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import Swal  from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  employee= new EmployeeModel();

  

  constructor( private employeesService: EmployeesService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id: any= this.activatedRoute.snapshot.paramMap.get('id');
   /*  console.log( id) */
    if(id !== 'new'){
       this.employeesService.getEmployee(id).subscribe( (res:any)=>{
        this.employee=res;
        this.employee.id=id;
      });
    }
  }

  save( form: NgForm){

    if(form.invalid) return;

    Swal.fire({
      title: 'Wait',
      text: 'Saving Data',
      icon: 'info',
      allowOutsideClick: false

    });
    Swal.showLoading();

    let request: Observable<any>;

    if(this.employee.id){
      request=this.employeesService.updateEmployee( this.employee);
      

    }else{
      request= this.employeesService.createEmployee( this.employee);
        

    }

    request.subscribe( res=>{
      Swal.fire({
          title: `${this.employee.firstName} ${this.employee.lastName} `,
          text: 'Successfully updated',
          icon: 'success'
      });
    })

   
  }
}
