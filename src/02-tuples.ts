const prices : (string|number)[] = [1,2,3,'str']
prices.push(1);
prices.push("second")

let user: [string ,number, boolean] ;

user = ['bytes', 15, true];

const [ username, age ] = user

console.log(username)
console.log(age)
console.log(user)