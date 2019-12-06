import { Injectable } from '@angular/core';

import { Account } from 'src/model/account';
import { Database } from './database';

@Injectable()
export class AccountService {
  private db: Database;

  constructor() {
    this.db = new Database();
    // Testing
    // console.log(db.getAccountById(4));
    // console.log(db.removeAccount(1));
    // console.log(db.createAccount(new Account(3, 'Teste', 'teste@exemplo.com', 'teste')))
    // console.log(db.updateAccount(new Account(3, 'NewTesteUsername', 'teste@exemplo.com', 'teste')))
    // console.log(db.updateAccount(new Account(12121312321, 'Teste', 'teste@exemplo.com', 'teste')))
    // console.log(db.getAllAccounts());

  }

  getAccountById(id: number): Account|string {
    return this.db.getAccountById(id);
  }

  getAccountByUsername(username: string): Account|string {
    return this.db.getAccountByUsername(username);
  }

  updateAccount(account: { id: number; username: string; email: string; password: string; }): string {
    return this.db.updateAccount(new Account(account.id,
                                             account.username,
                                             account.email,
                                             account.password));
  }

  createAccount(account: { username: string; email: string; password: string; }): string {
    return this.db.createAccount(account);
  }

  deleteAccount(id: number): string {
    return this.db.deleteAccount(id);
  }

  getAllAccounts(): Account[] {
    return this.db.getAllAccounts();
  }

}
