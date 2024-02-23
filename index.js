if (localStorage.getItem("theme") == false) {
    theme = night
}


function getBackground() {
    fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${localStorage.getItem("theme")}`)
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })}

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }

document.getElementById("dropbtn").addEventListener("click", function(){
    document.getElementById("btns").classList.toggle("show")
    console.log("ive been clicked")
})

document.getElementById("japan").addEventListener("click", function(){
    localStorage.setItem("theme", "japan")
    getBackground()
    })

document.getElementById("night").addEventListener("click", function(){
    localStorage.setItem("theme", "night")
    getBackground()
    })

document.getElementById("nature").addEventListener("click", function(){
    localStorage.setItem("theme", "nature")
    getBackground()
    })    

document.getElementById("space").addEventListener("click", function(){
    localStorage.setItem("theme", "space")
    getBackground()
    })

document.getElementById("zen").addEventListener("click", function(){
    localStorage.setItem("theme", "zen")
    getBackground()
    })

 document.getElementById("enter").addEventListener("click", function(){
    let inputText = document.getElementById("input-text").value
    console.log(inputText)
    localStorage.setItem("theme", inputText)
    getBackground()
    })


    getBackground()
    setInterval(getCurrentTime, 1000)

