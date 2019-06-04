var gameData = {
  era: 1,
  knowledge: 0,
  knowledgePerClick: 1000,

  olives: 0,
  olivemax: 4,
  younggroves: 0,
  maturegroves: 0,
  grovegrowth: 0,
  olivetreespeed: 0.5,
  olivefruitspeed: 1,
  olivematurity: 200,
  choppayoff: 3,
  olivewood: 0,

  land: 3,
  landcost: 100,
  landmultiplier: 1.25,

  students: 0,
  studentsPerClick: 1,
  studentcost: 20,
  studentcostgrowth: 1.2,
  studentrate: 0.1,
  enrolledtime: 0,
  graduates: 0,
  gradtime: 1000,

  drachma: 0,
  readers: 0,
  lecturepayoff: 2,
  readercost: 50,
  readercostgrowth: 1.2,
  readerfood: 1,
  readerpayoff: 1,

  bricks: 0,
  brickcrafting: 0,
  brickfuelrate: 0.2,
  brickcraftrate: 1,

  botanists: 0,
  botanistcost: 100,
  botanistfood: 2,

  olivetax: 0,
  drachmatax: 0,

  ink: 0,
  olivewoodforink: 1,
  olivesforink: 10,

  papyrus: 0,
  papyruscost: 60,
  papyruscostgrowth: 1.5,
  papyruspersistence: 0.9,

  builders: 0,
  buildercost: 100,
  wallprogress: 0,
  wallcostknowledge: 1,
  wallcostolives: 1,
  buildwallflag: 0,

  geometers:0,
  geometercost: 100,
  geometryspeed: 5000,
  geometryknowledgecost: 1,
  geometrydrachmacost: 1,
  geometercostgrowth: 1.6,

  theorems: 0,
  theoremcost: 1000,
  theoremcostgrowth: 1.1,
  theoremink: 3,
}

//Here are all the buttons
function addKnowledge() {
  gameData.knowledge += gameData.knowledgePerClick
  if (gameData.knowledge >= 10) {
    document.getElementById("Attract Student").style = "visibility:visible"
    document.getElementById("Students").style = "visibility:visible"
  }
  updateResources()
}

function addOlive() {
  gameData.olives += Math.floor(Math.random()*gameData.olivemax +1)
  updateResources()
}

function plantOlive() {
  if (gameData.land >= 1 & gameData.olives >= 50) {
    gameData.olives -= 50
    gameData.land -= 1
    gameData.younggroves += 1
    document.getElementById("CurrentTip").innerHTML = flairs.tip1
    updateResources()
  }
}

function addStudent() {
  if (gameData.knowledge >= gameData.studentcost) {
    gameData.students += gameData.studentsPerClick
    gameData.knowledge -= gameData.studentcost
    gameData.studentcost = Math.floor(gameData.studentcost*gameData.studentcostgrowth)
    document.getElementById("StudentAdd").innerHTML = "Attract Student: " + gameData.studentcost + " Knowledge"
    updateResources()
  }
  if (gameData.students >= 2) {
    document.getElementById("Lecture").style = "visibility:visible"
  }
  flairs.tipflag1 = 1
}

function addLecture() {
  gameData.drachma += Math.floor(Math.random()*Math.log(gameData.students+1)*gameData.lecturepayoff +1)
  document.getElementById("Drachma").style = "visibility:visible"
  document.getElementById("Readers").style = "visibility:visible"
  document.getElementById("ReaderAdd").style = "visibility:visible"
  updateResources()
}

function chopGrove() {
  if (gameData.maturegroves >= 1) {
    gameData.olivewood += gameData.choppayoff
    gameData.maturegroves--
    gameData.land++
    updateResources()
    document.getElementById("Bricks").style = "visibility:visible"
    flairs.tipflag3 = 1
  }
}

function addLand() {
  if (gameData.drachma >= gameData.landcost) {
    gameData.drachma -= gameData.landcost
    gameData.landcost = Math.floor(gameData.landcost**gameData.landmultiplier)
    document.getElementById("LandAdd").innerHTML = "Purchase Land: " + gameData.landcost + " Drachma"
    gameData.land++
    updateResources()
  }
  flairs.tipflag2 = 1
}

