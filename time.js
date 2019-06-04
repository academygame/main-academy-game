var mLoop1= window.setInterval(function() {  oliveGrowth() }, 100)
var mLoop2= window.setInterval(function() {  graduation() }, 100)
var mLoop3= window.setInterval(function() {  passiveKnowledge() }, 100)
var mLoop4= window.setInterval(function() {  techReveal() }, 100)
var mLoop5= window.setInterval(function() {  brickFire() }, 100)
var mLoop7= window.setInterval(function() {  passiveReaders() }, 100)
var mLoop8= window.setInterval(function() {  passiveBotanists() }, 2500)
var mLoop9= window.setInterval(function() {  papyrusPrice() }, 2500)
var mLoop10= window.setInterval(function() {  wallBuilding() }, 2500)
var mLoop11=  window.setInterval(function() {  passiveGeometry() }, gameData.geometryspeed)
var mLoop11=  window.setInterval(function() {  flair() }, 1000)

//Resources: knowledge, land, olives, younggroves, maturegroves, grovegrowth, olivewood, ink, papyrus, students, graduates, gradtime, drachma, readers, botanists, builders, geometers, bricks, wallprogress, theorems.
function updateResources() {
  document.getElementById("Knowledge").innerHTML = gameData.knowledge.toFixed(2) + " Knowledge"
  document.getElementById("Land").innerHTML = gameData.land.toFixed(0) + " Land"
  document.getElementById("Olives").innerHTML = gameData.olives.toFixed(0) + " Olives"
  document.getElementById("Young Groves").innerHTML = gameData.younggroves.toFixed(0) + " Young Groves"
  document.getElementById("Mature Groves").innerHTML = gameData.maturegroves.toFixed(0) + " Mature Groves"
  document.getElementById("Grove Maturity").innerHTML = gameData.grovegrowth.toFixed(0) + " Grove Maturity"
  document.getElementById("Olive Wood").innerHTML = gameData.olivewood.toFixed(2) + " Olive Wood"
  document.getElementById("Ink").innerHTML = gameData.ink.toFixed(2) + " Ink"
  document.getElementById("Papyrus").innerHTML = gameData.papyrus.toFixed(0) + " Papyrus"
  document.getElementById("Students").innerHTML = gameData.students.toFixed(0) + " Students"
  document.getElementById("Graduates").innerHTML = gameData.graduates.toFixed(0) + " Graduates"
  document.getElementById("Drachma").innerHTML = gameData.drachma.toFixed(2) + " Drachma"
  document.getElementById("Readers").innerHTML = gameData.readers.toFixed(0) + " Readers"
  document.getElementById("Botanists").innerHTML = gameData.botanists.toFixed(0) + " Botanist"
  document.getElementById("Builders").innerHTML = gameData.builders.toFixed(0) + " Builders"
  document.getElementById("Geometers").innerHTML = gameData.geometers.toFixed(0) + " Geometers"
  document.getElementById("Bricks").innerHTML = gameData.bricks.toFixed(0) + " Bricks"
  document.getElementById("Wall").innerHTML = "Enclose the Academy: " + gameData.wallprogress.toFixed(0) + "% Complete"
  document.getElementById("Theorems").innerHTML = gameData.theorems.toFixed(0) + " Theorems"
}

//Resources: Knowledge, Theorems, Ascentics
function updateResources2() {
  document.getElementById("Knowledge2").innerHTML = gameData.knowledge.toFixed(2) + " Knowledge"
  document.getElementById("Theorems2").innerHTML = gameData.theorems.toFixed(0) + " Theorems"
}

function updateResourceCaps2() {
  document.getElementById("Ascetics2Cap").innerHTML = gameData.asceticscap + "Ascetics"

}


function passiveKnowledge() {
  gameData.knowledge += gameData.students*gameData.studentrate
  updateResources()
}

