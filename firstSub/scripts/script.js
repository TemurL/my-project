const h1 = document.querySelector('h1');
const p = document.querySelector('p')
const btn = document.querySelector('button')
const colorChenge = (elem) => {
    elem.style.transition = '.3s'
    setInterval(() => {
        elem.style.color = 'red';
        setTimeout(() => {
            elem.style.color = 'black'
        }, 1000);
        setTimeout(() => {
            elem.style.color = 'blue'
        }, 2000);
    
    }, 3000)
}
colorChenge(p)
colorChenge(h1)
colorChenge(btn)