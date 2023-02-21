class User{

    readonly city: string = 'Nairobi'

    constructor(
        
        public email: string,
        
        public name: string,

        private userID: number
        
    ){}



    get getAppleEmail(): string{

        return `apple${this.email}`

    }

}



const brian = new User('brian@techfybiz.co.ke', 'Brian', 1234765)

brian.email = 'briansimiyuj@gmail.com'