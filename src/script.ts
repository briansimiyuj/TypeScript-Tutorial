class User{

    protected _courseCount = 1

    readonly city: string = 'Nairobi'

    constructor(
        
        public email: string,
        
        public name: string,

        private userID: number
        
    ){}


    
    
    private deleteToken(token: string){

        console.log('Token deleted')

    }



    get getAppleEmail(): string{

        return `apple${this.email}`

    }



    get getCourseCount(): number{

        return this._courseCount

    }



    set getCourseCount(courseNumber){

        if(courseNumber <= 1){

            throw new Error('Course number must be greater than 1')

        }

        this._courseCount = courseNumber

    }

}





class SubUser extends User{

    isFamily: boolean = true


    changeCourseCount(){

        this._courseCount = 4

    }

}


const brian = new User('brian@techfybiz.co.ke', 'Brian', 1234765)

brian.email = 'briansimiyuj@gmail.com'