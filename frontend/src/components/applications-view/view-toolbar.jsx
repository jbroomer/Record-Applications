import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// Redux
import { useDispatch } from 'react-redux';
import actions from '../redux/actions';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const propTypes = {
  numSelected: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  addingApplication: PropTypes.bool.isRequired,
  setAddingApplication: PropTypes.func.isRequired,
};

const ApplicationsViewToolbar = (props) => {
  const dispatch = useDispatch();
  const classes = useToolbarStyles();
  const { numSelected, selected, addingApplication, setAddingApplication } = props;

  const handleDelete = () => {
    dispatch(actions.requestDeleteApplications(selected));
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected}
          selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Applications
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton
            onClick={() => setAddingApplication(!addingApplication)}
            aria-label="filter list"
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

ApplicationsViewToolbar.propTypes = propTypes;
export default ApplicationsViewToolbar;
