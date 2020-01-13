import React from 'react'

const URL = ({ company }) => {
    return (
        <div>
            <a href={company.url}>{company.name}</a>
        </div>
    )
}

export default URL;