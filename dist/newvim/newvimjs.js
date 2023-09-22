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
    function keyUp(_e) {
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
    function onFocus(_e) {
        editor.focus();
        window.getSelection()?.setBaseAndExtent(anchornode, anchoroffset, focusnode, focusoffset);
    }
    let anchornode;
    let anchoroffset;
    let focusnode;
    let focusoffset;
    editor.addEventListener("keyup", keyUp);
    document.getElementById("last")?.addEventListener("focus", onFocus);
    document.getElementById("first")?.addEventListener("focus", onFocus);
    document.addEventListener("selectionchange", (_e) => {
        let selection = window.getSelection();
        if (!selection) {
            return;
        }
        if (!selection.anchorNode) {
            return;
        }
        if (!selection.focusNode) {
            return;
        }
        anchornode = selection.anchorNode;
        anchoroffset = selection.anchorOffset;
        focusnode = selection.focusNode;
        focusoffset = selection.focusOffset;
    });
}
window.onload = load;
