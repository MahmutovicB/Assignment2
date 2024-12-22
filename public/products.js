
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

function editProduct(id) {
    var table = document.getElementById('tbody');
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].innerHTML == id) {
            for (var j = 1; j < row.cells.length - 2; j++) {
                var cell = row.cells[j];
                var input = document.createElement('input');
                input.type = 'text';
                input.value = cell.innerHTML;
                cell.innerHTML = '';
                cell.appendChild(input);
            }
            row.cells[row.cells.length - 2].innerHTML = `<button class="btn btn-secondary"  onclick="saveProduct(${id})">Save</button>`;
            break;
        }
    }
}

function saveProduct(id) {
    var table = document.getElementById('tbody');
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].innerHTML == id) {
            for (var j = 1; j < row.cells.length - 2; j++) {
                var cell = row.cells[j];
                var input = cell.firstChild;
                cell.innerHTML = input.value;
            }
            row.cells[row.cells.length - 2].innerHTML = `<button class="btn btn-secondary" onclick="editProduct(${id})">Edit</button>`;
            break;
        }
    }
}

function deleteProduct(id) {
    var table = document.getElementById('tbody');
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].innerHTML == id) {
            table.deleteRow(i);
            break;
        }
    }
}



