let body = document.body
console.log(body);
let points = document.querySelector('.skills-mySkills .points')
let poin = document.querySelectorAll('.skill-mySkills div')

body.onscroll = function (params) {
    if (body.scrollTop >= 1550) {
        console.log(body.scrollTop);
        points.style.transform = 'rotate(360deg)'
        for (let i = 0; i < poin.length; i++) {
            poin[i].style.transform = 'rotate(0deg)'
        }
    }
}