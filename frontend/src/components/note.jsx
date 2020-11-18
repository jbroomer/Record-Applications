import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AppService from '../services/apps';

const propTypes = {
  company: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired,
  setCompanies: PropTypes.func.isRequired,
};

const Note = ({ company, companies, setCompanies }) => {
  const [modal, setModal] = useState(false);
  const [note, setNote] = useState('');

  const handleShowModal = (companyNote) => {
    setNote(companyNote);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleModalChange = (event) => {
    setNote(event.target.value);
  };

  const handleSaveNotes = () => {
    const companyObject = {
      title: company.title.trim(),
      name: company.name.trim(),
      location: company.location.trim(),
      url: company.url.trim(),
      date: company.date,
      period: company.period.trim(),
      status: company.status,
      note,
      user: company.user.username,
    };

    AppService.updateApplicationStatus(company.id, companyObject).then(
      (response) => {
        setCompanies(
          companies.map((currCompany) => (currCompany.id !== company.id ? currCompany : response)),
        );
      },
    );

    setModal(false);
  };

  return (
    <div>
      <button onClick={() => handleShowModal()}>More</button>
      <Modal show={modal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>{`Add Notes to ${company.name}`}</strong>
          <FormControl
            as="textarea"
            rows="10"
            defaultValue={note}
            onChange={handleModalChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveNotes(company)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
Note.propTypes = propTypes;
export default Note;
