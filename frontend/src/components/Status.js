import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import AppService from '../services/apps'

const Status = ({ company, companies, setCompanies }) => {
    const handleStatusChange = (company, newStatus) => {
        const companyObject = {
            name: company.name.trim(),
            location: company.location.trim(),
            url: company.url.trim(),
            date: company.date,
            period: company.period.trim(),
            status: newStatus,
            note: company.note,
        }

        AppService
            .updateApp(company.id, companyObject)
            .then(response => {
                setCompanies(companies.map(currCompany => currCompany.id !== company.id ? currCompany : response))
            })
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    {company.status}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { handleStatusChange(company, "In Review") }}>In Review</Dropdown.Item>
                    <Dropdown.Item onClick={() => { handleStatusChange(company, "Coding Challenge") }}>Coding Challenge</Dropdown.Item>
                    <Dropdown.Item onClick={() => { handleStatusChange(company, "Interview") }}>Interview</Dropdown.Item>
                    <Dropdown.Item onClick={() => { handleStatusChange(company, "Rejected") }}>Rejected</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Status;