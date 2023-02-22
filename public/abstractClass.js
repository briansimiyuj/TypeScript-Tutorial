"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class TikTok extends TakePhoto {
}
const simiyu = new TakePhoto('camera', 'photo');
const simiyuBrian = new TikTok('video', 'audio');
