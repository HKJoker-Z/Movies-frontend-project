import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {

    return (
        <div>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=gYa4L_V3Yj4"
                controls={true}

            />
        </div>
    )
}

export default VideoPlayer