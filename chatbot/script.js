function sendInput() {
  // Get the user's input
  var userInput = document.getElementById("userInput").value;
  // Clear the user's input
  document.getElementById("userInput").value = "";
  // Send the user's input to the chatbot and get the response
  var chatbotResponse = getChatbotResponse(userInput);
  // Display the chatbot's response
  document.getElementById("chatbotResponse").innerHTML = chatbotResponse;
}
function getChatbotResponse(input) {
  input = input.toLowerCase();
  fetch("chatbot-responses.json")
    .then(response => response.json())
    .then(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].input == input) {
          return data[i].output;
        }
      }
      return "I'm sorry, I didn't understand your input. Could you please rephrase that?";
    });
}


