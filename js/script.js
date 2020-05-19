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
    document.getElementById("colorResult").style.backgroundColor = 'rgb(' + redSelector.value + ',' + greenSelector.value + ',' + blueSelector.value + ')'
}

function showValueGreen() {
    let greenSelector = document.querySelector('#greenSelector')
    document.getElementById("valueGreen").value = greenSelector.value
    document.getElementById("colorResult").style.backgroundColor = 'rgb(' + redSelector.value + ',' + greenSelector.value + ',' + blueSelector.value + ')'

}

function showValueBlue() {
    let blueSelector = document.querySelector('#blueSelector')
    document.getElementById("valueBlue").value = blueSelector.value
    document.getElementById("colorResult").style.backgroundColor = 'rgb(' + redSelector.value + ',' + greenSelector.value + ',' + blueSelector.value + ')'

}

function showColorResult() {
    document.getElementById("colorResult").style.backgroundColor = 'rgb(' + redSelector.value + ',' + greenSelector.value + ',' + blueSelector.value + ')'
}

