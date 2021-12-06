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
    document.querySelector(".btn-join").addEventListener("click", menu_off)
}
function create_game(){
    menu_off()
    const main = document.querySelector('main')
    const p = document.createElement('p')
    p.innerText="Number of players:"
    main.append(p)
    const fieldset = document.createElement("fieldset")
    const div = document.createElement('div')
    fieldset.append(div)
    const checkbox = document.createElement('input')
    // checkbox.type="checkbox"
    // checkbox.name="player-number"
    // checkbox.checked=true
    p.innerText="2"
    fieldset.querySelector('div').append(p)
    fieldset.querySelector('div').append(checkbox)
    main.append(fieldset)
}
play_on()
