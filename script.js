const fortunes=[
"Protein acquired. Confidence +10 💪",
"Today is your lucky snack day 🌟",
"Another ALIO pack is calling your name 😄",
"Gym PR incoming! 🚀",
"You are officially spicy today 🌶"
];
const challenges=[
"Finish the pack without drinking water.",
"Share this snack with one friend.",
"Tag ALIO in your snack photo.",
"Do 10 squats before the next bite."
];
function fortune(){
output.innerHTML=fortunes[Math.floor(Math.random()*fortunes.length)];
}
function challenge(){
output.innerHTML=challenges[Math.floor(Math.random()*challenges.length)];
}
function hiddenBean(){
output.innerHTML="🎉 Hidden Bean Found! You're now a Certified Bean Hunter (demo).";
}
