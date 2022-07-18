import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  employee= new EmployeeModel();

  constructor() { }

  ngOnInit(): void {
  }

  save( form: NgForm){

    if(form.invalid) return;
    
    console.log(form)
    console.log(this.employee)
  }
}
