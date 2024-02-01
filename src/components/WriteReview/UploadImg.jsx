import React from 'react'

import scrUploadBtn from '../../images/WriteReview/uploadBtn.png'

export default function UploadImg() {
    const fileInput = React.useRef(null);

    const handleButtonClick = (e) => {
        fileInput.current.click();
    }

    const handleChange = (e) => {
        console.log(e.target.files[0]);
    }
    return (
    <div className='uploadImg-WriteReview'>
        <div className='txt-uploadImg'>
            <p className='title-uploadImg'>사진 업로드</p>
            <p className='detail-uploadImg'>사진 첨부 최대 5장(선택)</p>
        </div>
        <div className='img-uploadImg'>
            <button className='uploadBtn-uploadImg'  style={{backgroundImage: `url(${scrUploadBtn})`, backgroundSize: "cover"}}
            onClick={handleButtonClick}/>
            <input type="file"
            accept="image/jpg, image/jpeg, image/png" 
            style={{display:"none"}}
            onChange={handleChange}
            ref={fileInput}
            />
        </div>
    </div>
    )
}
