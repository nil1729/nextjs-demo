import styles from './style.module.css';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function CommentList({ event_id }) {
	const { data, error } = useSWR(`/api/comment/${event_id}`, fetcher);

	if (error) {
		return (
			<section className={styles.comment_list_container}>
				<h4 className='center'>Error while loading comments</h4>
			</section>
		);
	}

	if (data) {
		return (
			<section className={styles.comment_list_container}>
				<ul className={styles.comment_list}>
					{data.map((item) => (
						<li key={item.id} className={styles.comment_list_item}>
							<p>{item.text}</p>
							<p>By {item.name}</p>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

export default CommentList;
