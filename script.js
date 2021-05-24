function updateCounter() {
    fetch('https://api.countapi.xyz/update/gs7vik/youtube/?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()



counterElement = document.getElementsByClassName('count')[0];