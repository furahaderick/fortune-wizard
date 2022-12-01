let fortunes = [
   "You will meet someone new today",
   "You will go to someplace soon",
   "You will eat a new dish today",
];

let loading = [
   "gazing into the mysteries of the universe...",
   "looking into your future...",
]

let fortunebox = document.getElementById("fortune");

function getFortune() {
   let index = Math.floor(Math.random() * (fortunes.length));
   let loadIndex = Math.floor(Math.random() * (loading.length));
   let load = loading[loadIndex];
   let fortune = fortunes[index];

   fortunebox.innerHTML = load;

   function change() {
      fortunebox.innerHTML = fortune; 
   }
    setTimeout(change, 2000);
}
