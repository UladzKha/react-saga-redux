import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchVideos } from '../actions'
import { Container, Button } from 'react-bootstrap';

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
            <Container style={{marginTop: 5}}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type='text' value={searchCriteria.text} onChange={(e) => handleInputChange(e)} />
                    {/* <button onClick={() => fetchVideos(searchCriteria)}>Press to see news</button> */}
                    <Button variant="primary" type='submit'>Search</Button>
                </form>
            </Container>
        </>
    )
}
const mapDispatchToProps = {
    fetchVideos: fetchVideos,
};
Search = connect(null, mapDispatchToProps)(Search);
export default Search;