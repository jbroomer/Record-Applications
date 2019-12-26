import React, { useEffect } from 'react'
import AppService from '../services/apps'
import Table from 'react-bootstrap/Table'

const ViewAppPage = ({ companies, setCompanies }) => {
    const table = companies.map(company => 
        <>
            <tr>
                <td><button onClick={() => { handleDeleteChange(company) }}>Delete</button></td>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.location}</td>
                <td>{company.date}</td>
                <td>{company.period}</td>
                <td><a href={company.url}>{company.name}</a></td>
                <td>{company.status}</td>
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
        <div>
            <h2>View Applications Page</h2>
            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>Applied Date</th>
                        <th>Start Period</th>
                        <th>URL</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </Table>
        </div>
    )
}

export default ViewAppPage;