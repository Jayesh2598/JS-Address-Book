const contactRef = require('./Contact');
const prompt = require('prompt-sync')();

let addressBook = new Array();
let choice = 0;
do {
    choice = prompt("Enter choice : 1. Add new contact 2. Edit contact 3. Delete contact 4. Get Contacts Count "
                    +"5. Search persons in city/state 6. View persons in city/state 7. Print address book 0. Exit ");
    switch (choice) {
        case '1':
            let con = takeDetails();
            if (con != null) {
                if (!duplicateCheck(con)) {
                    addressBook.push(con);
                    console.log("Contact added successfully!");
                }
                else
                    console.log("This contact already exists.");
            }
            break;
        case '2':
            if (addressBook.length == 0)
                console.log("No contacts in address book.");
            else {
                let con = editContact();
                if (con == 1)
                    console.log("Changes applied successfully.");
                else
                    console.log("No such contact available.");
            }
            break;
        case '3':
            if (addressBook.length == 0)
                console.log("No contacts in address book.");
            else {
                let con = deleteContact();
                if (con == 1)
                    console.log("Contact deleted successfully.");
                else
                    console.log("No such contact available.");
            }
            break;
        case '4':
            const findTotal = (total, value) => { return total + 1; }
            let count = addressBook.reduce(findTotal, 0);
            console.log("No. of contacts in address book = " + count);
            break;
        case '5':
            if(addressBook.length > 0) {
                let persons = searchPersons();
                if(persons.length > 0)
                    persons.forEach(contact => console.log(contact.firstName + " " + contact.lastName));
                else
                    console.log("No persons found.")
            }
            else
                console.log("No contacts in addressbook.");
            break;
        case '6':
            if(addressBook.length > 0) {
                let persons = searchPersons();
                if(persons.length > 0)
                    persons.forEach(contact => console.log(contact.toString()));
                else
                    console.log("No persons found.")
            }
            else
                console.log("No contacts in addressbook.");
            break;
        case '7':
            addressBook.forEach(contact => console.log(contact.toString()));
            break;
        case '0':
            console.log("Thanks for using the application.");
            break;
    }

} while (choice != 0);

function takeDetails() {
    let fName = prompt("Enter firstName : ");
    let lName = prompt("Enter lastName : ");
    let address = prompt("Enter address : ");
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

function editContact() {
    let fName = prompt("Enter firstName of contact to edit : ");
    let lName = prompt("Enter lastName of contact to edit : ");
    let contact = addressBook.find((contact) => contact.firstName == fName && contact.lastName == lName);
    if (contact == undefined)
        return 0;
    console.log("Which fields do you want to change?");
    console.log("1.First Name \t2.Last Name \t3.Address \t4.City \n5.State \t6.Zip \t7.Phone number \t8.Email");
    let more = true;
    let changeFieldsArr = new Array();
    do {
        let number = prompt();
        if (number >= 1 && number <= 8)
            changeFieldsArr.push(number);
        let moreProps = prompt("More? (y/n)");
        if (moreProps == 'n')
            more = false;
    }
    while (more == true);
    for (let number = 0; number < changeFieldsArr.length; number++) {
        switch (changeFieldsArr[number]) {
            case '1':
                let newFName = prompt("Enter new First Name : ");
                contact.firstName = newFName;
                break;
            case '2':
                let newLName = prompt("Enter new Last Name : ");
                contact.lastName = newLName;
                break;
            case '3':
                let newAddress = prompt("Enter new Address : ");
                contact.address = newAddress;
                break;
            case '4':
                let newCity = prompt("Enter new City : ");
                contact.city = newCity;
                break;
            case '5':
                let newState = prompt("Enter new State : ");
                contact.state = newState;
                break;
            case '6':
                let newZip = prompt("Enter new Zip :");
                contact.zip = newZip;
                break;
            case '7':
                let newPhno = prompt("Enter new Phone Number : ");
                contact.phoneNo = newPhno;
                break;
            case '8':
                let newEmail = prompt("Enter new Email : ");
                contact.email = email;
                break;
            default:
                console.log("Not a valid number. ");
        }
    }
    return 1;
}

function deleteContact() {
    let fName = prompt("Enter firstName of contact to delete : ");
    let lName = prompt("Enter lastName of contact to delete : ");
    let contact = addressBook.find((contact) => contact.firstName == fName && contact.lastName == lName);
    if (contact == undefined)
        return 0;
    addressBook.splice(addressBook.indexOf(contact), 1);
    return 1;
}

function duplicateCheck(contact) {
    if (addressBook.length == 0)
        return false;
    let sameContact = addressBook.filter((con) => con.firstName == contact.firstName && con.lastName == contact.lastName 
                                                && con.address == contact.address && con.city == contact.city 
                                                && con.state == contact.state && con.zip == contact.zip 
                                                && con.phoneNo == contact.phoneNo && con.email == contact.email);
    if (sameContact.length == 0)
        return false;
    else
        return true;
}

function searchPersons(){
    let persons = [];
    let choice = prompt("Search persons in city or state : 1. City 2. State ");
    switch(choice){
        case '1':
            let city = prompt("Enter city name : ");
            persons = addressBook.filter((contact) => contact.city === city);
            break;
        case '2':
            let state = prompt("Enter state name : ");
            persons = addressBook.filter((contact) => contact.state === state);
            break;
    }
    return persons;
}
