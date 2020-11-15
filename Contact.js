class Contact {

    // Constructor
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    //getters
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get address() {
        return this._address;
    }
    get city() {
        return this._city;
    }
    get state() {
        return this._state;
    }
    get zip() {
        return this._zip;
    }
    get phoneNo() {
        return this._phoneNo;
    }
    get email() {
        return this._email;
    }

    //setters
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "FirstName invalid.";
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else throw "LastName invalid.";
    }
    set address(address) {
        let addressRegex = RegExp('[a-zA-Z]{4,}');
        if (addressRegex.test(address))
            this._address = address;
        else throw "Address invalid.";
    }
    set city(city) {
        let cityRegex = RegExp('[a-zA-Z]{4,}');
        if (cityRegex.test(city))
            this._city = city;
        else throw "City invalid.";
    }
    set state(state) {
        let stateRegex = RegExp('[a-zA-Z]{4,}');
        if (stateRegex.test(state))
            this._state = state;
        else throw "State invalid.";
    }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[\\s]*[0-9]{3}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw "Zip invaild.";
    }
    set phoneNo(phoneNo) {
        let phoneRegex = RegExp("[0-9]{1,2}[' '][7-9][0-9]{9}");
        if (phoneRegex.test(phoneNo))
            this._phoneNo = phoneNo;
        else throw "Phone No invalid.";
    }
    set email(email) {
        let emailRegex = RegExp('[a-zA-Z][a-zA-Z0-9_+-]{2,}([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9]+[.][a-zA-Z]{2,}([.][a-zA-Z]{2,})?$');
        if (emailRegex.test(email))
            this._email = email;
        else throw "Email invalid.";
    }

    //method
    toString() {
        return "FirstName : " + this.firstName + ", LastName : " + this.lastName + ", Address : " + this.address + ", City : " + this.city +
            ", State : " + this.state + ", Zip : " + this.zip + ", Phone No : " + this.phoneNo + ", Email : " + this.email;
    }
}
module.exports = { Contact };