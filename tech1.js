//Technology stuff
var techData = {
  planttech: 50,
  basiccontemplate: 25,
  basicstudents: 75,
  basiclecture: 100,
  basicreaders: 200,
  basicbricks: 200,
  protractors: 300,
  ink: 400,
  readers2: 500,
}

var techlabels = {
  planting: "Basic Arborculture: " + techData.planttech + " Knowledge<"

}

function techBasicContemplation() {
  if (gameData.knowledge >= techData.basiccontemplate) {
    gameData.knowledge -= techData.basiccontemplate
    gameData.knowledgePerClick += 0.75
    document.getElementById("Basic Contemplation").style = "display:none"
    document.getElementById("Basic Lecturing").style = "visibility:visible"
    document.getElementById("Basic Students").style = "visibility:visible"
    updateResources()
  }
}

function techPlanting() {
  if (gameData.knowledge >= techData.planttech) {
    gameData.knowledge -= techData.planttech
    document.getElementById("Grove Actions").style = "visibility:visible"
    document.getElementById("Young Groves").style = "visibility:visible"
    document.getElementById("Mature Groves").style = "visibility:visible"
    document.getElementById("Olive Wood").style = "visibility:visible"
    document.getElementById("Planting Technology").style = "display:none"
    updateResources()
  }
}

function techBasicStudents() {
  if (gameData.knowledge >= techData.basicstudents) {
    gameData.knowledge -= techData.basicstudents
    document.getElementById("Basic Students").style = "display:none"
    gameData.studentrate += 0.05
    document.getElementById("Basic Lecturing").style = "visibility:visible"
    updateResources()
  }
}

function techBasicLecture() {
  if (gameData.knowledge >= techData.basiclecture) {
    gameData.knowledge -= techData.basiclecture
    document.getElementById("Basic Lecturing").style = "display:none"
    gameData.lecturepayoff += 1
    document.getElementById("Basic Readers").style = "visibility:visible"
    updateResources()
  }
}

function techBasicReaders() {
  if (gameData.knowledge >= techData.basicreaders) {
    gameData.knowledge -= techData.basiclecture
    document.getElementById("Basic Readers").style = "display:none"
    document.getElementById("Readers2").style = "visibility:visible"
    updateResources()
  }
}

function techReaders2() {
  if (gameData.knowledge >= techData.readers2) {
    gameData.knowledge -= techData.basiclecture
    document.getElementById("Readers2").style = "display:none"
    gameData.readerpayoff = gameData.readerpayoff*0.3
    updateResources()
  }
}

function techBasicBricks() {
  if (gameData.knowledge >= techData.basicbricks) {
    gameData.knowledge -= techData.basicbricks
    document.getElementById("Brick Firing").style = "display:none"
    document.getElementById("Brick Crafting").style = "visibility:visible"
    document.getElementById("Bricks").style = "visibility:visible"
    updateResources()
  }
}

function techProtractors() {
  if (gameData.knowledge >= techData.protractors) {
    gameData.knowledge -= techData.protractors
    document.getElementById("Protractors").style = "display:none"
    gameData.geometeryspeed = gameData.geometryspeed*0.8
    updateResources()
  }
}

function techInk() {
  if (gameData.knowledge >= techData.ink) {
    gameData.knowledge -= techData.ink
    document.getElementById("Ink Tech").style = "display:none"
    document.getElementById("Make Ink").style = "visibility:visible"
    updateResources()
  }
}

var techFlags = {
  plantflag: 0,
  botanyflag: 0,
  walltoggle: 0,
  bricksflag: 0,
}

function techReveal() {
  if (gameData.olives > 20 && techFlags.plantflag == 0) {
    document.getElementById("Planting Technology").style = "visibility:visible"
    techFlags.plantflag = 1
  }
  if (gameData.olivewood > 10 & techFlags.botanyflag ==0) {
    document.getElementById("BotanistAdd").style = "visibility:visible"
    document.getElementById("Botanists").style = "visibility:visible"
    techFlags.botanyflag = 1
  }
  if (gameData.bricks > 5 & techFlags.wallflag ==0) {
    document.getElementById("BotanistAdd").style = "visibility:visible"
    techFlags.walltoggle = 1
  }
  if (gameData.olivewood>1 & techFlags.bricksflag ==0) {
      document.getElementById("Brick Firing").style = "visibility:visible"
      techFlags.bricksflag =1
  }
}
