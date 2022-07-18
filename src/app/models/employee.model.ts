export class EmployeeModel{
    id:string;
    firstName: string;
    lastName: string;
    age:number;
    position:string;
    email:string;
    healthStatus:boolean;

    constructor(){
        this.id="";
        this.firstName="";
        this.lastName="";
        this.age=0;
        this.position="";
        this.email="";
        this.healthStatus= true;
    }


}