import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Vacation } from '../interfaces/vacations';
const allVacationsUrl = "http://localhost:4100/vacations"
const addVacationUrl = 'http://localhost:4100/addVacation';
@Injectable({
  providedIn: 'root',
})
export class VacationsService {
  constructor(public httpClient: HttpClient) {}

  getVacationsApi(): Promise<any> {
    return this.httpClient.get(allVacationsUrl).toPromise();
  }

  addNewVacation(vacation: Vacation): Promise<Array<any>> {
    console.log(vacation)
    return this.httpClient
      .post(addVacationUrl, vacation)
      .toPromise() as Promise<Array<any>>;
  }
}
