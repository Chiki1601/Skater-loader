"use strict";
class App {
    constructor() {
        this.select = e => document.querySelector(e);
        this.selectAll = e => document.querySelectorAll(e);
        this.mainTl = gsap.timeline().timeScale(1.2);
        this.skater = this.select('#skater');
        this.skaterContainer = this.select('#skaterContainer');
        const tl = gsap.timeline({ paused: true });
        const timeTl = gsap.timeline();
        CustomEase.create("soft", "M0,0 C0.302,0 0.436,0.35 0.498,0.502 0.564,0.664 0.702,1 1,1");
        this.mainTl.add(timeTl);
        gsap.set([this.skater, this.skaterContainer], {
            transformOrigin: '50% 50%'
        });
        tl.to(this.skater, {
            duration: 2,
            motionPath: {
                path: '#uPath',
                autoRotate: 180,
                offsetX: -67,
                offsetY: -175,
                start: 0,
                end: 1
            },
            ease: 'linear'
        })
            .set(this.skater, {
            scaleX: -1
        }, 1);
        timeTl.to(tl, {
            duration: 2,
            time: tl.duration(),
            ease: 'soft',
            repeat: -1,
            yoyo: true
        })
            .to('.tube', {
            duration: 1,
            x: '-=1000',
            repeat: -1,
            repeatDelay: 1,
            stagger: {
                each: 0
            },
            ease: 'power1.inOut'
        }, 1.5);
        gsap.set(this.skater, {
            transformOrigin: '50% 100%'
        });
    }
}
gsap.set('svg', {
    visibility: 'visible'
});
var app = new App();
gsap.globalTimeline.timeScale(1.52);