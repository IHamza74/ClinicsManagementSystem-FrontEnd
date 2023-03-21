export class Patient {
  constructor(
    public _id: string,
    public name: string,
    public Age: number,
    public Photo: string,
    public Address: {
      government: string;
      city: string;
      street: string;
      building: string;
    },
    public Apointments: Array<string>,
    public Disease: string,
    public Section: string,
    public Password: string,
    public Email: string,
    public Name?: string
  ) {}
}

export class PatientEdit {
  constructor(
    public id: string,
    public name: string,
    public age: number,
    public photo: string,
    public address: object,
    public Apointments: Array<string>,
    public disease: string,
    public section: string,
    public password: string,
    public email: string
  ) {}
}
export class patientAddress {
  constructor(
    public government: string,
    public city: string,
    public street: string,
    public building: string
  ) {}
}
