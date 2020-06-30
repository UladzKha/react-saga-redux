import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { Container, Col, Row } from "react-bootstrap";

function Video({ videos, playing }) {
  return (
    <Container style={{ marginTop: 3 }}>
      {videos ? (
        <>
          <h2>{videos.snippet.title}</h2>
          <ReactPlayer
            controls={true}
            width="100%"
            height="700px"
            url={`https://www.youtube.com/watch?v=${videos.id.videoId}`}
          />
          <Row>
            <Col sm={8}>
              <h4>Description: {videos.snippet.description}</h4>
            </Col>
            <Col sm={4}>
              <h4>Channel: {videos.snippet.channelTitle}</h4>
            </Col>
          </Row>
          {/* Pause/Play Button */}
        </>
      ) : (
        <h3>Is no Video please use serach to watch</h3>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  videos: state.videos,
  playing: state.playing
});

Video = connect(
  mapStateToProps,
  null
)(Video);

export default Video;
