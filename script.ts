type User = {

   name: string

   id: number   

}


type Admin = {

   userName: string

   id: number   

}


let brian: User | Admin = {

   name: 'Simiyu',

   id: 3232

}


brian = {

   userName: 'SimiyuBrian',

   id: 650396

}