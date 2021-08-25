// import functions
const catImage=document.getElementById('cat-image');
const catAudio=document.getElementById('cat');

const dogImage=document.getElementById('dog-image');
const dogAudio=document.getElementById('dog');

const horseImage=document.getElementById('horse-image');
const horseAudio=document.getElementById('horse');

catImage.addEventListener('click', () => {
  
    catAudio.play();

});

dogImage.addEventListener('click', () => {

    dogAudio.play();
});

horseImage.addEventListener('click', () => {
    
    horseAudio.play();
});



// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
