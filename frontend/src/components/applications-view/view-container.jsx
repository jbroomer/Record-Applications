import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { Select, MenuItem } from '@material-ui/core';
// redux
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';

import ApplicationsViewHead from './view-head';
import ApplicationsViewToolbar from './view-toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 20,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  select: {
    height: 30,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const createData = (
  id,
  jobTitle,
  companyName,
  location,
  dateApplied,
  startDate,
  applicationUrl,
  status,
) => ({
  id,
  jobTitle,
  companyName,
  location,
  dateApplied,
  startDate,
  applicationUrl,
  status,
});

const formatDate = (date) => new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date(date));

const applicationStatusMap = {
  '-1': 'Rejected',
  0: 'Submitted',
  1: 'In Review',
  2: 'Interview',
  3: 'Offer',
};

const propTypes = {
  setAddingApplication: PropTypes.func.isRequired,
  addingApplication: PropTypes.bool.isRequired,
};

const ApplicationsViewContainer = ({
  setAddingApplication,
  addingApplication,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const dispatch = useDispatch();

  const { allApplicationIds, applicationsById } = useSelector((state) => ({
    allApplicationIds: state.get('applicationIds'),
    applicationsById: state.get('applicationsById'),
  }));

  const rows = [];
  allApplicationIds.forEach((id) => {
    const currentApplication = applicationsById.get(id);
    rows.push(
      createData(
        currentApplication.id,
        currentApplication.title,
        currentApplication.name,
        currentApplication.location,
        currentApplication.period,
        formatDate(currentApplication.date),
        currentApplication.url,
        currentApplication.status,
      ),
    );
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    if (isSelectOpen) {
      return;
    }
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const onStatusChange = (id, value) => {
    dispatch(actions.updateApplicationStatus(id, value));
  };

  const renderStatusSelect = (row) => (
    <Select
      className={classes.select}
      variant="outlined"
      value={applicationStatusMap[row.status] ? row.status : '0'}
      onClick={() => setIsSelectOpen(true)}
      onChange={(e) => {
        e.preventDefault();
        onStatusChange(row.id, e.target.value);
      }}
      MenuProps={{
        onClose: () => setIsSelectOpen(false),
      }}
    >
      <MenuItem value="-1">Rejected</MenuItem>
      <MenuItem value="0">Submitted</MenuItem>
      <MenuItem value="1">In Review</MenuItem>
      <MenuItem value="2">Interview</MenuItem>
      <MenuItem value="3">Offer</MenuItem>
    </Select>
  );

  const renderDataRows = () => rows.slice(rowsPerPage * page, rowsPerPage * (page + 1))
    .map((row, index) => {
      const isItemSelected = isSelected(row.id);
      const labelId = `enhanced-table-checkbox-${index}`;

      return (
        <TableRow
          hover
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          key={row.id}
          selected={isItemSelected}
        >
          <TableCell padding="checkbox">
            <Checkbox
              onClick={(event) => handleClick(event, row.id)}
              checked={isItemSelected}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </TableCell>
          <TableCell component="th" id={labelId} scope="row" padding="none">
            {row.jobTitle}
          </TableCell>
          <TableCell align="left">{row.companyName}</TableCell>
          <TableCell align="left">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/place/${row.location}`}
            >
              {row.location}
            </a>
          </TableCell>
          <TableCell align="left">{row.startDate}</TableCell>
          <TableCell align="left">{row.dateApplied}</TableCell>
          <TableCell align="left">{renderStatusSelect(row)}</TableCell>
        </TableRow>
      );
    });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ApplicationsViewToolbar
          setAddingApplication={setAddingApplication}
          addingApplication={addingApplication}
          numSelected={selected.length}
          selected={selected}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <ApplicationsViewHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {renderDataRows()}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
ApplicationsViewContainer.propTypes = propTypes;
export default ApplicationsViewContainer;
