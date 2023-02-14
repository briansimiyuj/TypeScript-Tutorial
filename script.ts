type User = {

   readonly _id: string

   name: string

   email: string

   isActive: boolean

}



let myUser: User = {

   _id: '5c8d0c505653de3985aa0ffd',

   name: 'Martin',

   email: 'martin@gmail.com',

   isActive: false

}

myUser.email = 'peter@gmail.com'

myUser.name = 'Peter'

myUser._id = '5c8d0c505653de3985aa0ffd'
