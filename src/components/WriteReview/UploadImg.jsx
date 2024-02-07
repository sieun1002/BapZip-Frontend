import React, { useEffect, useRef, useState } from 'react'

import scrUploadBtn from '../../images/WriteReview/uploadBtn.png'

export default function UploadImg(props) {
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();

    const handleButtonClick = (e) => {
        imgRef.current.click();
    }

    const handleChange = (e) => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
           };
    }
    useEffect(()=>{
        props.setImgScr(imgFile);
    },[imgFile]);
    return (
    <div className='uploadImg-WriteReview'>
        <div className='txt-uploadImg'>
            <p className='title-uploadImg'>사진 업로드</p>
            <p className='detail-uploadImg'>사진 첨부(선택)</p>
        </div>
        <div className='img-uploadImg'>
            <button className='uploadBtn-uploadImg' style={{backgroundImage: `url(${scrUploadBtn})`, backgroundSize: "cover"}}
            onClick={handleButtonClick}/>
            <input type="file"
            accept="image/jpg, image/jpeg, image/png" 
            style={{display:"none"}}
            onChange={handleChange}
            ref={imgRef}
            />
            {imgFile.length!==0?
            <button className='uploadBtn-uploadImg' style={{backgroundImage: `url(${imgFile})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
            :""}
        </div>
    </div>
    )
}
