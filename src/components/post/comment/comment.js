import React from "react";

const comment = (props) => {
	return (
		<div>
			<hr/>
			<p>
				{props.commentCopy}
				<br/>
			</p>
		</div>
	);
};

export default comment;