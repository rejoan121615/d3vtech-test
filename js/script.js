// loading animation

const loadingTl = gsap.timeline();

const loadingPathSelect =
    "#loading #path__1,#loading #path__2,#loading #path__3,#loading #path__4 path";

loadingTl
    .from(loadingPathSelect, {
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        delay: 0.8,
        y: "20px",
    })
    .fromTo(
        loadingPathSelect,
        {
            y: "0px",
        },
        {
            y: "25",
            stagger: 0.25,
            yoyo: true,
            repeat: -1,
        }
    )
    .to("#loading svg", {
        y: "-100%",
        opacity: 0,
        onComplete: function () {
            gsap.to("#loading svg", {
                display: "none",
            });
        },
    })
    .to("#loading", {
        height: "0",
      duration: 1.2,
        background: 'white'
    });


