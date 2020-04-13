import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';

class About extends PureComponent {
	state = {
		name: "test name",
		description: 'description'
	};

	render() {
		return (
			<div>
				<Typography variant="h1" component="h2" gutterBottom>
					Lorem ipsum dolor.
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					{this.state.name}
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					{this.state.description}
				</Typography>
			</div>
		);

	};

};

export default About;