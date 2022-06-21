import { Fragment } from 'react';
import Header from './header';
import classes from './style.module.css';

function Layout(props) {
	return (
		<Fragment>
			<Header />
			<div className={classes.container}>{props.children}</div>
		</Fragment>
	);
}

export default Layout;
