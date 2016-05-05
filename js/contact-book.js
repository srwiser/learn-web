var contacts = [];

function Person(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

function add(person){
contacts[contacts.length] = {
    firstName: person.firstName,
    lastName: person.lastName,
    phoneNumber: person.phoneNumber,
    email: person.email
  };
}

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

function search(lastName) {
    var contactsLength = contacts.length;
    for (var i=0; i < contactsLength; i++) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }
}

// To add a person in contact book
// e.g. var bob = new Person("Bob", "Jones", 9383434954, "bob.jones@example.com");
// add(bob);
// To search by lastName a person in contact book
// e.g. search("Jones");
