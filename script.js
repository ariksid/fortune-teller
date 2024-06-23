document.addEventListener("DOMContentLoaded", function() {
    const fortunes = [
        "You will have a great day!",
        "Success is in your future.",
        "Be patient. Good things are coming.",
        "Happiness is just around the corner.",
        "A new adventure awaits you.",
        "Your hard work will soon pay off.",
        "Trust your instincts.",
        "You will meet someone special today.",
        "Unexpected fortune is coming your way.",
        "Believe in yourself and all that you are."
    ];

    function getRandomFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }

    const fortuneElement = document.getElementById("fortune");
    fortuneElement.textContent = getRandomFortune();
    function displayPageInfo() {
        var pageInfoElement = document.getElementById("page-info");
        var currentPageURL = window.location.href;
        var lastModifiedDate = document.lastModified;
        pageInfoElement.textContent = "Page URL: " + currentPageURL + " | Last Modified: " + lastModifiedDate;
    }

    
    window.onload = function() {
        displayPageInfo();
    };
});