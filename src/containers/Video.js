import React, { useState } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { Container, Col, Row, Button } from "react-bootstrap";

function Video({ videos, playing }) {
  const [play, setPlay] = useState(true)

  console.log('PLAYING', playing)
  return (
    <Container style={{ marginTop: 3 }}>
      {videos ? (
        <>
          <div style={{ fontFamily: 'monospace', fontSize: 30 }}>
            {videos.snippet.title}

          </div>
          <ReactPlayer
            controls={true}
            width="100%"
            height="700px"
            url={'https://www.youtube.com/watch?v=${video.id.videosId}'}
            playing={play}
          />
          <Row>
            <Col sm={8}>
              <div style={{ fontFamily: 'monospace', fontSize: 20 }}>
                {videos.snippet.description}
              </div>
            </Col>
            <Col sm={4}>
              <div style={{ fontFamily: 'monospace', fontSize: 20 }}>
                Channel:  {videos.snippet.channelTitle}
              </div>
            </Col>
          </Row>

          {play ?
            <Button style={{ marginTop: 5 }} variant="info" onClick={() => setPlay(!play)}>Pause</Button>
            :
            <Button style={{ marginTop: 5 }} variant="info" onClick={() => setPlay(!play)}>Play</Button>
          }
        </>
      ) : (
          <h3>Are no videos were found</h3>
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
