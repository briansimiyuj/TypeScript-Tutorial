class User{

    email: string

    name: string

    readonly city: string = ''

    constructor(email: string, name:string){

        this.email = email

        this.name = name

    }

}




const brian = new User('brian@techfybiz.co.ke', 'Brian')