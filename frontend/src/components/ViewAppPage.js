import React, { useEffect } from 'react'
import AppService from '../services/apps'
import Table from 'react-bootstrap/Table'
import FaClose from 'react-icons/lib/fa/close'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Dropdown from 'react-bootstrap/Dropdown'

const ViewAppPage = ({ companies, setCompanies }) => {
    const table = companies.map(company => 
        <>
            <tr>
                <td><FaClose size={25} color="red" onClick={() => { handleDeleteChange(company) }}>Delete</FaClose></td>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.location}</td>
                <td>{company.date}</td>
                <td>{company.period}</td>
                <td><a href={company.url}>{company.name}</a></td>
                <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            In Review
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >Coding Challenge</Dropdown.Item>
                            <Dropdown.Item >Interview</Dropdown.Item>
                            <Dropdown.Item >Rejected</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
                .setCompanies(companies.filter(delCompany => delCompany !== company.id));
        }
    }

    return (
        <Jumbotron>
            <div>
                <Table striped bordered hover variant="dark" size="sm" responsive>
                    <thead>
                        <tr>
                            <th width="40">Delete</th>
                            <th width="50">#</th>
                            <th width="460">Company Name</th>
                            <th width="150">Location</th>
                            <th width="150">Applied Date</th>
                            <th width="200">Start Period</th>
                            <th width="250">URL</th>
                            <th width="150">Status</th>
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