// Function to generate dots
function generateDots() {
    const dotGrid = document.querySelector('.dot-grid');
    const dotSize = 10; // Adjust dot size as needed
    const rows = 1080 / dotSize; // Calculate number of rows
    const cols = 1920 / dotSize; // Calculate number of columns
    
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.width = `${1}px`;
            dot.style.height = `${1}px`;
            dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Set dot color to semi-transparent white
            dot.style.position = 'absolute';
            dot.style.top = `${y * dotSize}px`;
            dot.style.left = `${x * dotSize}px`;
            dotGrid.appendChild(dot);
        }
    }
}

// Call the function to generate dots when the page loads
window.addEventListener('load', generateDots);
