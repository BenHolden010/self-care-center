
// variables that target DOM elements
var receiveMessageButton = document.querySelector('.receive-message-button')
var userMessage = document.querySelector('#display-message-box')
var clearOraButton = document.querySelector('.clearOra')

var affirmations= ['I forgive myself and set myself free.',
    'I believe I can be all that I want to be.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.',
    'I am worthy of my dreams.',
    'I am enough.',
    'I deserve to be healthy and feel good.',
    'I am full of energy and vitality and my mind is calm and peaceful.',
    'Every day I am getting healthier and stronger.',
    'I honor my body by trusting the signals that it sends me.',
    'I manifest perfect health by making smart choices.',]
var mantras = ['Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don\'t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.',
    'In the beginning it is you, in the middle it is you and in the end it is you.',
    'I love myself.',
    'I am present now.',
    'Inhale the future, exhale the past.',
    'This too shall pass.',
    'Yesterday is not today.',
    'The only constant is change.',
    'Onward and upward.',
    'I am the sky, the rest is weather.']

// eventListeners
receiveMessageButton.addEventListener('click', receiveMessage)
clearOraButton.addEventListener('click', clearOra)

// functions
function receiveMessage(){
    if (document.getElementById('affirmation').checked){
   userMessage.innerText = affirmations[getRandomIndex(affirmations)]
   } else if (document.getElementById('mantra').checked) {
    userMessage.innerText = mantras[getRandomIndex(mantras)]
   } else 
   return
}

function getRandomIndex(array){
    return Math.floor(Math.random() * array.length);
}

function clearOra(){
if (document.getElementById('affirmation').checked
 || document.getElementById('mantra').checked){
     location.reload()
 }
}