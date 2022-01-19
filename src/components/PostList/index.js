import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import * as actions from '../../redux/actions'; 
import { postsSelector } from '../../redux/selectors';
import Post from './Post';

function PostList() {
    const dispatch = useDispatch();
    let posts = useSelector(postsSelector);

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);
    
    console.log(posts)
    return (
        <Grid container spacing={2} alignItems='stretch'>
            {
                posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))
            }

        </Grid>
    )
}

export default PostList;
