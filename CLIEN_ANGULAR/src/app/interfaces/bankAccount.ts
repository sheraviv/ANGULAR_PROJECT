export class Account {
  public constructor(
    public account_number?: string,
    public account_balance?: number,
    public account_loan?: number,
    public waithDrawal?: number
  ) {}
}


export class WithDrawal {
  public constructor(public waithDrawal?: number){
    
  }
}