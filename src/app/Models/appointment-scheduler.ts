import { Doctor } from "./doctor";
import { Employee } from "./employee";

export class AppointmentScheduler {

    constructor(
   public patientID:string,
   public doctorID:String,
   public employeeID:String,
   public date:Date,
   public _id?:string
    ){}
}
