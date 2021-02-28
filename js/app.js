(function() {
    let socials = document.querySelectorAll('.social div')
    socials.forEach(function(social, index) {
        social.style.animation = `movein .5s cubic-bezier(0.51, 0.92, 0.24, 1.8) forwards ${index/7+.3}s`
    })
    let rocketpieces = document.querySelectorAll('.rocket-body span')
    let rocket = document.querySelector('.rocket')
    let triggerStar = window.innerHeight / 5;
    let rocketOffsetTop = rocket.offsetTop;
    let thirdOffsetTop = rocketpieces[2].offsetTop;
    document.addEventListener('scroll', (e) => {
        if (window.scrollY > (rocketOffsetTop - triggerStar)) {
            rocketpieces[0].classList.add('active');
            rocketpieces[1].classList.add('active');
        } else {
            rocketpieces[0].classList.remove('active');
            rocketpieces[1].classList.remove('active');

        }
        if (window.scrollY > (thirdOffsetTop - triggerStar)) {
            rocketpieces[2].classList.add('active');

        } else {
            rocketpieces[2].classList.remove('active');

        }
    })
}())