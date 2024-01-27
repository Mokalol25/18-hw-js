class Account {
    constructor(accountLogin, accountEmail) {
        this.login = accountLogin;
        this.email = accountEmail
    }
    getInfo() {
        alert(`Логін ${this.login} з заданою поштою ${this.email}`)
    }
}


console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo()

const poly = new Account('Poly', 'poly@mail.com',);

poly.getInfo()