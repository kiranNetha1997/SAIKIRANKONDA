import React, { useEffect, useState } from 'react';

function UpLoad() {
    const [imageUpload, setImageUpload] = useState(null)
    // console.log(imageUpload)
    const [image, setImage] = useState([])
    console.log(image)
    const uploadFile = () => {
        if (imageUpload === null) {
            alert("Please Select file")
        } else {
            setImage((prev) => [...prev, imageUpload]);
        }

    }
    // useEffect(() => {
    //     uploadFile()
    //     setImageUpload(null)
    // })
    return (
        <div>
            <h1>Upload File Using React</h1> <br />
            <input type='file' onChange={(e) => setImageUpload(e.target.files[0])} /> <br />
            <button onClick={uploadFile}>Upload</button>
            <div>
                <p> Saikiran</p>
                <img src={imageUpload}
                    // alt={imageUpload.?}
                    style={{ "width": "50px", "height": "50px" }} />
                {/* <p>{    .name}</p> */}
                {/* <p>{imageUpload.size}</p> */}
            </div>
        </div>
    )
}

export default UpLoad;