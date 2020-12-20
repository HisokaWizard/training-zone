import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeText, updatePosts, updateColor } from '../blog-data-store/actions';
import { BlogState, Post } from '../blog-data-store/reducer';

interface Props {
	blogState: BlogState;
	changeText(text: string): void;
	updatePosts(posts: Post[]): void;
	updateColor(color: string): void;
	increment(value: number): void;
}

const names: {name: string; id: number}[] = [
	{name: 'Gregory', id: 1},
	{name: 'John', id: 2},
	{name: 'Rachel', id: 3},
	{name: 'Trisha', id: 4},
	{name: 'Lory', id: 5},
	{name: 'Trevor', id: 6},
	{name: 'Tiffany', id: 7},
	{name: 'Lucy', id: 8},
	{name: 'Morgan', id: 9},
	{name: 'Chuck', id: 10}
];

class BlogImitation extends React.Component<Props, {}> {
	private interval: NodeJS.Timeout;
	constructor(props: Props) {
		super(props);
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.getRandomPosts();
		}, 1000);
	}

	getRandomPosts = () => {
		const {updatePosts} = this.props;
		const url = 'https://jsonplaceholder.typicode.com/posts';
		fetch(url, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
		.then(response => {
			return response.json();
		})
		.then((resultObject: any[]) => {
			const newPosts: Post[] = [];
			const random = Math.round(Math.random() * 99);
			const author = names.find(name => resultObject[random].userId === name.id);
			newPosts.push({author: author.name, text: resultObject[random].body});
			updatePosts(newPosts);
		})
		.catch(error => console.error(error));
	}

	componentWillMount() {
		clearInterval(this.interval);
	}

	send = () => {
		const {blogState, updatePosts} = this.props;
		const post: Post = {
			author: 'Me',
			text: blogState.text
		};
		updatePosts([post]);
	}

	keepPost = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const {changeText} = this.props;
		const text = event.target.value;
		if (!text) {
			return;
		}
		changeText(text);
	}

	randomColor = () => {
		const red = Math.round(Math.random() * 255);
		const green = Math.round(Math.random() * 255);
		const blue = Math.round(Math.random() * 255);
		return `rgb(${red},${green},${blue})`;
	}

	updateColor = () => {
		const color = this.randomColor();
		this.props.updateColor(color);
	}

	increment = () => {
		this.props.increment(this.props.blogState.counter++);
	}

	render() {
		const {blogState, } = this.props;
		if (!blogState) {
			return null;
		}
		return (
			<div>
				<div className='blog-title'>Blog imitation</div>
				<div className='blog-zone'>
					<div className='blog-input'>
						<div className='blog-subtitle'>Input your post</div>
						<div className='blog-text-area'>
							<textarea cols={50} rows={10} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => this.keepPost(event)}></textarea>
						</div>
						<button className='btn btn-primary blog-send-btn' onClick={this.send}>Send post</button>
						<button className='btn btn-primary blog-send-btn' onClick={this.updateColor}>Update color</button>
						<button className='btn btn-primary blog-send-btn' onClick={this.increment}>Increment</button>
						<div style={{backgroundColor: this.props.blogState.color, width: '100px', height: '100px'}}></div>
						<div>{this.props.blogState.counter}</div>
					</div>
					<div className='blog-output'>
						<div className='blog-subtitle'>All posts</div>
						<div className='blog-posts'>
							{blogState.posts && blogState.posts.length
							? blogState.posts.map((post, index) => <div className='blog-message' key={`${Math.round(Math.random() * 1000000) + index}`}>
									<strong>{post.author}:</strong>{` ${post.text}`}
								</div>)
							: null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const putStateToProps = (state: Props) => {
	return {
		blogState: state.blogState,
	};
};

const putActionsToProps = (dispatch: any) => {
	return {
		changeText: bindActionCreators(changeText, dispatch),
		updatePosts: bindActionCreators(updatePosts, dispatch),
		updateColor: bindActionCreators(updateColor, dispatch),
	};
};

export default connect(putStateToProps, putActionsToProps)(BlogImitation);
