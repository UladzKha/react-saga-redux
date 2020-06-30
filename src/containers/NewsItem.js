import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}
function NewsItem({ videos }) {
    if (videos) {
        console.log('videos', videos)
        console.log('Channel Title', videos.snippet.channelTitle)
        console.log('Description', videos.snippet.description)
        console.log('Title', videos.snippet.title)
    }
    return (
        <>
        {videos ? <h1>Watch Video</h1> : <h1>No video</h1>}
        
        </>
    )
}

const mapStateToProps = (state) => ({
    videos: state.videos,
})
NewsItem = connect(mapStateToProps, null)(NewsItem)
export default NewsItem;