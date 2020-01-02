import React, { useState, useEffect } from 'react'
import AppService from '../services/apps'
import Table from 'react-bootstrap/Table'
import FaClose from 'react-icons/lib/fa/close'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

const ViewAppPage = ({ companies, setCompanies }) => {
    const [filterCompanies, setFilterCompanies] = useState('');

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(filterCompanies.toLowerCase()));

    const table = filteredCompanies.map(company => 
        <>
            <tr>
                <td><FaClose size={25} color="red" onClick={() => { handleDeleteChange(company) }}>Delete</FaClose></td>
                <td>{company.name}</td>
                <td>{company.location}</td>
                <td>{company.date}</td>
                <td>{company.period}</td>
                <td><a href={company.url}>{company.name}</a></td>
                <td>
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
                </td>
                <td>
                    <button >More</button>
                </td>
            </tr>
        </>
    );

    const hook = () => {
        AppService
          .getApp()
          .then(initApp => {
            setCompanies(initApp);
        })
    }
    useEffect(hook, []);

    const handleDeleteChange = (company) => {
        if (window.confirm(`Are you sure you want to remove ${company.name}?`)) {
            AppService
                .deleteApp(company.id)
                .then(response => {
                    setCompanies(companies.filter(delCompany => delCompany.id !== company.id));
                })
        }
    }

    const handleCompanyChange = (event) => {
        setFilterCompanies(event.target.value);
    }

    const handleStatusChange = (company, newStatus) => {
        const companyObject = {
            name: company.name.trim(),
            location: company.location.trim(),
            url: 'http://' + company.url.trim(),
            date: company.date,
            period: company.period.trim(),
            status: newStatus,
        }

        AppService
            .updateApp(company.id, companyObject)
            .then(response => {
                setCompanies(companies.map(currCompany => currCompany.id !== company.id ? currCompany : response))
            })
    }

    return (
        <Jumbotron>
            <div>
                <InputGroup size="lg" type="text" value={filterCompanies} onChange={handleCompanyChange}> 
                    <InputGroup.Prepend>
                    <InputGroup.Text ><strong>Filter</strong></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <Table striped bordered hover variant="dark" size="sm" responsive>
                    <thead>
                        <tr>
                            <th width="40">Delete</th>
                            <th width="460">Company Name</th>
                            <th width="150">Location</th>
                            <th width="150">Applied Date</th>
                            <th width="200">Start Period</th>
                            <th width="230">URL</th>
                            <th width="190">Status</th>
                            <th width="80">More Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </Table>
            </div>
        </Jumbotron>
        
    )
}

export default ViewAppPage;