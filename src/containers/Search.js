import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from '../actions'
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

function Search({ fetchVideos }) {
    const [searchCriteria, setSearchCriteria] = useState({
        text: ''
    });

    const handleInputChange = e => {
        setSearchCriteria({ text: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetchVideos(searchCriteria);
    }
    return (
        <>
            <Container style={{ marginTop: 10 }}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                        <Col sm={10}>
                            <Form.Control type='text' value={searchCriteria.text} onChange={(e) => handleInputChange(e)} />
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" type='submit'>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}
const mapDispatchToProps = {
    fetchVideos: fetchVideos,
};
Search = connect(null, mapDispatchToProps)(Search);
export default Search;