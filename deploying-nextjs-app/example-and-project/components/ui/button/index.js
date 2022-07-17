import Link from 'next/link';
import classes from './style.module.css';
import RightArrow from '../../icons/right-arrow';

function Button({ link, title, onClick, disabled }) {
	if (link) {
		return (
			<Link href={link}>
				<a className={classes.button_link}>
					{title}
					<span>
						<RightArrow />
					</span>
				</a>
			</Link>
		);
	}
	return (
		<button
			style={{ pointerEvents: disabled ? 'none' : 'all' }}
			onClick={onClick}
			disabled={disabled}
			className={classes.general_button}
		>
			{title}
		</button>
	);
}

export default Button;
