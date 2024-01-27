function Account({ login, email }) {
    this.login = login;
    this.email = email;
}
  
Account.prototype.getInfo = function () {
    alert(`Логін ${this.login} з заданою поштою ${this.email}`)
};

console.log(Account.prototype.getInfo);

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo()

const poly = new Account('Poly', 'poly@mail.com',);

poly.getInfo()