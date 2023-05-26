let users = [
  { name: "User1", lastName: "Ipsum1", age: 18, isActive: true },
  { name: "User2", lastName: "Ipsum2", age: 19, isActive: false },
  { name: "User3", lastName: "Ipsum3", age: 21, isActive: true },
  { name: "User4", lastName: "Ipsum4", age: 22, isActive: false },
  { name: "User5", lastName: "Ipsum5", age: 30, isActive: true },
];

let active = 0;

for (let i = 0; i < users.length; i++) {
  users[i].isActive ? active++ : null;
}
console.log(active);
