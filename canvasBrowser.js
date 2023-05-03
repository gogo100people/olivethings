function GetCanvases() {
    let ReturnVal = JSON.parse(localStorage.canvases || "[]")
    return ReturnVal
}
function createArtCanvas() {
    let blankGrid = createPixelGridForNewCanvas()
    let canvases = GetCanvases()
    canvases.push(blankGrid)
    localStorage.canvases = JSON.stringify(canvases)
    ReadAndShowCanvases()
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
    ReadAndShowCanvases()
}
function ReadAndShowCanvases() {
    let contaner = document.getElementById("CanvasContaner")
    if (!contaner) {
        contaner = document.createElement("div")
    }
    contaner.id = "CanvasContaner"
    contaner.textContent = ""
    document.body.append(contaner)
    let canvases = GetCanvases()
    for (i = 0; i<canvases.length; i++) {
        let CanvasName = "Untitled" + i
        let CanvasShow = document.createElement("div")
        CanvasShow.textContent = CanvasName
        contaner.append(CanvasShow)
    }
}
window.onload = onLoad