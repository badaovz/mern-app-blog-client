import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';


function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        console.log(posts);
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (error) {
        console.error(error);
        yield put(actions.getPosts.getPostsFailure(error))
    }
}
function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        console.log(post);
        yield put(actions.createPost.createPostSuccess(post.data))
    } catch (error) {
        console.error(error);
        yield put(actions.createPost.createPostFailure(error))
    }
}
function* updatePostSaga(action) {
    try {
        const post = yield call(api.updatePost, action.payload);
        console.log(post);
        yield put(actions.updatePost.updatePostSuccess(post.data))
    } catch (error) {
        console.error(error);
        yield put(actions.updatePost.updatePostFailure(error))
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;