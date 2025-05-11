const saveBtn = document.getElementById("saveBtn");
const colorPicker = document.getElementById("colorPicker");
const animatedBox = document.getElementById("animatedBox");

// Apply saved theme color on load
window.onload = () => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
        applyThemeColor(savedColor);
        colorPicker.value = savedColor;
    }
};

// Function to apply color theme
function applyThemeColor(color) {
    document.body.style.backgroundColor = color;
    animatedBox.style.backgroundColor = color;
    animatedBox.classList.remove("fadeInBox"); // reset animation
    void animatedBox.offsetWidth; // trigger reflow to restart animation
    animatedBox.classList.add("fadeInBox"); // re-apply animation
}

// Save user preference to localStorage
saveBtn.addEventListener("click", () => {
    const selectedColor = colorPicker.value;
    localStorage.setItem("themeColor", selectedColor);
    applyThemeColor(selectedColor);
});