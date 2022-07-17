import classes from './style.module.css';

function LogisticsItem(props) {
	const { icon: Icon } = props;

	return (
		<li className={classes.logistic_item}>
			<span className={classes.logistic_item_icon}>
				<Icon />
			</span>
			<span className={classes.logistic_item_text}>{props.children}</span>
		</li>
	);
}

export default LogisticsItem;
