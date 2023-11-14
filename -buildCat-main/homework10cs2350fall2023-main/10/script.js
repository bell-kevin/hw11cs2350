/* javascript for mad libs html page */
function getAdLibs() {
    document.getElementById("story").innerHTML =
        "<p class=\"function\" id=\"test2\">" +

        "<label for=\"animal1\">Enter an animal</label>" + //animal1
        "<input type=\"text\" id=\"animal1\"></input>" +

        "<label for=\"name1\">Enter a name</label>" + //name1
        "<input type=\"text\" id=\"name1\"></input>" +

        "<label for=\"name2\">Enter another name</label>" + //name2
        "<input type=\"text\" id=\"name2\"></input>" +

        "<label for=\"num1\">Enter a number</label>" + //num1
        "<input type=\"text\" id=\"num1\"></input>" +

        "<label for=\"noun1\">Enter a noun</label>" + //noun1
        "<input type=\"text\" id=\"noun1\"></input>" +


        "<label for=\"nounPlural1\">Enter a plural noun</label>" + //nounPlural1
        "<input type=\"text\" id=\"nounPlural1\"></input>" +

        "<label for=\"adj1\">Enter an adjective</label>" + //adj1
        "<input type=\"text\" id=\"adj1\"></input>" +

        "<label for=\"adj2\">Enter another adjective</label>" + //adj2
        "<input type=\"text\" id=\"adj2\"></input>" +

        "<label for=\"place1\">Enter a location</label>" + //place1
        "<input type=\"text\" id=\"place1\"></input>" +

        "<label for=\"place2\">Enter another location</label>" + //place2
        "<input type=\"text\" id=\"place2\"></input>" +

        "<label for=\"occupation1\">Enter an occupation</label>" + //occupation1
        "<input type=\"text\" id=\"occupation1\"></input>" +

        "<button class=\"story\" onclick=\"writeStory()\">Write Story</button>";
}

function writeStory() {
    var animal1, name1, name2, occupation1, place1, place2, adj1, adj2, noun1, nounPlural1, num1;

    animal1 = document.getElementById("animal1").value;
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    occupation1 = document.getElementById("occupation1").value;
    place1 = document.getElementById("place1").value;
    place2 = document.getElementById("place2").value;
    adj1 = document.getElementById("adj1").value;
    adj2 = document.getElementById("adj2").value;
    noun1 = document.getElementById("noun1").value;
    nounPlural1 = document.getElementById("nounPlural1").value;
    num1 = document.getElementById("num1").value;

    if (
        animal1 === "" ||
        name1 === "" ||
        name2 === "" ||
        occupation1 === "" ||
        place1 === "" ||
        place2 === "" ||
        adj1 === "" ||
        adj2 === "" ||
        noun1 === "" ||
        nounPlural1 === "" ||
        num1 === ""
    ) {
        window.alert("Please fill in all the fields before submitting the story.");
    } else {
        // Set the tab title to the user's entered name
        document.title = name1 + "'s Mad Libs Story";

        document.getElementById("story").innerHTML = "<p class=\"story\">" +
            "Once there was a <span class=\"user-input\">" + animal1 + "</span> named <span class=\"user-input\">" + name1 + "</span>. He wanted to one day become a <span class=\"user-input\">" + occupation1 + "</span> when he grew up." +
            " To achieve this dream, he had to go to <span class=\"user-input\">" + place1 + "</span> to find the magical <span class=\"user-input\">" + adj1 + "</span> <span class=\"user-input\">" + noun1 + "</span> of <span class=\"user-input\">" + nounPlural1 + "</span>. After entering a castle and searching through exactly <span class=\"user-input\">" + num1 + "</span> <span class=\"user-input\">" + adj2 + "</span> <span class=\"user-input\">" + nounPlural1 + "</span>," +
            " he found nothing, and his searching was in vain. Suddenly, the villainous <span class=\"user-input\">" + name2 + "</span> appeared to challenge <span class=\"user-input\">" + name1 + "</span> in an epic battle. <span class=\"user-input\">" + name1 + "</span> triumphed and came out on top, securing both victory and the <span class=\"user-input\">" + adj1 + "</span> <span class=\"user-input\">" + noun1 + "</span> of <span class=\"user-input\">" + nounPlural1 + "</span>.</p>" +

            "<p class=\"story\">Using the magical <span class=\"user-input\">" + adj1 + "</span> <span class=\"user-input\">" + noun1 + "</span> of <span class=\"user-input\">" + nounPlural1 + "</span>, <span class=\"user-input\">" + name1 + "</span> was able to finally achieve his dream of becoming a <span class=\"user-input\">" + occupation1 + "</span>," +
            " even though it is unclear exactly how the <span class=\"user-input\">" + adj1 + "</span> <span class=\"user-input\">" + noun1 + "</span> of <span class=\"user-input\">" + nounPlural1 + "</span> facilitated this in the first place. Having defeated the evil <span class=\"user-input\">" + name2 + "</span> and achieving his dream, <span class=\"user-input\">" + name1 + "</span> moved to <span class=\"user-input\">" + place2 + "</span> and lived mildly content ever after.</p>" +
            "<button class=\"story tryAgain\" onclick=\"getAdLibs()\">Play Again?</button>";
    }
}
/* end javascript for mad libs html page */

/* javascript for slideShow html page */
window.addEventListener("load", loadEventListener);
var timer;
var index = 0;
var pictureArray = [
    "resources/BotW0.jpg",
    "resources/BotW1.jpg",
    "resources/BotW2.jpg",
    "resources/BotW3.jpg",
    "resources/BotW4.jpg",
    "resources/BotW5.jpg",
    "resources/BotW6.jpg"
];

function loadEventListener() {
    document.getElementById("next").addEventListener("click", nextImage);
    document.getElementById("play").addEventListener("click", function () {
        clearInterval(timer); // Clear the timer if it's not null
        timer = setInterval(nextImage, 1000);
    });
    document.getElementById("prev").addEventListener("click", prevImage);
    document.getElementById("pause").addEventListener("click", pauseSlideShow);
}

function prevImage() {
    index--; // Decrement the index
    if (index < 0) {
        index = pictureArray.length - 1; // Set to the last index if it's less than 0
    }
    updateImageAndCaption(); // Call the updateImageAndCaption function to update the image and caption
}

function nextImage() {
    index++; // Increment the index
    if (index >= pictureArray.length) {
        index = 0; // Reset index to 0 if it exceeds the array length
    }
    updateImageAndCaption(); // Call the updateImageAndCaption function to update the image and caption
}

function updateImageAndCaption() {
    console.log(pictureArray[index]);
    console.log(index);
    var picture = document.getElementById("picture");
    picture.src = pictureArray[index]; // Change the image source

    // Update the caption
    var caption = document.getElementById("caption");
    var captions = [
        "Swim through the serene sunset lakes.",
        "Explore the upside-down waterfalls below Hyrule.",
        "Run through vast, endless fields.",
        "Experience new forms of travel!",
        "Play around with the janky physics engine!",
        "Pretend to be the legendary hero in the sacred grove!",
        "Learn to counterfeit rare and unique items!"
    ];
    caption.innerHTML = captions[index];
}

function pauseSlideShow() {
    clearInterval(timer);
    timer = null; // Set the timer to null to indicate that the slideshow is paused
}

/* end javascript for slideShow html page */



