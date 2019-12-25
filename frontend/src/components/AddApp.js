import React from 'react'

const AddApp = ({ addApp, newApp, handleAppChange, newAge, handleAgeChange }) => {
    return (
        <form onSubmit={addApp}>
            <div>
                name: <input value={newApp} onChange={handleAppChange} />
                <br></br>
                age: <input value={newAge} onChange={handleAgeChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddApp;