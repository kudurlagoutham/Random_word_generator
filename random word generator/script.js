// Function to fetch a random word from the API
async function fetchRandomWord() {
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word?lang=en'); // Fetch a single random word
    if (!response.ok) {//status of response from the server
      throw new Error(`Error: ${response.statusText}`);//If there is any error occured while processing the fetch(get) request
    }
    const word = await response.json(); // API returns an array with a word
    return word[0]; // Get the first word from the array
  } catch (error) {
    console.error('Failed to fetch the word:', error);
    return 'Error fetching word!'; // Fallback word in case of error
  }
}

// Event listener for button click
document.getElementById('generate-btn').addEventListener('click', async () => {
  const word = await fetchRandomWord(); // Fetch word from API
  document.getElementById('word-display').textContent = word; // Display fetched word
});
