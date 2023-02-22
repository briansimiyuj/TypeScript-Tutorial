abstract class TakeVideo{

    constructor(

        public cameraMode: string,

        public filter: string

    ){}


    abstract getSepia(): void 

    getReelTime(): number{

        // calculate reel time

        return 0

    }

}



class Facebook extends TakeVideo{

    constructor(

        public cameraMode: string,
        
        public filter: string,

        public burst: number

    ){

        super(cameraMode, filter)

    }


    getSepia(): void{

        console.log('Sepia')

    }

}



const simiyuBrian = new Facebook('video', 'audio', 5)


simiyuBrian.getReelTime()