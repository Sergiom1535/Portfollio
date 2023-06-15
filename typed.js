const typedText = document.getElementById('typed');
const words = ['Computer Scientist', 'Software Engineer', 'Web Developer', 'Developer', 'Programmer'];

async function type() {
  for (let word of words) {
    for (let i = 0; i <= word.length; i++) {
      typedText.textContent = word.substring(0, i);
      await sleep(100); // Adjust the typing speed here (in milliseconds)
    }
    await sleep(1500); // Adjust the delay before erasing here (in milliseconds)
    for (let i = word.length; i >= 0; i--) {
      typedText.textContent = word.substring(0, i);
      await sleep(50); // Adjust the erasing speed here (in milliseconds)
    }
  }
  type(); // Restart the typing effect
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type();
  