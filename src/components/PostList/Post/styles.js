import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    images: {
        height: '150px',
        width: '100%',
        objectFit: 'cover',
    },
    iconbtn: {
        position: 'relative'
    },
    delete: {
        position: 'absolute',
        right: 0,
        top: '100%',
        zIndex: '100',
    },
}))