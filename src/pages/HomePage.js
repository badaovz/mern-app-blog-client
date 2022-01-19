import { useCallback } from 'react';
import { Container, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import PostList from '../components/PostList';
import CreatePostModal from '../components/CreatePostModal';
import useStyles from './styles';
import Header from '../components/Header';

function HomePage() {
    const classes = useStyles();
    const dispatch = useDispatch();


    const openCreatePostModal = useCallback(() => {
        dispatch(showModal())
    },[dispatch])
    return (
        <Container maxWidth='lg'>
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab
                className={classes.fab}
                onClick={openCreatePostModal}
            >
                <AddIcon/>
            </Fab>
        </Container>
    )
}

export default HomePage;
