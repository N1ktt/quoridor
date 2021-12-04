const btn_create = document.createElement("input")
btn_create.type = "button"
btn_create.value = "Create game"
btn_create.className = "btn_create btn_menu play_menu_btns"

const btn_join = document.createElement("input")
btn_join.type = "button"
btn_join.value = "Join game"
btn_join.className = "btn_join btn_menu play_menu_btns"

function menu_off() {
    //removes main menu
    document
        .querySelector("main")
        .querySelectorAll("input")
        .forEach((element) => {
            element.classList.remove("play_menu_btns")
            element.classList.add("play_reverse_menu_btns")
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
    document.querySelector(".btn_create").addEventListener("click", menu_off)
    document.querySelector("main").append(btn_join)
    document.querySelector(".btn_join").addEventListener("click", menu_off)
}
play_on()
