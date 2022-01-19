import { useCallback, useState } from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    Dialog,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/actions';
import useStyles from './styles';

function Post({ post }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [deleteBtn, setDeleteBtn] = useState(false);

    const handleLikeClick = useCallback(()=>{
        dispatch(
            updatePost.updatePostRequest({...post, likeCount: post.likeCount + 1})
        );
    }, [dispatch, post])

    const handleLikeMoreIcon = ()=>{
        console.log('xin chao')
    }

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updateAt).format('HH:MM MMM DD,YYYY')}
                action={
                    <IconButton
                        style={{position: 'relative'}}
                        onClick={()=>setDeleteBtn(!deleteBtn)}
                    >
                    {
                        deleteBtn ? <ul 
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    fontSize: '1rem',
                                    backgroundColor: '#fff',
                                    color: '#888',
                                    listStyle: 'none',
                                    top: '100%',
                                    zIndex: '100',
                                }}
                            >
                                <li
                                    onClick={console.log('chao baon')}
                                >Delete</li>
                            </ul> : ''
                    }
                        <MoreVertIcon/>
                    </IconButton>
                }
            />
            <div style={{cursor: 'pointer'}}>
            <CardMedia 
                component = 'img'
                src={post.attachment || ''}
                alt='img'
                title='Title'
                // style={{height: '150px'}}
                className={classes.images}
            />
            <CardContent style={{height: '60px'}}>
                <Typography variant='h5' color='textPrimary'>
                    {post.title}
                </Typography>
                <Typography variant='body2' component='p' color='textSecondary'>
                    {post.content}
                </Typography>
            </CardContent>
            </div>
            <CardActions>
                <IconButton onClick={handleLikeClick}>
                    <FavoriteIcon/>
                    <Typography component='span' color='textSecondary'>
                        {`${post.likeCount} likes`}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post;
