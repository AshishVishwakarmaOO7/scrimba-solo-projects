const incBtns = document.getElementsByClassName("btn");

for (const btn in incBtns) {
  incBtns[btn].onclick = handleScore;
}

function handleScore() {
  const classList = this.className;

  if (classList.includes("home")) {
    const score = document.getElementById("home-score");
    const incValue = Number(this.innerHTML);

    score.innerHTML = Number(score.innerHTML) + incValue;
  } else {
    const score = document.getElementById("guest-score");
    const incValue = Number(this.innerHTML);

    score.innerHTML = Number(score.innerHTML) + incValue;
  }
}

d = new Date("2022-03-25")
console.log(d);
