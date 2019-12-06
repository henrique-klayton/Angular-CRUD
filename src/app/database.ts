import { Account } from 'src/model/account';

export class Database {

  private accounts: Account[];

  constructor() {
    this.load();
  }

  getAccountById(id: number): Account|string {
    for (const account of this.accounts) {
      if (account.getId() === id) {
        return account;
      }
    }
    return 'NF';
  }

  getAccountByUsername(username: string): Account|string {
    for (const account of this.accounts) {
      if (account.getUsername() === username) {
        return account;
      }
    }
    return 'NF';
  }

  updateAccount(account: Account): string {
    const id = account.getId();
    for (const [index, value] of this.accounts.entries()) {
      if (value.getId() === id) {
        this.accounts[index] = account;
        return 'OK';
      }
    }
    return 'NF';
  }

  createAccount(account: Account): string {
    if (this.getAccountById(account.getId()) === 'NF') {
      return 'AE';
    }
    this.accounts.push(account);
    return 'OK';
  }

  deleteAccount(id: number): string {
    for (const [index, value] of this.accounts.entries()) {
      if (value.getId() === id) {
        this.accounts.splice(index, 1);
        return 'OK';
      }
    }
    return 'NF';
  }

  getAllAccounts(): Account[] {
    return [...this.accounts];
  }

  private load() {
    console.log('Initializing database');
    this.accounts = [
      new Account(0, 'Programador', 'random.code@emails.com', 'plaintextissecure'),
      new Account(1, 'Alguém', 'alguem@emails.com', '********'),
      new Account(2, 'Alguém', 'alguem@emails.com', '********'),
      new Account(3, 'Alguém', 'alguem@emails.com', '********'),
      new Account(4, 'Alguém', 'alguem@emails.com', '********'),
      new Account(5, 'Alguém', 'alguem@emails.com', '********'),
      new Account(6, 'Alguém', 'alguem@emails.com', '********'),
      new Account(7, 'Alguém', 'alguem@emails.com', '********'),
      new Account(8, 'Alguém', 'alguem@emails.com', '********'),
      new Account(9, 'Alguém', 'alguem@emails.com', '********'),
      new Account(10, 'Alguém', 'alguem@emails.com', '********'),
      new Account(11, 'Alguém', 'alguem@emails.com', '********'),
      new Account(12, 'HackerAnônimo', 'email.nome@emails.com', 'hackermans'),
      new Account(13, 'Alguém', 'alguem@emails.com', '********'),
      new Account(14, 'Alguém', 'alguem@emails.com', '********'),
      new Account(15, 'Alguém', 'alguem@emails.com', '********'),
      new Account(16, 'Alguém', 'alguem@emails.com', '********'),
      new Account(17, 'Alguém', 'alguem@emails.com', '********'),
      new Account(18, 'Alguém', 'alguem@emails.com', '********'),
      new Account(19, 'Alguém', 'alguem@emails.com', '********'),
      new Account(20, 'Alguém', 'alguem@emails.com', '********'),
      new Account(21, 'Alguém', 'alguem@emails.com', '********'),
      new Account(22, 'Alguém', 'alguem@emails.com', '********'),
      new Account(23, 'Alguém', 'alguem@emails.com', '********'),
      new Account(24, 'Alguém', 'alguem@emails.com', '********'),
      new Account(25, 'Alguém', 'alguem@emails.com', '********'),
      new Account(26, 'Alguém', 'alguem@emails.com', '********')
    ];
  }
}
