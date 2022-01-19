import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  paper: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '0 0 10px 0',
  },
  title: {
    marginBottom: '20px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    resize: 'none',
  },
  footer: {
    marginTop: '10px',
  },
}));
