// Animate header
const header = document.querySelector('header');
header.style.opacity = 0;

window.addEventListener('load', () => {
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
    header.style.transition = 'opacity 1s, transform 1s';
});

// Animate skills section
const skills = document.querySelector('#skills');
const skillItems = skills.querySelectorAll('li');

window.addEventListener('scroll', () => {
    const skillsPosition = skills.offsetTop - window.innerHeight;
    if (window.scrollY > skillsPosition) {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
                item.style.transition = 'opacity 0.5s, transform 0.5s';
            }, 300 * index);
        });
    }
});

// Animate experience section
const experience = document.querySelector('#experience');
const experienceItems = experience.querySelectorAll('li');

window.addEventListener('scroll', () => {
    const experiencePosition = experience.offsetTop - window.innerHeight;
    if (window.scrollY > experiencePosition) {
        experienceItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
                item.style.transition = 'opacity 0.5s, transform 0.5s';
            }, 300 * index);
        });
    }
});