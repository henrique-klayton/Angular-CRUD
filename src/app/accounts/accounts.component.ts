import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { MessageService } from 'primeng/api';

import { Account } from 'src/model/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  displayDialog: boolean;
  accounts: Account[];
  cols: any[];
  newAccount: boolean;
  account: { id: number; username: string; email: string; password: string; } = {};
  selectedAccount: Account;

  constructor(private accountService: AccountService, private messageService: MessageService) { }

  ngOnInit() {
    this.accounts = this.accountService.getAllAccounts();
    console.log(`Loaded ${this.accounts.length} accounts`);

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'username', header: 'Nome de Usuário' },
      { field: 'email', header: 'Email' },
      { field: 'password', header: 'Senha' }
    ];
  }

  showDialogToAdd() {
    this.newAccount = true;
    console.log('Add dialog');
    this.account = {};
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newAccount = false;
    this.account = this.accountToObject(event.data);
    console.log(`Selected: ${JSON.stringify(this.account)}`);
    this.displayDialog = true;
  }

  accountToObject(account: Account): { id: number; username: string; email: string; password: string; } {
    const obj = {};
    for (const prop in account) {
      obj[prop] = account[prop];
    }
    return obj;
  }

  saveAccount() {
    if (this.newAccount) {
      const result = this.accountService.createAccount(this.account);
      this.refresh();
      if (result == 'OK') {
        this.successMessage('Conta Criada!', 'Conta criada com sucesso.')
      }
    } else {
      const result = this.accountService.updateAccount(this.account);
      this.refresh();
      if (result == 'OK') {
        this.successMessage('Conta Atualizada!', 'Os dados dessa conta foram atualizados com sucesso.')
      }
    }
    this.displayDialog = false;
  }

  deleteAccount() {
    if (!this.newAccount) {
      const result = this.accountService.deleteAccount(this.account.id);
      this.displayDialog = false;
      this.refresh();
        if (result == 'OK') {
          this.successMessage('Conta Deletada!', 'Conta deletada com sucesso.')
        } else if (result == 'NF') {
          this.errorMessage('Falha ao deletar!', 'A conta com esse id não foi encontrada.')
        }
    }
  }

  refresh() {
    this.accounts = this.accountService.getAllAccounts();
  }

  successMessage(summary: string, detail: string) {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail})
  }

  errorMessage(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail})
  }
}
