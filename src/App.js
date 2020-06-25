import React, {PureComponent} from 'react';
import Container from '@material-ui/core/Container';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Post from './components/post/post';
import PostList from './components/postList/postList';
import Header from './components/header/header';
import PostForm from './components/postForm/postForm';

import 'typeface-roboto';

import './App.scss';

import {editPost, loadPosts, addNewPost, removePost} from './redux/actions/posts';

class App extends PureComponent {

	componentDidMount() {
		this.props.loadPosts();
	}

	render() {

		return (
			<Container>
				<Header/>

				<Route path="/" exact>
					<PostList
						posts={this.props.posts.posts}
						onDelete={this.props.removePost}
						odEdit={this.props.editPost}
					/>
				</Route>

				<Route path="/new-post">
					<PostForm submitAction={this.props.addNewPost} />
				</Route>

				<Route path="/edit/:id">
					<PostForm
						posts={this.props.posts.posts}
						submitAction={this.props.editPost}
					/>
				</Route>

				<Route path="/post/:id">
					<Post
						posts={this.props.posts.posts}
					/>
				</Route>

			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		loading: state.loading,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadPosts: () => dispatch(loadPosts()),
		addNewPost: (postData) => dispatch(addNewPost(postData)),
		removePost: (id) => dispatch(removePost(id)),
		editPost: (postData, id) => dispatch(editPost(postData, id)),
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
