// HANDLE IMAGE FILTERING
const search = document.querySelector('#mySearch');
const thumbnail = document.querySelectorAll('.item a');

const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();

    thumbnail.forEach(imageSearch => {
        const text = imageSearch.getAttribute('data-title').toLowerCase();
        const box = imageSearch.parentElement;
        
        if (text.indexOf(searchTerm) > -1) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

search.addEventListener('keyup', handleSearch);
