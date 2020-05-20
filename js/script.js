window.addEventListener('load', start)


function start() {
    showColorResult()
    showValueRed()
    showValueGreen()
    showValueBlue()
}

function showValueRed() {
    let redSelector = document.querySelector('#redSelector')
    document.getElementById("valueRed").value = redSelector.value
    showColorResult()
}

function showValueGreen() {
    let greenSelector = document.querySelector('#greenSelector')
    document.getElementById("valueGreen").value = greenSelector.value
    showColorResult()
}

function showValueBlue() {
    let blueSelector = document.querySelector('#blueSelector')
    document.getElementById("valueBlue").value = blueSelector.value
    showColorResult()
}

function showColorResult() {
    document.getElementById("colorResult").style.backgroundColor = `rgb(${redSelector.value}, ${greenSelector.value}, ${blueSelector.value})`
}


