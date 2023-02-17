interface User{

    readonly DBID: number

    email: string

    userID: number

    googleID?: string

    startTrial(): string

    getCoupon(couponName: string, discount: number): number

}


const brian: User = {

    email: 'brian@techfybiz.co.ke',

    userID: 64267,
    
    DBID: 7533 ,

    startTrial: () =>{

        return 'Trial started'

    },


    getCoupon: (name: 'Brian',  off: 60) =>{

        return 456

    }
    

}


