function sendInput() {
  // Get the user's input
  var userInput = document.getElementById("userInput").value;
  // Clear the user's input
  document.getElementById("userInput").value = "";
  // Send the user's input to the chatbot and get the response
  getChatbotResponse(userInput).then(response => {
    // Display the chatbot's response
    document.getElementById("chatbotResponse").innerHTML = response;
  });
}

var Data = {};
function getChatbotResponse(Input) {
  iNput = Input.toLowerCase();
  fetch("chatbot-responses.json")
  .then(response => response.json())
  .then(data => {
    console.log(data); // log the data to the console
    Data = data;
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].input == iNput) {
        return Data[i].output;
      }
    }
    return "I'm sorry, I didn't understand your input. Could you please rephrase that?";
  });

}
