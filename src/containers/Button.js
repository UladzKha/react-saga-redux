import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchVideos } from '../actions'

function Button({ fetchVideos }) {
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
            <form onSubmit={(e) => handleSubmit(e) }>
                <input type='text' value={searchCriteria.text} onChange={(e) => handleInputChange(e)} />
                {/* <button onClick={() => fetchVideos(searchCriteria)}>Press to see news</button> */}
                <button type='submit'>Search</button>
            </form>
        </>
    )
}
const mapDispatchToProps = {
    fetchVideos: fetchVideos,
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button;