function addReader() {
  if (gameData.drachma >= gameData.readercost & gameData.knowledge >= gameData.readercost) {
    gameData.readers++
    gameData.drachma -= gameData.readercost
    gameData.knowledge -= gameData.readercost
    gameData.readercost = gameData.readercost*gameData.readercostgrowth
    document.getElementById("ReaderAdd").innerHTML = "Hire Reader: " + gameData.readercost.toFixed(2) + " Drachma, " + gameData.readercost.toFixed(2) + " Knowledge"
    updateResources()
  }
}

function addBotanist() {
  if (gameData.drachma >= gameData.botanistcost) {
    gameData.botanists++
    gameData.drachma -= gameData.botanistcost
    document.getElementById("BotanistAdd").style = "display:none"
    document.getElementById("Ink Tech").style = "visibility:visible"
    document.getElementById("Ink").style = "visibility:visible"
    updateResources()
  }
}

function addInk() {
  if (gameData.olives >= gameData.olivesforink & gameData.olivewood >= gameData.olivewoodforink) {
    gameData.olives -= gameData.olivesforink
    gameData.olivewood -= gameData.olivewoodforink
    gameData.ink++
    document.getElementById("BuyPapyrus").style = "visibility:visible"
    document.getElementById("Papyrus").style = "visibility:visible"
    updateResources()
  }
}

function addPapyrus() {
  if (gameData.drachma >= gameData.papyruscost) {
    gameData.drachma -= gameData.papyruscost
    gameData.papyruscost = gameData.papyruscost*gameData.papyruscostgrowth
    document.getElementById("BuyPapyrus").innerHTML = "Buy Papyrus: " + gameData.papyruscost.toFixed(2) + " Drachma"
    gameData.papyrus++
    document.getElementById("TheoremAdd").style = "visibility:visible"
    document.getElementById("Theorems").style = "visibility:visible"
    updateResources()
  }
}

function addBuilder() {
  if (gameData.drachma >= gameData.buildercost) {
    gameData.builders++
    gameData.drachma -= gameData.buildercost
    document.getElementById("Builders").style = "visibility:visible"
    document.getElementById("Wall").style = "visibility:visible"
    document.getElementById("WallToggle").style = "visibility:visible"
    updateResources()
  }
}

function addTheorem() {
  if (gameData.knowledge >= gameData.theoremcost & gameData.papyrus >= 1 & gameData.ink >= gameData.theoremink) {
    gameData.knowledge -= gameData.theoremcostgrowth
    gameData.theorems++
    gameData.papyrus--
    gameData.ink -= gameData.theoremink
    gameData.theoremcost = gameData.theoremcostgrowth*gameData.theoremcost
    document.getElementById("TheoremAdd").innerHTML = "Prove Theorem: " + gameData.theoremcost.toFixed(2) + " Knowledge, 3 Ink, 1 Papyrus"
    document.getElementById("GeometerAdd").style = "visibility:visible"
    document.getElementById("Geometers").style = "visibility:visible"
    updateResources()
    flairs.tipflag4 = 1
  }
}

function buildWall() {
  if (gameData.buildwallflag == 0) {
    gameData.buildwallflag++
    document.getElementById("BuildWallFlag").innerHTML = "Yes Building Wall"
  }
  else if (gameData.buildwallflag == 1) {
    gameData.buildwallflag--
    document.getElementById("BuildWallFlag").innerHTML = "Not Building Wall"
  }
}

function addGeometer() {
  if (gameData.knowledge >= gameData.geometercost*5 & gameData.drachma >= gameData.geometercost) {
    gameData.geometers++
    gameData.knowledge -= gameData.geometercost*5
    gameData.drachma -= gameData.geometercost
    gameData.geometryspeed = gameData.geometryspeed*0.9
    gameData.geometercost = gameData.geometercost*gameData.geometercostgrowth
    document.getElementById("GeometerAdd").innerHTML = "Hire Geometer: " + gameData.geometercost*5 + " Knowledge, " + gameData.geometercost + " Drachma"}
    document.getElementById("Protractors").style = "visibility:visible"
    updateResources()
}
