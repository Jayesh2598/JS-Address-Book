class Contact {

    // Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    //method
    toString(){
        return "FirstName : " + this.firstName + ", LastName : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + 
                    ", State : " + this.state + ", Zip : " + this.zip + ", Phone No : " + this.phoneNo + ", Email : " + this.email;
    }
}

let contact = new Contact("Frank", "Underwood", "White House", "Washington", "Columbia District", 400800, "9999888871", "frank@gmail.com");
console.log(contact.toString());