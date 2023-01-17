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
        if ((input.charAt(0) / 1) == isNaN) {
        document.getElementById("chatbotResponse").innerHTML = "Sorry, I don't know how to respond to that, please fix your spelling, or type something I can understand.";
        }
      
      else {
        equation();
      }
      }
    }
  }
}


const form = document.getElementById('userInput');
const errorElement = document.getElementById('chatbotResponse');
const resultElement = document.getElementById('chatbotResponse');

function equation() {

  const form = document.getElementById('userInput');
  const errorElement = document.getElementById('chatbotResponse');
  const resultElement = document.getElementById('chatbotResponse');
  
  const input = document.getElementById('userInput').value;
  const match = input.match(/(\d+)([+*\/-])(\d+)/);
  if (!match) {
    errorElement.textContent = "I can't solve your equation, it might be because there letters in it, fix this error and try again.";
    return;
  }

  const [, num1, operation, num2] = match;
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);

  let result;
  switch (operation) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }

  resultElement.textContent = "The answer to that equation is " + result + ".";
}



var text =
{
"inputs":
  [
    "hi",
    "hello",
    "how are you",
    "help"
  ],
"outputs":
  [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "I'm just a computer program, so I don't have feelings. But I'm here to assist you!",
    "So far, the things I respond to is 'hi', 'hello', 'help' and 'how are you'. I can also solve 2 number equations, for example, '2/6' or '53+842'"
  ]
};


function load() {
  document.querySelector('#userInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      sendInput();
    }
  });
}