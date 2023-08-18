// Function to update the timer display
function updateTimerDisplay(hours, minutes, seconds) {
  const displayText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('MyTimer').innerText = displayText;
}

// Function to start the timer for 10 hours
function startTimer() {
  let hours = 10;
  let minutes = 0;
  let seconds = 0;

  updateTimerDisplay(hours, minutes, seconds);

  const timerInterval = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      console.log('Timer stopped.');
      return;
    }

    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        hours--;
        minutes = 59;
        seconds = 59;
      }
    }

    updateTimerDisplay(hours, minutes, seconds);
    console.log(`Timer updated: ${hours}:${minutes}:${seconds}`);
  }, 1000); // Timer will update every 1000ms (1 second)
}

// Call the function to start the timer for 10 hours
startTimer();
