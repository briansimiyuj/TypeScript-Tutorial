class User{

    readonly city: string = ''

    constructor(
        
        public email: string,
        
        public name: string,

        private userID: number
        
    ){

       

    }

}



const brian = new User('brian@techfybiz.co.ke', 'Brian', 1234765)

brian.email = 'briansimiyuj@gmail.com'