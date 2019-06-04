var gameData = {
  studying: 4,
  theorembonus: 1,

  ascetics: 0,
  asceticscap: 1,

}

function addKnowledge2() {
  gameData.knowledge += gameData.knowledgePerClick*gameData.studying*gameData.theorembonus
  updateResources2()
}
