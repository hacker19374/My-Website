function sendInput() {
  var input = document.getElementById("userInput").value;
  var found = false;
  for (var i = 0; i < text.inputs.length; i++) {
    if (input.toLowerCase() == text.inputs[i]) {
      document.getElementById("chatbotResponse").innerHTML = text.outputs[i];
      found = true;
    }
    else {
      if (found === false) {
      document.getElementById("chatbotResponse").innerHTML = "Sorry, I don't know how to respond to that, please fix your spelling, or type something I can understand.";
      }
    }
  }
}


var text =
{
"inputs":
  [
    "hi",
    "hello",
    "how are you"
  ],
"outputs":
  [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "I'm just a computer program, so I don't have feelings. But I'm here to assist you!"
  ]
};
