interface User{

    readonly DBID: number

    email: string

    userID: number

    googleID?: string

    // startTrial: () => string       /* long way */

    startTrial(): string
    

}


const brian: User = {

    email: 'brian@techfybiz.co.ke',

    userID: 64267,
    
    DBID: 7533 ,

    startTrial: () =>{

        return 'Trial started'

    }

}


