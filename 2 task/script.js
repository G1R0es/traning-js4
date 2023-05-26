let usersName = ["Alex", "John", "", "David", "Samuel"];

for (let i = 0; i < usersName.length; i++) {
  if (!usersName[i]) break;
  console.log(usersName[i]);
}

for (let i = 0; i < usersName.length; i++) {
  if (!usersName[i]) continue;
  console.log(usersName[i]);
}
