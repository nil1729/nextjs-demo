import Link from 'next/link';
import classes from './style.module.css';
import { useSession, signOut } from 'next-auth/react';

function Nav() {
	const { status } = useSession();

	const logoutHandler = () => {
		signOut();
	};

	return (
		<nav className={classes.nav}>
			<Link href='/'>
				<a className={classes.nav_link}>Dev Events</a>
			</Link>
			<div>
				<ul className={classes.nav_list}>
					{status === 'unauthenticated' && (
						<li className={classes.nav_list_item}>
							<Link href='/auth'>
								<a className={classes.nav_link}>Login</a>
							</Link>
						</li>
					)}
					{status === 'authenticated' && (
						<li className={classes.nav_list_item}>
							<Link href='/profile'>
								<a className={classes.nav_link}>Profile</a>
							</Link>
						</li>
					)}
					<li className={classes.nav_list_item}>
						<Link href='/events'>
							<a className={classes.nav_link}>Browse All Events</a>
						</Link>
					</li>
					{status === 'authenticated' && (
						<li className={classes.nav_list_item}>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
