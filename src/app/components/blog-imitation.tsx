import * as React from 'react';
import { connect } from 'react-redux';
import { changeCounter, changeText, updatePosts } from './blog-data-store/actions';
import { BlogState } from './blog-data-store/reducer';
import { divide } from 'lodash';

interface Props {
	someState: BlogState;
}

class BlogImitationInner extends React.Component<Props, {}> {
	componentDidMount() {
	}

	increment = () => {
		(this.props as any).dispatch(changeCounter(1));
	}

	decrement = () => {
		(this.props as any).dispatch(changeCounter(-1));
	}

	send = () => {
		(this.props as any).dispatch(updatePosts(this.props.someState.text));
	}

	keepPost = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = event.target.value;
		if (!text) {
			return;
		}
		(this.props as any).dispatch(changeText(text));
	}

	render() {
		const {someState} = this.props;
		if (!someState) {
			return null;
		}
		return (
			<div>
				Blog imitation
				<div>
					{someState.counter}
					<button onClick={this.increment}>Increment counter</button>
					<button onClick={this.decrement}>Decrement counter</button>
					<div>
						<textarea cols={30} rows={10} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => this.keepPost(event)}></textarea>
						<button onClick={this.send}>Send post</button>
					</div>
					<div>New posts</div>
					<div>
						{someState.posts && someState.posts.length
						? someState.posts.map((post, index) => <div key={`${Math.round(Math.random() * 1000000) + index}`}>{post}</div>)
						: null}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: Props) => {
	return {
		someState: state.someState,
	};
};

const BlogImitation = connect(mapStateToProps)(BlogImitationInner);

export default BlogImitation;
