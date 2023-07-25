// Start of Lesson 4.2 the DOM 

const today = new Date();
const thisYear = today.getFullYear();
const copyrightSymbol = "\u00A9";

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
    copyright.innerHTML = 'Tiffany ' + copyrightSymbol + ' ' + thisYear; 
    footer.appendChild(copyright)

// include skills in this section
var skills = ['IBM Tools', 'JCL', 'Microsoft Suite', 'Eztrieve', 'Geometry', 'Algebra', 'Pre-Calculus', 'Group Travel', 'Insurance Agent'];

var skillsSection = document.getElementById('skills');
console.log(skillsSection);

var skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
// 4.3 Form Basics
//*******************************************************************************************
// create messages
// *******************************************************************************************
// show the information from the form
//--------------------------------------------------------------------------------------------
const messageForm = document.getElementsByName("leave_message");
console.log(messageForm[0], "Show the data from the form ");

messageForm[0].addEventListener("submit", function(event){
    event.preventDefault();

const theMesssageForm = event.target;

var name = event.target.name.value;
var email = event.target.email.value;
var message = event.target.message.value;

console.log("Display your name: ", name);
console.log("Display Email: ", email);
console.log("Display text here: ", message);

// Clear the form using the reset() method 
document.getElementById("form").reset(); 

var messageSection = document.getElementById("messages");
var messageList = messageSection.querySelector("ul");
var newMessage = document.createElement("li");    

//adding messages to the list
messageList.appendChild(newMessage);

    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span>${message}</span>
    `;
//------------------- REMOVE BUTTON ----------------------------------------
const removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerHTML = "REMOVE";

// this button will remove the message that was posted
removeButton.addEventListener("click", function(event){
event.preventDefault();
let entry = removeButton.parentNode;
entry.remove();
})

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

// this will reset the form
event.target.reset();
});