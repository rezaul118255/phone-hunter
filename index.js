const loadphones = (searchtext) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`)
        .then(res => res.json())
        .then(data => displayphones(data.data))
}
const displayphones = phones => {
    // console.log(phones)
    const phonescontainer = document.getElementById("phone-container");
    phonescontainer.textContent = ' ',
        phones.forEach(phone => {
            phonescontainer.innerHTML += `
            <div class="col">
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.slug}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                      </button>
                    
                       
                </div>
            </div>
            
        </div>
        `;

        });
}
document.getElementById("btn-search").addEventListener('click', function () {
    const searchfield = document.getElementById("search-field");
    const searchtext = searchfield.value;
    loadphones(searchtext);


})
document.getElementById("search-field")
loadphones()