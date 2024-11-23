const images = Array.from(document.querySelectorAll('.gallery-img img'));
let currentIndex = 0;


document.querySelectorAll('.gallery-img').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index; 
        showModal(images[currentIndex].src); 
    });
});

function showModal(imgSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close" onclick="closeModal(this.parentElement)">&times;</span>
        <img class="modal-content" src="${imgSrc}" id="modalImage">
        <button class="prev" onclick="changeImage(-1)">&#10094;</button>
        <button class="next" onclick="changeImage(1)">&#10095;</button>
    `;
    document.body.appendChild(modal);
    
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.removeChild(modal);
}


function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    } else if (currentIndex >= images.length) {
        currentIndex =  0;
    }
    document.getElementById('modalImage').src = images[currentIndex].src; 
}

const modalStyle = document.createElement('style');
modalStyle.innerHTML = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        margin: auto;
        display: block;
        max-width: 80%;
        max-height: 80%;
    }
    .close {
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
    }
    .close:hover {
        background-color:red;
    }
    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(255, 255, 255, 0.7);
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 20px;
        color: black;
    }
    .prev {
        left: 80px;
    }
    .next {
        right: 80px;
    }
    .next:hover {
        color:green;
    }
    .prev:hover {
        color:green;
    }         
`;
document.head.appendChild(modalStyle);




