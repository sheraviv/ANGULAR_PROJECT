import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, WithDrawal } from '../interfaces/bankAccount';
const bankAccountUrl = 'http://localhost:4100/bankAccount';
const withDrawalUrl = 'http://localhost:4100/withdrawal';
@Injectable({
  providedIn: 'root',
})
export class BankAccountService {
  constructor(public httpClient: HttpClient) {}

  getAccountApi(): Promise<any> {
    return this.httpClient.get(bankAccountUrl).toPromise();
  }

  withDrawal(withDrawal: WithDrawal): Promise<Array<any>> {
    return this.httpClient
      .post(withDrawalUrl, withDrawal)
      .toPromise() as Promise<Array<any>>;
  }
}
