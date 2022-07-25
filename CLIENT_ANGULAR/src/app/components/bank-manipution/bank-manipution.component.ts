import { Component, OnInit } from '@angular/core';
import { Account, WithDrawal } from 'src/app/interfaces/bankAccount';
import { BankAccountService } from 'src/app/services/bank-account.service';

@Component({
  selector: 'app-bank-manipution',
  templateUrl: './bank-manipution.component.html',
  styleUrls: ['./bank-manipution.component.css'],
})
export class BankManiputionComponent implements OnInit {
  public accountList: Array<any>;
  public withDrawal: WithDrawal = new WithDrawal();
  constructor(public bankAccountService: BankAccountService) {
    this.accountList = [];
  }

  ngOnInit(): void {}
  async takeMoney() {
   try {
     
    await this.bankAccountService.withDrawal(this.withDrawal);
    
     
   } catch (error) {
    console.log(error);
    
   }
  }
  async deposit(){
    try {
    
       await this.bankAccountService.deposit(this.withDrawal)
     
      console.log(this.withDrawal);
      
    } catch (error) {
      console.log(error);
    }
  }
}
