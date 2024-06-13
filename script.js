let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");

let calculate = () => {
    let tar = Number(document.getElementById("target").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;

    console.log(tar, r, t, duration);

    if (duration === "year") {
        t *= 12;
    }

    let monthlyRate = r / 12 / 100;
    let monthlyInvestment = (tar * monthlyRate) / (Math.pow(1 + monthlyRate, t) - 1);

    result.innerHTML = `<div>Monthly Investment Required: <span>&#8377;${monthlyInvestment.toFixed(2)}</span></div>`;
};


calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);