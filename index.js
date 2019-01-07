const readPermissions = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 5;
myPermission = myPermission | writePermission

let message = (myPermission & readPermissions) ?  'iya': 'tidak';
console.log(message);