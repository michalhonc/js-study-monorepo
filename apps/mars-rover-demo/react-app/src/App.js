import React from 'react';

import Form from './Form';

const App = () => {
    const [images, setImages] = React.useState([]);
    const [state, setState] = React.useState('iddle');

    const sendReq = (values) => {
        if (values.length > 0) {
            const url = constructUrl(values);
            setState('loading');
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setState('finished');
                    if (data.photos.length > 0) {
                        setImages(data.photos);
                    }
                });
        }
    };

    return (
        <div>
            <Form callback={sendReq} />

            <hr />

            {state === 'loading' && <div>Loading..</div>}
            {state === 'finished' && images.length === 0 && (
                <div>No images were taken on this day.</div>
            )}

            {images.map((img) => (
                <img
                    key={img.img_src}
                    src={img.img_src}
                    width="500"
                    title={`${img.earth_date} | ${img.rover.name} - ${img.camera.full_name}`}
                    alt={`${img.earth_date} | ${img.rover.name} - ${img.camera.full_name}`}
                />
            ))}
        </div>
    )
};

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



export default App;
