class User{

    private _courseCount = 1

    readonly city: string = 'Nairobi'

    constructor(
        
        public email: string,
        
        public name: string,

        private userID: number
        
    ){}



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



const brian = new User('brian@techfybiz.co.ke', 'Brian', 1234765)

brian.email = 'briansimiyuj@gmail.com'