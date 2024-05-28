// script.js
console.log("JavaScript is working!");

document.addEventListener("DOMContentLoaded", function() {
    const footerText = document.querySelector('footer p');
    footerText.style.position = 'relative';
    footerText.style.whiteSpace = 'nowrap';
    footerText.style.animation = 'move-text 10s linear infinite';

    // Define the keyframes using JavaScript
    const styleSheet = document.styleSheets[0];
    const keyframes =
    `@keyframes move-text {
        0% { left: 100%; }
        100% { left: -100%; }
    }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
});
