// Select elements
const form = document.getElementById('form');
const images = document.getElementById('images');
const loading = document.getElementById('loading');
const notFound = document.getElementById('notFound');

// Assign Event handler on form element
form.onsubmit = submit;

// Handle submit Event handler on form element
function submit(event) {
  resetDOM();

  const formValues = [...new FormData(form)];

  const url = constructUrl(formValues);

  sendReq(url);

  event.preventDefault();
}

// Add values from form to URL
function constructUrl(values) {
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=vzcn9FMzIO3g3H9eiJU2Xr4XL6CChsySjgrndUeK';
  values.forEach((value) => {
    if (value[1]) {
      const param = `&${value[0]}=${value[1]}`;
      url += param; 
    }
  });
  return url;
}

// Send HTTP request to url
function sendReq(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      loading.innerText = '';
      if (data && data.photos.length === 0) {
        renderNothingFound();
      } else {
        renderImages(data);
      }
    })
}

// Clear content
function resetDOM() {
  notFound.innerText = '';
  loading.innerText = 'Loading..';

  while (images.firstChild) {
    images.removeChild(images.lastChild);
  } 
}

// render text inside notFound element
function renderNothingFound() {
  notFound.innerText = 'No images were taken on this day.';
}

// render images to content
function renderImages(data) {
  data.photos.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo.img_src;
    img.width = 400;
    img.title = `${photo.earth_date} | ${photo.rover.name} - ${photo.camera.full_name}`;
    images.appendChild(img);
  })
}