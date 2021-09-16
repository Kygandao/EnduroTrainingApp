const clientId = 'ODIMF48Hhu0ooKvJPHIh0TAeaMRDnP4xifvMpghgl-A';
let randomImg = `https://api.unsplash.com/photos/random/?client_id=${clientId}`;

const imageDisplay = document.getElementById('unsplash-image');
const imageLink = document.getElementById('image-link');
const creator = document.getElementById('creator');

//call to api and set img on screen
fetch(randomImg)
    .then((response) => response.json())
    .then((jsonImgData) => {
        imageDisplay.src = jsonImgData.urls.regular;
        imageLink.setAttribute('href', jsonImgData.links.html);
        creator.innerHTML = jsonImgData.user.username;
        creator.setAttribute('href', jsonImgData.user.portfolio_url);
    })
    .catch((err) => console.log(err));

//function to reload page to receive new image    
function reload() {
    window.location.reload()
}
//click next image btn
const nextImgBtn = document.getElementById('next-btn')
nextImgBtn.addEventListener('click', reload, false)

//function to save image to db
