
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

function openNewPageWithData(data) {
    const url = new URL('http://127.0.0.1:5500/public/productpreview.html'); 
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    window.open(url, '_blank');
}

function getData(name, image, description) {
    data = {
        name: name,
        image: image,
        description: description
    };
    console.log(data);
    openNewPageWithData(data);
}



