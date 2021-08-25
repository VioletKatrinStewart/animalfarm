// import functions
const catImage=document.getElementById('cat-image');
const catAudio=document.getElementById('cat');
const catSpan=document.getElementById('cat-clicks');
const dogSpan=document.getElementById('dog-clicks');
const horseSpan=document.getElementById('horse-clicks');
const dogImage=document.getElementById('dog-image');
const dogAudio=document.getElementById('dog');

const horseImage=document.getElementById('horse-image');
const horseAudio=document.getElementById('horse');

let catClicks = 0; 
let dogClicks = 0;
let horseClicks = 0;

catImage.addEventListener('click', () => {
  
    catAudio.play();
    catClicks ++
    catSpan.textContent = 'You pet the cat ' + catClicks + ' times';
});

dogImage.addEventListener('click', () => {

    dogAudio.play();
    dogClicks ++ 
    dogSpan.textContent = 'You pet the dog ' + dogClicks + ' times';
});

horseImage.addEventListener('click', () => {
    
    horseAudio.play();
    horseClicks ++ 
    horseSpan.textContent = 'You pet the horse ' + horseClicks + ' times';
});





// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
