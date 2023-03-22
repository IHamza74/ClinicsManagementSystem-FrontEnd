import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Doctor } from '../Models/doctor';
import { Patient } from '../Models/patient';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  role: string = '';
  id: string = '';
  user: Employee | Doctor | Patient;
  constructor() {
    this.role = localStorage.getItem('role');
    this.id = localStorage.getItem('id');
  }
}
