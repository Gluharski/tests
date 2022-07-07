import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
	const [isHovered, setIsHovered] = useState(false);
	const [rotateArrow, setRotateArrow] = useState('arrow');

	const toggleMenuItems = () => {
		setIsHovered(isHovered => !isHovered);
		
		if (!isHovered) {
			setRotateArrow('rotate-dropdown-arrow');
		} else {
			setRotateArrow('arrow');
		}
	};

	const showHiddenDropdownListItems = () => {
		return (
			<ul className="dropdown">
				<li><a href="/">Football</a></li>
				<li><a href="/">Formula 1</a></li>
				<li><a href="/">Fall Guys</a></li>
			</ul>
		)
	};

	return (
		<nav className={styles['header-navbar']}>
			<ul>
				<li><a href="/">Home</a></li>
				<li onClick={toggleMenuItems}>
					Sports

					<div className={styles[rotateArrow]}></div>

					{isHovered
						? showHiddenDropdownListItems()
						: null
					}
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;