$(function () {

    gsap.registerPlugin(ScrollTrigger);
    let doms = ['#rd-section-4-1', '#rd-section-6', '#rd-section-7', '#rd-section-8', '#rd-section-9', '#rd-section-10', '#rd-section-11', '#rd-section-12']

    doms.forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top top+=20%",
            markers:false,
            onEnter: function () {
                $(e).addClass('do')
            }
        });
    })
    ScrollTrigger.create({
        trigger: '#rd-section-2',
        start: "top top+=50%",
        markers:false,
        onEnter: function () {
            $('#rd-section-2').addClass('do')
        }
    });

    ScrollTrigger.create({
        trigger: '#rd-section-video-2',
        start: "top top+=50%",
        markers:false,
        onEnter: function () {
            $('#rd-video-2')[0].play()
        }
    });
    ScrollTrigger.create({
        trigger: '#rd-section-14',
        start: "top top+=50%",
        markers:false,
        onEnter: function () {
            $('#rd-section-14').addClass('do')
        }
    });
})
