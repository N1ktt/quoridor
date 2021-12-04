const btn_rules = document.querySelector("header").querySelector("input")
function pop_up() {
    btn_rules.removeEventListener("click", pop_up)

    btn_rules.value = "Close Rules"
    const div = document.createElement("div")
    div.classList.add("pop-up")
    function pop_up_close() {
        btn_rules.value = "Rules"
        btn_rules.removeEventListener("click", pop_up_close)
        btn_rules.addEventListener("click", pop_up)
        document.querySelector(".pop-up").remove()
    }
    btn_rules.addEventListener("click", pop_up_close)
    div.addEventListener("click", pop_up_close)
    document.querySelector("main").append(div)
}
btn_rules.addEventListener("click", pop_up)
