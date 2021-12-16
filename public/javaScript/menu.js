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
        let main = document.querySelector("main")
        main.remove()
        main = document.createElement("main")
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
        input3.addEventListener('click', () => {
            document.querySelector('.create-game').remove()
            document.querySelector("body").insertBefore(document.createElement('main'), document.querySelector("script"))
        })
        main.append(input3)
        //adds main to page
        main.classList.add("create-game")
        document.querySelector("body").insertBefore(main, document.querySelector("script"))
    }, 1500)
}

function join_game() {
    menu_off()
    setTimeout(() => {
        document.querySelector('main').remove()
        const main = document.createElement('main')
        set_join_padding()
    }, 1500);
}

//play_on()

function set_join_padding() {
    const ulHeight = document.querySelector('.join-game').querySelector('ul').offsetHeight
    let children = document.querySelector('.join-game').querySelector('ul').children
    let childHeight = (children.length - 1) * 90
    let divHeight = (childHeight - ulHeight) / 2
    console.log(divHeight)
    document.querySelector('main').querySelector('div').style.height = divHeight

}
window.addEventListener("resize", () => {
    if (document.querySelector('.join-game') != null) {
        set_join_padding()
    }
})