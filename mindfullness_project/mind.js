
const startMeditation = () => {
    const meditationText = document.getElementById('meditation-text');
    meditationText.textContent = "Close your eyes and take a deep breath. Focus on your breathing for the next few minutes.";

    setTimeout(() => {
        meditationText.textContent = "Meditation session complete. Open your eyes when you're ready.";
    }, 300000); // 5 minutes meditation (still abhi bhi issue hai esmee )
};



const startBreathing = () => {
    const breathingText = document.getElementById('breathing-text');
    let inhale = true;
    
    const breathingInterval = setInterval(() => {
        if (inhale) {
            breathingText.textContent = "Inhale...";
        } else {
            breathingText.textContent = "Exhale...";
        }
        inhale = !inhale;
    }, 4000); // 4 seconds for each inhale/exhale

    setTimeout(() => {
        clearInterval(breathingInterval);
        breathingText.textContent = "Breathing exercise complete. Feel free to repeat if necessary.";
    }, 30000);
};


document.getElementById('start-meditation').addEventListener('click', startMeditation);
document.getElementById('start-breathing').addEventListener('click', startBreathing);


