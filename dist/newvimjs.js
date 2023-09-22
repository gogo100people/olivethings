"use strict";
function load() {
    const editor = document.getElementById("editor");
    const autocomplete = [
        "github",
        "sure",
        "mhmm",
        "poop",
        "yeah",
        "achoo",
        "gross",
        "giggles",
        "figma",
        'blue',
        'green',
        "yellow",
        "red"
    ];
    function onKeyPress(_e) {
        document.getElementById("wrapper")?.remove();
        let text = editor.textContent;
        if (text === null || text === "")
            return;
        let autocomplete_items = [];
        for (let word of autocomplete) {
            if (word.startsWith(text)) {
                autocomplete_items.push(word);
            }
        }
        if (autocomplete_items.length != 0) {
            let wrapper = document.createElement("div");
            wrapper.id = "wrapper";
            for (let item of autocomplete_items) {
                let output_div = document.createElement("div");
                output_div.textContent = item;
                wrapper.append(output_div);
            }
            document.body.append(wrapper);
        }
    }
    editor.addEventListener("keyup", onKeyPress);
}
window.onload = load;
