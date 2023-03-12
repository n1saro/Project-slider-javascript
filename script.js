const getElements = [
    {
        rostov:'Rostov-on-Don LCD admiral',
        m:'81 m2',
        month:'3,5 months',
        upon:'Upon request',
        img:'/image/image 2.svg'
    },
    {
        rostov:'Sochi Thieves',
        m:'105 m2',
        month:'4 months',
        upon:'Upon request',
        img:'/image/image 2.1.svg'
    },
    {
        rostov:'Rostov-on-Don Patriotic',
        m:'93 m2',
        month:'3 months',
        upon:'Upon request',
    }
]
const img = document.querySelector('.image')
const getNav1 = document.querySelector('.nav1')
const getNav2 = document.querySelector('.nav2')
const getNav3 = document.querySelector('.nav3')
const getCircele1 = document.querySelector('.circle1')
const getCircele2 = document.querySelector('.circle2')
const getCircele3 = document.querySelector('.circle3')
const vector1 = document.querySelector('.vector1')
const vector2 = document.querySelector('.vector2')

const enity = (index) => {
    img.style.backgroundImage = `url(${getElements[index].img})`
}

let current = 0
getCircele2.addEventListener('click' , () => {
    enity(current - 1);
    current -= 1
})
getCircele3.addEventListener('click', () => {
    enity(current + 1);
    current += 1
})

getNav2.addEventListener('click', () => {
    enity(current - 1);
    current -= 1
})
getNav3.addEventListener('click', () => {
    enity(current + 1);
    current += 1
})

