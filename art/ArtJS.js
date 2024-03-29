// Changes Color Of The Pixel you clicked on
function changeColor(e) {
  let target = e.target;
  if (target.className == "PixelCell" && target.className != "rower"){
    let newColor = pickColor(target.oldColor)
    target.style.backgroundColor = newColor
    target.oldColor = newColor
    Save()
  }
}
// This Picks The Color of the pixel (desides by a list)
function pickColor(current_color) {
  let colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue", 
    "purple",
    "white",
  ]
  return colors[
    (colors.indexOf(current_color)+1) % colors.length
  ]
}
// Drops A Random Square
function dropSqare(sqare) {
  let top = parseInt(sqare.style.top)
  if(top>window.innerHeight) {
    sqare.remove()
    return
  }
  sqare.style.top = (top + 1) + "px"
  setTimeout(function() {
    dropSqare(sqare)
  },1)
  sqare.className = "sqare"
}
// Reads The Pixels Out Of Storage
function getPixelers() {
  let pixelers = window.localStorage.pixelers
  if (!pixelers) {
  return [[]]
  }
  return JSON.parse(pixelers)
}
// Draws The Grid
function drawGrid() {
  let contaner = document.getElementById("c")
  if (!contaner) {
  contaner = document.createElement("div")
  contaner.id = "c"
  document.body.append(contaner)
  }
  contaner.textContent = ""

  let colors = getPixelers()
  for (let n = 0; n<10; n++){
    let rower = document.createElement("div")

    rower.className = "rower"  
    for (let u = 0; u<10; u++){
      let nthRow = colors[n]
      let color = nthRow ? nthRow[u] : undefined
      let pixeler = document.createElement("div")
      pixeler.className = "PixelCell"
      if (color) {
        pixeler.style.backgroundColor = color
      }
      pixeler.onmouseenter = function() {
        pixeler.oldColor = pixeler.style.backgroundColor
        pixeler.style.backgroundColor = "gray"
      }
      pixeler.onmouseleave = function() {
        pixeler.style.backgroundColor = pixeler.oldColor
      }
      rower.append(pixeler)
    }
    contaner.append(rower)
  }
}
// For Saving Pixels
function Save() {
  let PixelData = []
  let contaner = document.getElementById("c")
  for(let i = 0; i < contaner.childNodes.length; i++) {
    let row = contaner.childNodes[i]
    PixelData.push([])
    for (let j = 0; j < row.childNodes.length; j++) {
      let cell = row.childNodes[j]
      let color = cell.style.backgroundColor
      PixelData[i].push(color || '')
    }
  }
  window.localStorage.pixelers = JSON.stringify(PixelData);
}
// Clears The Grid
function clearFunc() {
  window.localStorage.pixelers = '';
  console.log("Clearing Grid")
  drawGrid()
}
// For The "Load" Button And Other Functions
function load() {
  if(params.get('pixels') !== null) {
    localStorage.setItem('pixelers', Base64.decode(params.get('pixels')))
  }
  let sqare = document.createElement("div")
  let ArtFileBrowserButton = document.createElement("button")
  sqare.style.top = "0px"
  sqare.style.left = window.innerWidth/2 + "px"
  document.body.append(sqare)
  document.body.append(ArtFileBrowserButton)
  ArtFileBrowserButton.textContent = "Menu"
  ArtFileBrowserButton.onclick = goToFileBrowser
  
  dropSqare(sqare)
  drawGrid()

  let copyLink = document.createElement('button')
  let clear = document.createElement('button')
  copyLink.textContent = 'Copy Link';
  clear.textContent = 'Clear grid'
  clear.onclick = clearFunc
  copyLink.onclick = () => {
    navigator.clipboard.writeText(`${window.location.origin + window.location.pathname}?pixels=${Base64.encode(localStorage.getItem('pixelers'))}`);
  }
  document.body.append(clear)
  document.body.append(copyLink)
}

function goToFileBrowser() {
  window.location.replace("canvasBrowser.html")
}

document.documentElement.addEventListener("click",changeColor)
window.onload = load