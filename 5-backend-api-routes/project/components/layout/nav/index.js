import Link from 'next/link';
import classes from './style.module.css';

function Nav() {
	return (
		<nav className={classes.nav}>
			<Link href='/'>
				<a className={classes.nav_link}>Dev Events</a>
			</Link>
			<div>
				<ul className={classes.nav_list}>
					<li>
						<Link href='/events'>
							<a className={classes.nav_link}>Browse All Events</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
