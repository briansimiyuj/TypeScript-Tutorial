abstract class TakePhoto{

    constructor(

        public cameraMode: string,

        public filter: string

    ){}

}



class TikTok extends TakePhoto{

    

}



const simiyu = new TakePhoto('camera', 'photo')

const simiyuBrian = new TikTok('video', 'audio')