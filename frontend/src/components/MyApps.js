import React from 'react'

const MyApps = ({ databases }) => {
    return (
        databases.map(database => <li key={database.name}>{database.name} {database.age}</li>)
    )
}

export default MyApps;