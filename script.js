const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button){
    button.addEventListener("click",function (e){
        //console.log(e)
        //console.log(e.target)
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
            //body.style.backgroundColor = "grey" you can also write like this
        }

        if(e.target.id === "red"){
            body.style.backgroundColor = "red"

            //body.style.backgroundColor = "whitesmoke" you can also write like this
        }

        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
            //body.style.backgroundColor = "blue" you can also write like this
        }

        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
            //body.style.backgroundColor = "yellow" you can also write like this
        }

        if(e.target.id === "orange"){
            body.style.backgroundColor = e.target.id
            //body.style.backgroundColor = "orange" you can also write like this
        }

    })
})