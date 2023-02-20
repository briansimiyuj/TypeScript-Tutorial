class User{

    email: string

    name: string

    private readonly city: string = ''

    constructor(email: string, name:string){

        this.email = email

        this.name = name

        this.city = 'Nairobi'

    }

}




const brian = new User('brian@techfybiz.co.ke', 'Brian')

brian.city = 'Mombasa'