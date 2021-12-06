const btn_rules = document.querySelector("header").querySelector("input")
function pop_up() {
    function addText(div, text) {
        const p = document.createElement("p")
        p.innerText = text
        div.append(p)
    }
    btn_rules.removeEventListener("click", pop_up)

    btn_rules.value = "Close Rules"
    const div = document.createElement("div")
    div.classList.add("pop-up")
    div.append(document.createElement("span"))
    div.append(document.createElement("span"))
    const h2 = document.createElement("h2")
    h2.innerText = "Rules"
    div.append(h2)
    // addText(div,"Rules")
    function pop_up_close() {
        btn_rules.value = "Rules"
        btn_rules.removeEventListener("click", pop_up_close)
        btn_rules.addEventListener("click", pop_up)
        document.querySelector(".pop-up").classList.add("pop-up-close")
        setTimeout(function () {
            document.querySelector(".pop-up").remove()
        }, 1000)
    }
    btn_rules.addEventListener("click", pop_up_close)
    div.addEventListener("click", pop_up_close)
    document.querySelector("body").append(div)
}
btn_rules.addEventListener("click", pop_up)
