import { Component, OnInit } from '@angular/core';
import { BankAccountService } from 'src/app/services/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit
{
  public accountList: Array<any>

  constructor(public bankAccountService: BankAccountService)
  {
    this.accountList = []
  }

  ngOnInit(): void
  {
    this.getAcount()
   
  }
  async getAcount()
  {
    try
    {
      const result = await this.bankAccountService.getAccountApi()
      this.accountList = result[0]
      console.log(result[0]);
      
    } catch (error)
    {
      console.log(error);
      
    }
  }

}


