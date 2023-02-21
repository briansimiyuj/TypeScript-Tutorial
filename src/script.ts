class User{

    public email: string

    name: string

    private readonly city: string = ''

    constructor(email: string, name:string){

        this.email = email

        this.name = name

    }

}



const brian = new User('brian@techfybiz.co.ke', 'Brian')

brian.email = 'briansimiyuj@gmail.com'