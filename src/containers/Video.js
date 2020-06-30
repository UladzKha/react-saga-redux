import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { render } from '@testing-library/react';
import { Container, Col, Row } from 'react-bootstrap';

const videoIdDefault = 'P-WP6POdTgY';
const titleDefault = 'How to become a Programmer';
const descriptionDefault = "In this video i will tell you what exactly you need to bacome a software developer";
const channelNameDefault = "the one from millions";


function Video({ videos, playing }) {
    console.log('VIDEOS', playing)
    return (
        <>
            <Container style={{ marginTop: 3 }}>
                {videos ?
                    <>
                        <ReactPlayer width='100%' height='700px' url={`https://www.youtube.com/watch?v=${videos.id.videoId}`} />
                        <h5>{videos.snippet.title || titleDefault}</h5>
                        <h2>{videos.snippet.description || descriptionDefault}</h2>
                        <h2>{videos.snippet.channelTitle || channelNameDefault}</h2>
                        <button onClick={() => playing = !playing}>Stop</button>
                    </>
                    :
                    <>
                        <h2>{titleDefault}</h2>
                        <ReactPlayer controls={true} width='100%' height='700px' url={`https://www.youtube.com/watch?v=${videoIdDefault}`} />
                        <Row>
                            <Col sm={8}>
                                <h4>Description: {descriptionDefault}</h4>
                            </Col>
                            <Col sm={4}>

                                <h4>Channel: {channelNameDefault}</h4>
                            </Col>
                        </Row>


                        <button onClick={() => playing = !playing}>Stop</button>

                    </>
                }
            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    videos: state.videos,
    playing: state.playing
})

Video = connect(mapStateToProps, null)(Video)
export default Video;