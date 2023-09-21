function load() {
    const editor: HTMLElement = document.getElementById("editor") as HTMLElement;

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

    function onKeyPress(_e: KeyboardEvent) {
        let text = editor.textContent;
        if(text === null || text === "") return;

        let autocomplete_items = [];

        for(let word of autocomplete) {
            if(word.startsWith(text)) {
                autocomplete_items.push(word)
            }
        }
        console.log(autocomplete_items);
    }

    editor.addEventListener("keyup", onKeyPress);
}

window.onload = load