import PasswordChangeBox from './input-box';
import styles from './style.module.css';

function ProfileSection() {
	return (
		<section>
			<header>
				<h1 className={styles.header_title}>Your User Profile</h1>
			</header>
			<PasswordChangeBox />
		</section>
	);
}

export default ProfileSection;
