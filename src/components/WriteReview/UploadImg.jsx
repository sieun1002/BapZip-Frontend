import React, { useEffect, useRef, useState } from 'react'
import scrDeletBtn from "../../images/ManageReview/deletBtn.png";
import scrUploadBtn from '../../images/WriteReview/uploadBtn.png'

export default function UploadImg(props) {
    const [imgFile, setImgFile] = useState([]);
    const [imgSrc, setSrc] = useState([]);
    const imgRef = useRef();

    const handleButtonClick = (e) => {
        imgRef.current.click();
    }

    const handleChange = (e) => {
        if(imgRef.current.files[0] && imgFile.length < 5){
            const file = imgRef.current.files[0];
            const reader = new FileReader();
            const arrayFile = Array.from(imgFile);
            const arraySrc = Array.from(imgSrc);
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                arrayFile.push(file);
                arraySrc.push(reader.result);
                setImgFile(arrayFile);
                setSrc(arraySrc);
            };
        }
    }
    function delImage(index){
        const arrayFile = Array.from(imgFile);
        const arraySrc = Array.from(imgSrc);
        arrayFile.splice(index,1);
        arraySrc.splice(index,1);
        setImgFile(arrayFile);
        setSrc(arraySrc);
    }
    useEffect(()=>{
        props.setImgScr(imgFile);
    },[imgFile]);
    return (
    <div className='uploadImg-WriteReview'>
        <div className='txt-uploadImg'>
            <p className='title-uploadImg'>사진 업로드</p>
            <p className='detail-uploadImg'>사진 첨부(5장 선택)</p>
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
            {imgSrc.length!==0?
            imgSrc.map((item, index)=>{
                return(
                    <div className='images-uploadImg' key={index} style={{position: 'relative'}}>
                        <button className='uploadBtn-uploadImg'
                        style={{backgroundImage: `url(${item})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
                        <img src={scrDeletBtn} alt=""
                        style={{ width: "31px", height: "31px", position: 'absolute', top:'5px', right: '15px' }} onClick={() => {delImage(index)}}
                        />
                    </div>
                ); 
            })
            :""}
        </div>
    </div>
    )
}
