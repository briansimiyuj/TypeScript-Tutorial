interface User{

    readonly DBID: number

    email: string

    userID: number

    googleID?: string

    startTrial(): string

    getCoupon(couponName: string, discount: number): number

}



interface User{

    githubToken: string

}



interface Admin extends User{    

    role: 'admin' | 'learner' | 'ta'

}


const brian: Admin = {

    email: 'brian@techfybiz.co.ke',

    userID: 64267,
    
    DBID: 7533,

    startTrial: () =>{

        return 'Trial started'

    },


    getCoupon: (name: 'Brian',  off: 60) =>{

        return 456

    },


    githubToken: 'jhgvcn',

    role: 'admin'

    

}


