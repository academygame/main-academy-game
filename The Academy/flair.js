var flairs = {
  tip1: 'The roots of education are bitter, but the fruit is sweet.',
  tip2: "The life of money-making is one undertaken under compulsion, and wealth is evidently not the good we are seeking; for it is merely useful and for the sake of something else.",
  tip3: "The greater the difficulty, the more the glory in surmounting it.",
  tip4: "In Plato's Academy, before the temple of the Muses was written: `Let none but geometers enter here.''",
  tipflag1: 0,
  tipflag2: 0,
  tipflag3: 0,
  tipflag4: 0,
}

function flair() {
  if (flairs.tipflag1 == 1 & flairs.tipflag2 ==0) {
    document.getElementById("Current Tip").innerHTML = flairs.tip1
  }
  if (flairs.tipflag2 == 1 & flairs.tipflag3 ==0) {
    document.getElementById("Current Tip").innerHTML = flairs.tip2
  }
  if (flairs.tipflag3 == 1 & flairs.tipflag4 ==0) {
    document.getElementById("Current Tip").innerHTML = flairs.tip4
  }
  if (flairs.tipflag4 == 1) {
    document.getElementById("Current Tip").innerHTML = flairs.tip4
  }

}
