class StringBuilder {
    constructor(initialValue) {
      this._value = initialValue;
    }
  
    get value() {
      return this._value;
    }
  
    append(str) {
      this._value += str;
    }
  
    prepend(str) {
      this._value = str + this._value;
    }
  
    pad(str) {
      this.prepend(str);
      this.append(str);
    }
}
  
const builder = new StringBuilder('.');
  
builder.append('^');
console.log(builder.value);
  
builder.prepend('^');
console.log(builder.value); 
  
builder.pad('=');
console.log(builder.value);