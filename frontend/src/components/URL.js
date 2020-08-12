import React from 'react'

const URL = ({ company }) => {
    const emptyURL = () => (
        <div>
            <a href={company.url}> </a>
        </div>
    )

    const nonEmptyURL = () => (
        <div>
            <a href={company.url}>{company.name}</a>
        </div>
    )
    return (
        <div>
            {company.url === '' ?
            emptyURL() :
            nonEmptyURL()}
        </div>
    )
}

export default URL;