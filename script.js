/* 
    STEP 1: Read the % value from the text element
*/
const percentText = document.getElementById("percentText").textContent.trim();

// Convert "75%" → 75
const numericValue = parseInt(percentText.replace("%", ""));

/*
    STEP 2: I've created a dynamic color based on the numeric percentage.
    More % → greener. Less % → redder.
*/
const green = Math.round((numericValue / 100) * 255);
const red = 255 - green;
const dynamicColor = `rgb(${red}, ${green}, 80)`;

/*
    STEP 3: I've rewrited the CSS :active rule.
    I have selected the stylesheet linked in index.html and append a new rule.
*/
const stylesheets = document.styleSheets;

// Grab the first stylesheet (styles.css)
const sheet = stylesheets[0];

// Insert dynamic :active rule at the end of the stylesheet
sheet.insertRule(`rect:active { fill: ${dynamicColor}; }`, sheet.cssRules.length);

console.log("Dynamic :active color applied:", dynamicColor);
