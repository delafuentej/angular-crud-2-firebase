export class EmployeeModel{
    id?: any;
    firstName: string;
    lastName: string;
    age:number;
    position:string;
    email:string;
    goodHealth:boolean;

    constructor(){
        this.id="";
        this.firstName="";
        this.lastName="";
        this.age=0
        this.position="";
        this.email="";
        this.goodHealth=true;
    }


}