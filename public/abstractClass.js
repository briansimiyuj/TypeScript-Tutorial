"use strict";
class TakeVideo {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // calculate reel time
        return 0;
    }
}
class Facebook extends TakeVideo {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const simiyuBrian = new Facebook('video', 'audio', 5);
simiyuBrian.getReelTime();
