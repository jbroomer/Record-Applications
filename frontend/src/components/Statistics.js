import React, { useState, useEffect } from 'react'
import AppService from '../services/apps'

const Statistics = ({ companies, setCompanies, user, setUser }) => {
    const [filterCompanies, setFilterCompanies] = useState('');
    const inReview = 0;
    const inInterview = 0;
    const inCodingChallenge = 0;
    const inDeclined = 0;

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedCompanyappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            AppService.setToken(user.token)
        }
        }, [])

    // const filteredCompanies = companies.filter(company =>
    //     (company.name.toLowerCase().includes(filterCompanies.toLowerCase()) 
    //  || company.period.toLowerCase().includes(filterCompanies.toLowerCase())
    //  || company.location.toLowerCase().includes(filterCompanies.toLowerCase())
    //  || company.status.toLowerCase().includes(filterCompanies.toLowerCase()))
    //  && company.user.username == user.username
    // );

    

    const test = () => {
        console.log(filterCompanies);
    }

    return (
        <div>
            <h1>This is the Statistics page</h1>
        </div>
    )
}

export default Statistics;