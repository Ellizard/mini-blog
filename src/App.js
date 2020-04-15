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

import {deletePost, addPost, editPost} from './redux/actions/posts';

class App extends PureComponent {

	render() {

		return (
			<Container>
				<Header/>

				<Route path="/" exact>
					<PostList
						posts={this.props.posts}
						onDelete={this.props.onDelete}
					/>
				</Route>

				<Route path="/new-post">
					<PostForm submitAction={this.props.onAdd} />
				</Route>

				<Route path="/edit/:id">
					<PostForm
						posts={this.props.posts}
						submitAction={this.props.onEdit}
					/>
				</Route>

				<Route path="/post/:id">
					<Post posts={this.props.posts} />
				</Route>

			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: (id) => dispatch(deletePost(id)),
		onAdd: (postData) => dispatch(addPost(postData)),
		onEdit: (postData, id) => dispatch(editPost(postData, id)),
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
