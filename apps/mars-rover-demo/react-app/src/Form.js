import React from 'react';

const Form = (props) => {
    const [date, setDate] = React.useState('');
    const [camera, setCamera] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.callback([
            ['earth_date', date],
            ['camera', camera],
        ]);
    };

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="earth_date" value={date} onChange={(event) => setDate(event.target.value)} />

            <br />

            <label htmlFor="camera">Choose a camera:</label>
            <select name="camera" id="camera" value={camera} onChange={(event) => setCamera(event.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="FHAZ">Front Hazard Avoidance Camera</option>
                <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                <option value="MAST">Mast Camera</option>
                <option value="CHEMCAM">Chemistry and Camera Complex</option>
                <option value="MAHLI">Mars Hand Lens Imager</option>
                <option value="MARDI">Mars Descent Imager</option>
                <option value="NAVCAM">Navigation Camera</option>
                <option value="PANCAM">Panoramic Camera</option>
                <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)	</option>
            </select>

            <br />

            <input type="submit" value="Get images" />

        </form>
    )
};

export default Form;
