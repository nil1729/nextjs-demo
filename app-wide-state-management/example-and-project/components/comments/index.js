import { useState } from 'react';
import CommentInputBox from './comment-box';
import CommentList from './comment-list';
import styles from './style.module.css';

function CommentSection({ event_id }) {
	const [show_status, set_show_status] = useState(false);

	return (
		<section>
			<div className={styles.show_btn_div}>
				<button
					onClick={() => {
						set_show_status(!show_status);
					}}
				>
					{show_status ? 'Hide' : 'Show'} Comments
				</button>
			</div>
			{show_status && (
				<>
					<CommentInputBox event_id={event_id} />
					<CommentList event_id={event_id} />
				</>
			)}
		</section>
	);
}

export default CommentSection;
