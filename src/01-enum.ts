
enum ROLES {
ADMIN  = "admin",
SELLER = "seller",
CUSTOMER = "customer",
}

type User = {
    username : string,
    role : ROLES
}
const adminUser : User = {
    username: 'adriansartini',
    role : ROLES.ADMIN
}