
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function toggleContent(contentId) {
    var button = event.target;
    var content = document.getElementById(contentId);
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Show less...";
    } else {
        content.style.display = "none";
        button.textContent = "See more...";
    }
}   

function toggleAccordion(collapseId) {
    var content = document.getElementById(collapseId);
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        var allContents = document.querySelectorAll('.accordion-collapse');
        allContents.forEach(function(item) {
            item.classList.remove('show');
        });
        content.classList.add('show');
    }
}