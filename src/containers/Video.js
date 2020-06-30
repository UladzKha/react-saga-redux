import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

const videoIdDefault = 'P-WP6POdTgY';
const titleDefault = 'How to become a Programmer';
const descriptionDefault = "In this video i will tell you what exactly you need to bacome a software developer";
const channelNameDefault = "the one from millions";

function Video({ videos }) {
    if (videos) {
        console.log('videos', videos)
        console.log('Channel Title', videos.snippet.channelTitle)
        console.log('Description', videos.snippet.description)
        console.log('Title', videos.snippet.title)
        console.log('VIDEOID', videos.id.videoId)
    }

    return (
        <>
            {videos ?
                <>
                    <ReactPlayer key={`https://www.youtube.com/watch?v=${videos.id.videoId}`} url={`https://www.youtube.com/watch?v=${videos.id.videoId}`} />
                    <h2>{videos.snippet.title || titleDefault}</h2>
                    <h2>{videos.snippet.description || descriptionDefault}</h2>
                    <h2>{videos.snippet.channelTitle || channelNameDefault}</h2>
                </>
                :
                <>
                    <ReactPlayer key={`https://www.youtube.com/watch?v=${videoIdDefault}`} url={`https://www.youtube.com/watch?v=${videoIdDefault}`} />
                    <h2>{titleDefault}</h2>
                    <h2>{descriptionDefault}</h2>
                    <h2>{channelNameDefault}</h2>
                </>
            }

        </>
    )
}

const mapStateToProps = (state) => ({
    videos: state.videos,
})
Video = connect(mapStateToProps, null)(Video)
export default Video;