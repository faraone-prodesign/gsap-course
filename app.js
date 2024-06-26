const easing = 'power3.inOut'
const duration = 1.5

//HERO--ANIMATION
const navContainer = document.querySelector('.nav-container')
console.log(navContainer.offsetWidth)

const servicesItem = document.querySelectorAll('.hero-services_wrapper>.items-wrapper>h5')
console.log(servicesItem)

let getHeroSectionAnimation = gsap.timeline({
    delay: .1,
});

getHeroSectionAnimation
.fromTo('.logo-link',
    { x:() => navContainer.offsetWidth, xPercent:-100, width:'37rem'},
    { x:0, xPercent:0, duration:duration, ease:easing, width:'6.25rem'}, .5)
.from('.header-line', {scaleX:0, transformOrigin:"right center", duration:duration, ease:easing}, 1.2)
.from('.menu-burger', {autoAlpha: 1}, 1.2)

.from('.hero-services_wrapper>.items-wrapper>h5', {autoAlpha:0, yPercent:15, stagger:.1, duration:duration, ease:easing,}, 1)
.from('#heroTextRow', {yPercent:15, autoAlpha:0, duration:duration, ease:easing,}, 1.5)
.fromTo('.full-img',
    {width:'0%', duration:duration, ease:easing},
    {width:'100%', duration:duration, ease:easing}, 1.7
)
.from('.vertical-line', {height:'0%', duration:duration, ease:easing}, 1.7)

//SERVICES--ANIMATION
const sectionServices = document.querySelector('.section.s-services')
const sectionServicesTags = sectionServices.querySelectorAll('.services-item')

gsap.from(sectionServicesTags, {
    scrollTrigger: {
        trigger:sectionServices,
    },
    autoAlpha:0,
		xPercent: -100,
    ease:easing,
    duration:duration,
    stagger: .3
})


let sectionServicesAnimation = gsap.timeline({
    scrollTrigger: {
        trigger:sectionServices,
        pin:true,
        scrub:true,
        start:'top top',
        end:'+=300%'
    }
})

sectionServicesAnimation
.to('.digital', {y: '35rem'})
.to('.tech', {y: '21rem'})

//ABOUT--ANIMATION
const sectionAbout = document.querySelector('.section.s-about')
const textSectionAbout = sectionAbout.querySelector('h4')
const pointSectionAbout = sectionAbout.querySelectorAll('.content-item')
const aboutImgContainer = sectionAbout.querySelector('#aboutImgContainer')

let sectionAboutAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionAbout
    }
});

sectionAboutAnimation
.from(textSectionAbout, {y:'7rem', autoAlpha:0, duration:duration, ease:easing}, "<")
.from(pointSectionAbout, {autoAlpha:0, y:'2rem', stagger:.3, duration:duration, ease:easing}, "<")

let aboutImgAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: aboutImgContainer
    }
});

aboutImgAnimation.from('.about-img', {autoAlpha:0, y:'5rem', stagger: .3})

//APPROACH--ANIMATION
gsap.set('.dropdown-content', { autoAlpha: 0, height: 0 });

const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(item => {
    let dropdownContent = item.querySelector('.dropdown-content');
    let numberActiveColor = item.querySelector('h4');

    let dropdownAnimation = gsap.timeline({ paused: true });

    dropdownAnimation
        .to(dropdownContent, {
            height: 'auto', duration: 0.6, ease: easing, autoAlpha: 1
        })
        .to(numberActiveColor, { 
						y: '1rem',
            color: "#87da55",
            duration: .2
        });

    dropdownAnimation.reverse();

    item.addEventListener('click', () => {
        dropdownAnimation.reversed(!dropdownAnimation.reversed());
    });
});

dropdown.forEach((dropdownItem, dropdownIndex) => {
    const headingDropdownNumber = dropdownItem.querySelectorAll('h4');
    headingDropdownNumber.forEach((headingItem) => {
        const formatNumberDropdown = dropdownIndex < 9 ? `0${dropdownIndex + 1}` : `${dropdownIndex + 1}`;
        headingItem.textContent = formatNumberDropdown;
    });
});

//PROJECTS--ANIMATION
const sectionProject = document.querySelector('.section.s-projects');
const projectContainer = sectionProject.querySelector('.project-container');
const projectItem = sectionProject.querySelectorAll('.project-item');

let horizontalScroll = gsap.to(projectContainer, {
    x: () => window.innerWidth - projectContainer.scrollWidth,
    scrollTrigger: {
        trigger: sectionProject,
        pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + (projectContainer.scrollWidth - window.innerWidth),
        //markers: true
    },
});

let projectItemAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionProject,
        stagger: .5
    }
});

projectItemAnimation
.fromTo(projectItem, {xPercent: -10, autoAlpha:0}, {xPercent: 0, autoAlpha:1, duration:duration, ease:easing}, .3)

//AWARDS--ANIMATION
const awardsItem = document.querySelectorAll('.awards-item');

let sectionAwards = gsap.timeline({
    scrollTrigger: {
        trigger:'.section.s-awards',
    		start: "bottom bottom", 
    		pin: true, 
    		pinSpacing: false 
    }
})

awardsItem.forEach(item => {
    const awardsImg = item.querySelector('.awards-img');
    let awardsImgAnimation = gsap.from(awardsImg, {
        autoAlpha: 0,
        scaleX: 0.2,
        ease: "power1.out",
        duration: 0.5,
        paused: true
    });

    item.addEventListener('mouseenter', () => {
        console.log('сработал hover in');
        awardsImgAnimation.play();
    });

    item.addEventListener('mouseleave', () => {
        console.log('сработал hover out');
        awardsImgAnimation.reverse();
    });
});

//FOOTER-ANIMATION
const sectionFooter = document.querySelector('.section.s-footer')

const getFooterAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: sectionFooter,
    }
})

getFooterAnimation
.from(sectionFooter, {scale: 0.5, ease:easing})
.from('.footer-head__links', {stagger:.3, autoAlpha:0, y:'-3rem', duration:duration, ease:easing}, 1)

const getFooterContentAnimation = gsap.timeline({
    scrollTrigger: {
        trigger:'.footer-content'
    }
})

getFooterContentAnimation
.from('.footer-content', {autoAlpha:0, ease:easing, duration:duration, y:'-3rem'})
.from('.footer-links', {autoAlpha:0, ease:easing, duration:duration, y:'-3rem'})

//MENU-ANIMATION
const getMenuAnimation = gsap.timeline({
    paused: true
});

getMenuAnimation

.set('.menu-modal', {display: 'block', yPercent:-100})
.from('.menu-modal', {yPercent:-100, duration:.5, ease:"expo.in"})
.fromTo('.link-size-xxl', {autoAlpha:0, y:'-5rem'}, {autoAlpha:1, y:'0rem', stagger:0.3, duration:.5, ease:"expo.in"})
.from('.text-style-menu', {autoAlpha:0, duration:.5, ease:"expo.in"},.5);

const menuBurger = document.querySelector('.menu-burger');

menuBurger.addEventListener('click', () => {
    if (getMenuAnimation.reversed()) {
        // Если анимация была возвращена в исходное состояние, запускаем её
        getMenuAnimation.play();
    } else {
        // Если анимация была проиграна, возвращаем её в исходное состояние 
        getMenuAnimation.reverse();
    }
});