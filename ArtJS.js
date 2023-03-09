  // Changes Color Of The Pixel you clicked on
  function changeColor(e) {
    let target = e.target;
    if (target.nodeName == "DIV" && target.className != "rower"){
      let newColor = pickColor(target.oldColor)
      target.style.backgroundColor = newColor
      target.oldColor = newColor
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
        let rows = colors[n]
        let color = rows ? rows[u] : undefined
        let pixeler = document.createElement("div")
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
  // For The "Load" Button And Other Functions
  function load() {
    let sqare = document.createElement("div")
    sqare.style.top = "0px"
    sqare.style.left = window.innerWidth/2 + "px"
    document.body.append(sqare)
    dropSqare(sqare)
    drawGrid()
    
    let load = document.createElement("button")
    load.onclick= function() {
     drawGrid()
    }
    document.body.append(load)
    load.append("load")
      let save = document.createElement("button")
     save.onclick= function() {
      window.localStorage.pixelers = JSON.stringify([
        [
         "red",
         "yellow",
        ],
        [
         "red",
         "blue",
        ]
      ]
       )
    }
    document.body.append(save)
    save.append("save")
  }

  document.documentElement.addEventListener("click",changeColor)
  window.onload = load