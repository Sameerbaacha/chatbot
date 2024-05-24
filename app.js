// Course details with added courses
const courseDetails = {
    flutter: "Flutter ke liye Course Details:",
    web: "Web Development ke liye Course Details:",
    app: "App Development ke liye Course Details:",
    python: "Python Programming ke liye Course Details:",
    graphicDesigning: "Graphic Designing ke liye Course Details:",
    cyberSecurity: "Cyber Security ke liye Course Details:"
};

// Updated function to display course buttons with space between them
function displayCourseButtons() {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p class='bot-response'>Guzarish h  ek course chunen:</p>";

    for (const courseKey in courseDetails) {
        const courseButton = document.createElement('button');
        courseButton.textContent = courseKey.charAt(0).toUpperCase() + courseKey.slice(1); // Capitalize the first letter
        courseButton.classList.add('course-button'); // Add class to button
        courseButton.onclick = function () { askForDetails(courseKey); };
        chatBox.appendChild(courseButton);
    }
}

// Function to handle user input
function handleBotResponse(userInput) {
    const userMessage = userInput.toLowerCase();

    if (userMessage.includes("admission")) {
        displayCourseButtons();
    } else {
        // Handle other bot responses (e.g., greetings)
        // You can add more logic here
        displayBotResponse("Bot: Hello! m apki kesi madad kro? saylani m admission k liye admission type kre?");
    }
}


// Function to ask for user details after selecting a course
function askForDetails(courseKey) {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p class='bot-response'>Please provide your details for ${courseKey}:</p>`;
    chatBox.innerHTML += `<input type='text' id='name' placeholder='Name'>`;
    chatBox.innerHTML += `<input type='text' id='father-name' placeholder="Father's Name">`;
    chatBox.innerHTML += `<input type='text' id='qualification' placeholder='Qualification'>`;
    chatBox.innerHTML += `<input type='number' id='age' placeholder='Age'>`;
    chatBox.innerHTML += `<input type='text' id='gender' placeholder='Gender'>`;
    chatBox.innerHTML += `<input type='text' id='contact' placeholder='Contact Number'>`; // Contact input field added
    chatBox.innerHTML += `<button onclick='submitAdmission("${courseKey}")'>Submit</button>`;
}

// Function to display bot responses
function displayBotResponse(message) {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p class='bot-response'>${message}</p>`;
}


// Function to handle the submission of user details
function submitAdmission(courseKey) {
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('father-name').value;
    const qualification = document.getElementById('qualification').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;
    displayBotResponse(`shukriya apni maloomat  ${courseKey} k admission k dene k liye.`);

    // Show confirmation message
    alert('apka form submit hochuka h!');
}
// Function to send user input and focus on new message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    handleBotResponse(userInput);
    document.getElementById('user-input').value = ''; // Clear input field

    // Focus on the last message (new message)
    const chatBox = document.getElementById('chat-box');
    chatBox.lastElementChild.scrollIntoView({ behavior: 'smooth' }); // Auto-scroll to latest message
}
