const btn_create = document.createElement("input")
btn_create.type = "button"
btn_create.value = "Create game"
btn_create.className = "btn-create btn-menu play-menu-btns"

const btn_join = document.createElement("input")
btn_join.type = "button"
btn_join.value = "Join game"
btn_join.className = "btn-join btn-menu play-menu-btns"

function menu_off() {
    //removes main menu
    document
        .querySelector("main")
        .querySelectorAll("input")
        .forEach((element) => {
            element.classList.remove("play-menu-btns")
            element.classList.add("play-reverse-menu-btns")
        })

    setTimeout(function () {
        document
            .querySelector("main")
            .querySelectorAll("input")
            .forEach((element) => {
                element.remove()
            })
    }, 1500)
}

function play_on() {
    document.querySelector("main").append(btn_create)
    document.querySelector(".btn-create").addEventListener("click", create_game)
    document.querySelector("main").append(btn_join)
    document.querySelector(".btn-join").addEventListener("click", join_game)
}

function create_game() {
    menu_off()
    setTimeout(function () {
        //makes new main
        document.querySelector("main").remove()
        const main = document.createElement("main")
        //makes h2 crate game
        const h2 = document.createElement("h2")
        h2.innerText = "Create game"
        main.append(h2)
        //makes p number of players
        const p1 = document.createElement("p")
        p1.innerText = "Number of players:"
        main.append(p1)
        //makes section 1
        const section = document.createElement("section")
        main.append(section)
        //makes h3"2"
        const h3 = document.createElement("h3")
        h3.innerText = "2"
        main.querySelector("section").append(h3)
        //makes radio for 2
        const label = document.createElement("label")
        const radio = document.createElement("input")
        radio.type = "radio"
        radio.name = "player-number"
        radio.checked = true
        label.append(h3)
        label.append(radio)
        const span = document.createElement("span")
        label.append(span)

        main.querySelector("section").append(label)
        //makes section 2
        const section2 = document.createElement("section")
        main.append(section2)
        //makes h3 "4"
        const h33 = document.createElement("h3")
        h33.innerText = "4"
        //makes radio for 4
        const label2 = document.createElement("label")
        const radio2 = document.createElement("input")
        radio2.type = "radio"
        radio2.name = "player-number"
        label2.append(h33)
        label2.append(radio2)
        const span2 = document.createElement("span")
        label2.append(span2)
        main.querySelectorAll("section")[1].append(label2)
        //makes p name
        const p4 = document.createElement("p")
        p4.innerText = "Game name:"
        main.append(p4)
        //makes input for game name
        const input1 = document.createElement("input")
        input1.type = "text"
        input1.name = "game-name"
        main.append(input1)
        //makes p password
        const p5 = document.createElement("p")
        p5.innerText = "Game password (if left empty it will be 123):"
        main.append(p5)
        //makes input for password
        const input2 = document.createElement("input")
        input2.type = "text"
        input2.name = "game-password"
        main.append(input2)
        //makes p checkbox
        const p6 = document.createElement("p")
        p6.innerText = "Password ON"
        main.append(p6)
        //makes checkbox in section
        const section3 = document.createElement("section")
        main.append(section3)
        const label3 = document.createElement("label")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = true
        checkbox.name = "password-on"
        label3.append(checkbox)
        const span3 = document.createElement("span")
        label3.append(span3)
        main.querySelectorAll("section")[2].append(label3)
        //makes button create
        const input3 = document.createElement("input")
        input3.type = "button"
        input3.value = "Create"
        input3.addEventListener("click", () => {
            waiting(true)
        })
        main.append(input3)
        //adds main to page
        main.classList.add("create-game")
        document.querySelector("body").insertBefore(main, document.querySelector("script"))
        //adds opening animation
        const all = document.querySelectorAll(".create-game > *")
        all.forEach((element) => {
            element.classList.add("page-open")
        })
    }, 1500)
}
function refresh_list() {}
function join_game() {
    menu_off()
    setTimeout(() => {
        //makes new main
        document.querySelector("main").remove()
        const main = document.createElement("main")
        main.classList.add("join-game")
        //creates h2
        const h2 = document.createElement("h2")
        h2.innerText = "Join game"
        main.append(h2)
        //makes p name
        const p1 = document.createElement("p")
        p1.innerText = "Name"
        main.append(p1)
        //makes p password
        const p2 = document.createElement("p")
        p2.innerText = "Password"
        main.append(p2)
        //makes p number of players
        const p3 = document.createElement("p")
        p3.innerText = "Number of players"
        main.append(p3)
        //makes refresh button
        const input1 = document.createElement("input")
        input1.type = "button"
        input1.value = "Refresh"
        //makes blank ul to be deleted in refresh function
        const ul = document.createElement("ul")
        ul.innerHTML = `<li>
        <h3>Name</h3>
        <input type="text" placeholder="Password" />
        <h3>#/#</h3>
    </li><li>
    <h3>Name</h3>
    <input type="text" placeholder="Password" />
    <h3>#/#</h3>
</li><li>
<h3>Name</h3>
<input type="text" placeholder="Password" />
<h3>#/#</h3>
</li>`
        main.append(ul)
        refresh_list()
        document.querySelector("body").append(main)
        //adds opening animation
        const all = document.querySelectorAll(".join-game > *")
        all.forEach((element) => {
            element.classList.add("page-open")
        })
    }, 1500)
}
function waiting(host) {
    //adds closeing animation
    if (host) {
        let all = document.querySelectorAll(".create-game > *")
        all.forEach((element) => {
            element.classList.remove("page-open")
            element.classList.add("page-close")
        })
    } else {
        let all = document.querySelectorAll(".join-game > *")
        all.forEach((element) => {
            element.classList.remove("page-open")
            element.classList.add("page-close")
        })
    }

    setTimeout(() => {
        //makes new main
        document.querySelector("main").remove()
        const main = document.createElement("main")
        main.classList.add("waiting")
        //creates h2
        const h2 = document.createElement("h2")
        if (host) {
            h2.innerText = "Hosting"
        } else {
            h2.innerText = "Waiting for Host"
        }
        main.append(h2)
        //makes 2 p for game name
        const p1 = document.createElement("p")
        p1.innerText = "Game name:"
        main.append(p1)
        const p2 = document.createElement("p")
        p2.innerText = "can't get game name"
        main.append(p2)
        //makes 2 p for game password
        const p3 = document.createElement("p")
        p3.innerText = "Password:"
        main.append(p3)
        const p4 = document.createElement("p")
        p4.innerText = "can't get game password"
        main.append(p4)
        //makes p and input for nickname
        const p5 = document.createElement("p")
        p5.innerText = "Your Nickname:"
        main.append(p5)
        const input = document.createElement("input")
        input.placeholder = "Nickname"
        input.type = "text"
        main.append(input)
        //makes 5 p for players' names
        const p6 = document.createElement("p")
        p6.innerText = "Players"
        main.append(p6)
        const p7 = document.createElement("p")
        p7.innerText = "1. Host:"
        main.append(p7)
        const p8 = document.createElement("p")
        p8.innerText = "2. Player:"
        main.append(p8)
        const p9 = document.createElement("p")
        p9.innerText = "3. Player:"
        main.append(p9)
        const p10 = document.createElement("p")
        p10.innerText = "4. Player:"
        main.append(p10)
        //makes input for start button
        if (host) {
            const input2 = document.createElement("input")
            input2.value = "Start"
            input2.type = "button"
            input2.addEventListener("click", startGame)
            main.append(input2)
        } else {
            const p11 = document.createElement("p")
            p11.innerText = "Waiting for Host..."
            main.append(p11)
        }
        //adds main to body
        document.querySelector("body").insertBefore(main, document.querySelector("script"))
        //adds opening animation
        const all = document.querySelectorAll(".waiting > *")
        all.forEach((element) => {
            element.classList.add("page-open2")
        })
    }, 500)
}
function setBoardSize() {
    let main = {
        instance: document.querySelector("main"),
        //sets the factor to the lower value
        factor: function () {
            if (this.instance.offsetHeight > this.instance.offsetWidth) {
                return this.instance.offsetWidth
            } else {
                return this.instance.offsetHeight
            }
        },
    }
    board = main.instance.querySelector("section")
    board.style.height = main.factor() - 20 + "px"
    board.style.width = main.factor() - 20 + "px"
}
window.addEventListener("resize", () => {
    if (document.querySelector(".playing") != null) {
        setBoardSize()
    }
})
function generateBoard() {
    board = document.querySelector(".playing section")
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 17; j++) {
            if (j % 2 == 0) {
                if ((j % 4 == 0 && i % 2 == 0) || (j % 4 == 2 && i % 2 == 1)) {
                    let div = document.createElement("div")
                    div.classList.add("white")
                    board.append(div)
                } else {
                    let div = document.createElement("div")
                    div.classList.add("black")
                    board.append(div)
                }
            } else {
                let div = document.createElement("div")
                div.classList.add("plank-spot")
                div.classList.add("unclicked")
                div.addEventListener("click", () => {
                    div.classList.add("clicked")
                    div.classList.remove("unclicked")
                    div.classList.add("plank")
                    div.classList.remove("plank-spot")
                })
                board.append(div)
            }
        }
        if (i != 8) {
            for (j = 0; j < 17; j++) {
                let div = document.createElement("div")
                if (j % 2 == 0) {
                    div.classList.add("plank-spot")
                    div.classList.add("unclicked")
                    div.addEventListener("click", () => {
                        div.classList.add("clicked")
                        div.classList.remove("unclicked")
                        div.classList.add("plank")
                        div.classList.remove("plank-spot")
                    })
                } else {
                    div.classList.add("intersection")
                    div.classList.add("unclicked")
                }
                board.append(div)
            }
        }
    }
}
function startGame() {
    //adds closing animation
    let all = document.querySelectorAll(".waiting > *")
    all.forEach((element) => {
        element.classList.remove("page-open2")
        element.classList.add("page-close2")
    })
    setTimeout(() => {
        //creates number of planks display in header and time counter
        const ul = document.createElement("ul")
        let players = ["", "jfa", "dfa", "Xx_NiszczycielBananów_xX", "EE"]
        for (i = 0; i < 5; i++) {
            const li = document.createElement("li")
            if (i == 0) {
                li.innerText = "Planks:"
            } else {
                li.innerText = `${players[i]}: 10`
            }
            ul.append(li)
        }
        const li = document.createElement("li")
        const img = document.createElement("img")
        img.src = "img/timer.png"
        li.append(img)
        const textNode = document.createTextNode(" 30")
        li.append(textNode)
        ul.append(li)
        // ul.append(li2)
        document.querySelector("header").append(ul)
        //create new main with board, then generates it
        document.querySelector("main").remove()
        const main = document.createElement("main")
        main.classList.add("playing")
        const section = document.createElement("section")
        for (i = 0; i < 4; i++) {
            const div = document.createElement("div")
            div.classList.add("board-border")
            section.append(div)
        }
        main.append(section)
        document.querySelector("body").append(main)
        generateBoard()
        setBoardSize()
        //adds opening animation
        let all = document.querySelectorAll(".playing > *")
        all.forEach((element) => {
            element.classList.add("page-open")
        })
        all = querySelector("header ol")
        all.classList.add("page-open")
    }, 500)
}
play_on()

//some code that probably wont be used anymore, but im not deleting it for some reason

// function set_join_padding() {
//     const ulHeight = document.querySelector(".join-game").querySelector("ul").offsetHeight
//     let children = document.querySelector(".join-game").querySelector("ul").children
//     let childHeight = (children.length - 1) * 90
//     let divHeight = (childHeight - ulHeight) / 2
//     console.log(divHeight)
//     document.querySelector("main").querySelector("div").style.height = divHeight
// }
// window.addEventListener("resize", () => {
//     if (document.querySelector(".join-game") != null) {
//         set_join_padding()
//     }
// })
