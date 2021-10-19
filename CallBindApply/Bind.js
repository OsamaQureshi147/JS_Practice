var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

let inviteEmployee1 = invite.bind(employee1);
let inviteEmployee2 = invite.bind(employee2);

inviteEmployee1("Hello", "How are you");
inviteEmployee2("Hello", "What are you doing");
