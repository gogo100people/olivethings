function createArtCanvas() {
    let blankGrid = createPixelGridForNewCanvas()
    let canvases = JSON.parse(localStorage.canvases || "[]")
    canvases.push(blankGrid)
    localStorage.canvases = JSON.stringify(canvases)
}
function createPixelGridForNewCanvas() {
    let rows = [
        
    ]
    for (let i = 0; i<10; i++) {
        let row = []
        for (let j = 0; j<10; j++) {
            row.push("white")
        }
        rows.push(row)
    }
    return rows
}
function onLoad() {
    let createButton = document.createElement("Button")
    createButton.textContent = "Create"
    document.body.append(createButton)
    createButton.onclick = createArtCanvas
}
window.onload = onLoad