function graduation() {
  gameData.enrolledtime += gameData.students
  while (gameData.enrolledtime > gameData.gradtime) {
    gameData.students--
    gameData.graduates++
    gameData.enrolledtime -= gameData.gradtime
    gameData.studentcost = Math.floor(gameData.studentcost*(1/gameData.studentcostgrowth))
    document.getElementById("StudentAdd").innerHTML = "Attract Student: " + gameData.studentcost + " Knowledge"
    }
  updateResources()
}

function oliveGrowth() {
  gameData.grovegrowth += gameData.younggroves*gameData.olivetreespeed
  gameData.olives += gameData.maturegroves*gameData.olivefruitspeed
  while (gameData.grovegrowth > gameData.olivematurity) {
    gameData.younggroves -= 1
    gameData.maturegroves += 1
    gameData.grovegrowth -= gameData.olivematurity
  }
  updateResources()
}

function onOven() {
  if (gameData.olivewood >= 1) {
    if (gameData.brickcrafting == 0) {
      gameData.brickcrafting++
      gameData.olivewood--
      document.getElementById("BrickOven").innerHTML = "Cease Firing Bricks"
    }
    else {
      gameData.brickcrafting--
      document.getElementById("BrickOven").innerHTML = "Fire Bricks"
    }
  }
  updateResources()
}

function brickFire() {
  if (gameData.olivewood >= gameData.brickfuelrate) {
    if (gameData.brickcrafting == 1) {
      gameData.olivewood -= gameData.brickfuelrate
      gameData.bricks += gameData.brickcraftrate
    }
  }
  updateResources()
}

function passiveReaders() {
  if (gameData.olives >= gameData.readers*gameData.readerfood & gameData.drachma >= 0) {
    gameData.olives -= gameData.readers*gameData.readerfood
    gameData.drachma += gameData.readers*gameData.readerpayoff
  }
  updateResources()
}

function passiveBotanists() {
  if (gameData.botanists > 0) {
    if (gameData.olives >= gameData.botanists*gameData.botanistfood) {
      gameData.olives -= gameData.botanists*gameData.botanistfood
      if (gameData.land > 0) {
        plantOlive()
      }
      else if (gameData.maturegroves > 0) {
        chopGrove()
      }
    }
  }
  updateResources()
}

function papyrusPrice() {
  gameData.papyruscost = (gameData.papyruscost-60)*gameData.papyruspersistence + 60
  document.getElementById("BuyPapyrus").innerHTML = "Buy Papyrus: " + gameData.papyruscost.toFixed(2) + " Drachma"
  updateResources()
}

function wallBuilding() {
  if (gameData.builders > 0 & gameData.buildwallflag ==1 & gameData.wallprogress < 100) {
    gameData.wallprogress += Math.min(gameData.builders, gameData.bricks)
    gameData.wallprogress = Math.min(gameData.wallprogress, 100)
    gameData.bricks -= Math.min(gameData.builders, gameData.bricks)
    gameData.olives -= gameData.wallcostolives*gameData.builders
    gameData.knowledge -= gameData.wallcostknowledge*gameData.builders
    if (gameData.wallprogress == 100) {
      document.getElementById("Advance1").style = "visibility:visible"
    }
  }
  updateResources()
}

function passiveGeometry() {
  if (gameData.geometers > 0 & gameData.knowledge >= gameData.geometryknowledgecost*gameData.geometers & gameData.drachma >= gameData.geometrydrachmacost*gameData.geometers) {
    gameData.knowledge -= gameData.geometryknowledgecost*gameData.geometers
    gameData.drachma -= gameData.geometrydrachmacost*gameData.geometers
    if (gameData.knowledge >= gameData.theoremcost & gameData.ink >= gameData.theoremink & gameData.papyrus >= 1) {
      addTheorem()
    }
    else if (gameData.papyrus == 0 & gameData.drachma >= gameData.papyruscost) {
      addPapyrus()
    }
    else if (gameData.ink < gameData.theoremink) {
      addInk()
    }
  }
  updateResources()
}
