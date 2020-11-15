const contactRef = require('./Contact');
const prompt = require('prompt-sync')();

let addressBook = new Array();
let choice = 0;
do {
    choice = prompt("Enter choice : 1. Add new contact 0. Exit ");
    switch (choice) {
        case '1':
            let con = takeDetails();
            if (con != null) {
                addressBook.push(con);
                console.log("Contact added successfully!");
            }
            break;
        case '0':
            console.log("Thanks for using the application.");
            break;
    }

} while (choice != 0);

function takeDetails() {
    let fName = prompt("Enter firstName : ");
    let lName = prompt("Enter lastName : ");
    let address = prompt("Enter address :");
    let city = prompt("Enter city : ");
    let state = prompt("Enter state : ");
    let zip = prompt("Enter zip : ");
    let phoneNo = prompt("Enter phone no: ");
    let email = prompt("Enter email : ");
    let contact = null;
    try {
        contact = new contactRef.Contact(fName, lName, address, city, state, zip, phoneNo, email);
    }
    catch (e) {
        console.error(e);
    }
    return contact;
}