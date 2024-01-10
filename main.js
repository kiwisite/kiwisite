if (!localStorage.getItem('checkbox')){
    localStorage.setItem('checkbox', false)
}

let checkbox = localStorage.getItem('checkbox')

document.onload = doublecheck()

function checkthing(){
    const body = document.getElementById('body')
    const shittingOnHisComputer = document.getElementById('itsshittingonhiscomputer')

    if(shittingOnHisComputer.checked) {
        body.style.backgroundImage = 'url("chomp.png")'
        localStorage.setItem('checkbox', true)
    } else {
        body.style.backgroundImage = 'url("toebitegif.gif")'
        localStorage.setItem('checkbox', false)
    }
}

function doublecheck(){
    {
        if(checkbox){
            document.getElementById("body").style.backgroundImage = 'url("chomp.png")'
            if(document.getElementById('itsshittingonhiscomputer')){
                document.getElementById('itsshittingonhiscomputer').checked = true
            }
        } else {
            document.getElementById("body").style.backgroundImage = 'url("toebitegif.gif")'
        }
    }
}

window.addEventListener('resize', ()=> {
    let browzerZoomLevel = Math.round(window.devicePixelRatio * 100)
    if(browzerZoomLevel !== 100){
        document.getElementById('warning').textContent = "ohhh shit there it goes"
    } else {
        document.getElementById('warning').textContent = "ps if you zoom in or out the checkbox here will break because this website was built like shit"
    }
})