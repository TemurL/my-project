const h1 = document.querySelector('h1');

const colorChenge = (elem) => {
    setInterval(() => {
        elem.style.color = 'red';
        setTimeout(() => {
            elem.style.color = 'black'
        }, 1000)
    }, 2000)
}

colorChenge(h1)