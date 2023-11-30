// Array of quotes
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Get the quote at the random index
    const randomQuote = quotes[randomIndex];
  
    // Display the random quote
    document.getElementById("quote").textContent = randomQuote;
  }
  
  // Event listener for button click
  document.getElementById("button").addEventListener("click", generateQuote);
  
  // Generate a random quote when the page loads
  window.addEventListener("load", generateQuote);
  