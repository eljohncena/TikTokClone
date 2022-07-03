import React, {useRef, useState } from 'react';
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);  
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing stop
    if (playing) {
        videoRef.current.pause();
        setPlaying(false);
    }
    else {
        videoRef.current.play();
        setPlaying(true);
    }


    // otherwise if not playing then play


  };

  return (
    <div className="video">
        <video 
        onClick={handleVideoPress}
        className='video__player'
        loop
        ref={videoRef}
        src="https://v16m-default.tiktokcdn-us.com/b669c69aafa15c785220c207c54c26b2/62c22c15/video/tos/useast5/tos-useast5-ve-0068c002-tx/3863576d57624689a1fc5c9388365a91/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2880&bt=1440&cs=0&ds=3&ft=eXWR6H-qMyq8ZvdZ6we2NmE~fl7Gb&mime_type=video_mp4&qs=0&rc=NTc4aGk7OjVpNmRoNmgzOkBpM3FlbGY6Zms7PDMzZzczNEBjMTFiNTEuNi0xLzVeXzJhYSMxNGNpcjRnbWhgLS1kMS9zcw%3D%3D&l=20220703175345010002045007735002021084F99F6">

        </video>
        {/*Video Footer*/}
        {/*Video sidebar*/}
    </div>
  )
}

export default Video