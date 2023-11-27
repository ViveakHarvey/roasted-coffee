var carouselContainer = document.querySelector(".carousel-container");
var highlightDiv = document.querySelector(".highlight");
var translationValues = ['-0%', '-100%',];
var currentIndex = 0;

function updateTranslation() {
    carouselContainer.style.transform = 'translateX(' + translationValues[currentIndex] + ')';
    updateHighlight();
    currentIndex = (currentIndex + 1) % translationValues.length;
    console.log(currentIndex);
}

function updateHighlight() {
    var highlightDots = '';
    for (var i = 0; i < translationValues.length; i++) {
        var dotClass = i === currentIndex ? 'highlight-dot active' : 'highlight-dot';
        highlightDots += '<div class="' + dotClass + '" onclick="selectSlide(' + i + ')"></div>';
    }
    highlightDiv.innerHTML = highlightDots;
}

function selectSlide(index) {
    currentIndex = index;
    updateTranslation();
}

setInterval(updateTranslation, 4000);
updateTranslation();

