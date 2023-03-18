import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

import { Doctor } from 'src/app/Models/doctor';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
  providers: [],
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  pageNo: number;
  pageItems;
  items: MegaMenuItem[];
  search: string = '';
  sep: string = 'Speciality';
  tag: string;

  constructor(private doctorServices: DoctorService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Speciality',
        icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Speciality',
              items: [
                { label: 'Internist' },
                { label: 'Optometrist' },
                { label: 'orthopedist' },
                { label: 'Dentist' },
                { label: 'Urologist' },
                { label: 'Surgeon' },
              ],
            },
          ],
        ],
      },
    ];
    this.doctorServices.getAll().subscribe((data) => {
      this.doctorServices.doctors = data;
      this.doctors = this.doctorServices.doctors;
      this.pageNo = this.doctors.length;
      this.page({ first: 0, rows: 9 });
    });
  }
  searchByName(event) {
    if (this.search === '') this.pageItems = this.doctors;
    this.pageItems = this.pageItems.filter((doc) => {
      return doc.name
        .toLocaleLowerCase()
        .startsWith(`${this.search.toLocaleLowerCase()}`);
    });

    let pageCount = this.pageItems.length;
    this.pageNo = pageCount;
  }

  page(event) {
    const first = event.first;
    const row = event.rows;

    this.pageItems = this.doctors.slice(first, first + row);
  }
  filterBySpec(event) {
    this.sep = event.target.innerText;
    this.tag = event.target.tagName;

    if (
      this.sep !== 'Speciality' &&
      (this.tag === 'SPAN' || this.tag === 'A') &&
      this.search === undefined
    ) {
      this.pageItems = this.doctors.filter((doc) => {
        return doc.speciality === this.sep;
      });
    } else if (
      this.sep !== 'Speciality' &&
      (this.tag === 'SPAN' || this.tag === 'A') &&
      this.search !== undefined
    ) {
      this.pageItems = this.doctors.filter((doc) => {
        return doc.speciality === this.sep;
      });
    }

    let pageCount = this.pageItems.length;
    this.pageNo = pageCount;
  }
  deleteDoctor(id: string, index: number) {
    console.log(id, index);
    let confirmDeleted = confirm('Are you sure?');
    if (confirmDeleted) {
      this.doctorServices.delete(id).subscribe();
      //this.doctorServices.doctors.splice(index, 1);
      this.pageItems.splice(index, 1);
    }
  }
}
