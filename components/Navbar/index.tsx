import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { FaBars as BarsIcon } from 'react-icons/fa';
import {
	UilMoon as Moon,
	UilSun as Sun,
	UilEstate as Home,
	UilUser as About,
	UilFileAlt as Skill,
	UilBriefcaseAlt as Services,
	UilMessage as Contacts,
	UilTimes as Exit,
	UilApps as Menu
} from '@iconscout/react-unicons';

import { useTheme } from '../../contexts/ThemeContext';
import { I18n } from '../../translate/i18n';
import style from '../../styles/NavStyle.module.css';

export default function Navbar() {
	const [pathname, setPathname] = useState(String);
	const [toogledSidebarMobile, setToogledSidebarMobile] = useState(false);
	const [toogledSidebarMobiled, setToogledSidebarMobiled] = useState(false);
	const { changeTheme, theme, lock } = useTheme();
	const path = Router;

	useEffect(() => {
		if (localStorage.getItem('theme') == '' || localStorage.getItem('theme') == null) localStorage.setItem('theme', 'light');
		const route = path.asPath;

		
		setPathname(route)
	}, []);
	
	setInterval(() => {if (document?.height <= 768) setToogledSidebarMobiled(true)}, 200)
	// useEffect(function mont() {
	//   function onScroll() {
	// 		const footer = document.querySelector('footer')
	// 		const total: number = footer?.offsetHeight + 40 + 80

	//     if (document.body.scrollHeight == total || document.documentElement.scrollHeight == total) {
	// 			setLimited("absolute");
	// 		} else {
	// 			setLimited("fixed");
	//     }
	//   }

	//   window.addEventListener("scroll", onScroll);
	// });

	return (
		<>
			<nav className={toogledSidebarMobile ? style.navMenuMobile : style.nav}>
				<Link href="/">
					<a className={style.title}>
						<h1>Next <span>Rocket</span></h1>
						<div className={style.toogleTheme}>
							{theme == 'dark' ?
								<Moon
									className={style.moonIcon}
									title={`Toogle theme to ${theme == 'dark' && 'light!'}`}
									width="20"
									height="20"
									onClick={changeTheme}
								/>
								:
								<Sun
									className={style.sunIcon}
									title={`Toogle theme to ${theme == 'light' && 'dark!'}`}
									width="20"
									height="20"
									onClick={changeTheme}
								/>}
							{toogledSidebarMobile == false ? '' :
								<Exit
									className={style.exit}
									onClick={() => setToogledSidebarMobile(!toogledSidebarMobile)}
								/>}
						</div>
					</a>
				</Link>
				<div className={style.navMenu}>
					<ul>
						<li>
							<Link href="/">
								{pathname == '/' ? (
									<a className={style.active}>
										<Home
											width="20"
											height="20"
										/>
										{I18n.t('messages.home')}
									</a>
								) : (
									<a className={style.navLink}>
										<Home
											width="20"
											height="20"
										/>
										{I18n.t('messages.home')}
									</a>
								)}
							</Link>
						</li>
						<li>
							<Link href="/contact">
								{pathname == '/contact' ? (
									<a className={style.active}>
										<Contacts
											width="20"
											height="20"
										/>
										{I18n.t('messages.contact')}
									</a>
								) : (
									<a className={style.navLink}>
										<Contacts
											width="20"
											height="20"
										/>
										{I18n.t('messages.contact')}
									</a>
								)}
							</Link>
						</li>
						<li>
							<Link href="/about">
								{pathname == '/about' ? (
									<a className={style.active}>
										<About
											width="20"
											height="20"
										/>
										{I18n.t('messages.aboutUs')}
									</a>
								) : (
									<a className={style.navLink}>
										<About
											width="20"
											height="20"
										/>
										{I18n.t('messages.aboutUs')}
									</a>
								)}
							</Link>
						</li>
						<li>
							<Link href="/services">
								{pathname == '/services' ? (
									<a className={style.active}>
										<Services
											width="20"
											height="20"
										/>
										Skills
									</a>
								) : (
									<a className={style.navLink}>
										<Services
											width="20"
											height="20"
										/>
										Serviços
									</a>
								)}
							</Link>
						</li>
						<li>
							<Link href="/skills">
								{pathname == '/skills' ? (
									<a className={style.active}>
										<Skill
											width="20"
											height="20"
										/>
										Skills
									</a>
								) : (
									<a className={style.navLink}>
										<About
											width="20"
											height="20"
										/>
										Skills
									</a>
								)}
							</Link>
						</li>
						<li>
							<Link href="/signup">
								Sign Up
							</Link>
						</li>
					</ul>

					{toogledSidebarMobile == true &&
						<div>
							<nav className={style.navBtn}>
								<Link href="/signin"><a className={style.navBtnLink}>Sign In</a></Link>
							</nav>
						</div>}
				</div>

				{toogledSidebarMobiled == true &&
					<div>
						<nav className={style.navBtn}>
							<Link href="/signin"><a className={style.navBtnLink}>Sign In</a></Link>
						</nav>
					</div>}

				{toogledSidebarMobile == true ? '' :
					<Menu
						className={style.bars}
						onClick={() => setToogledSidebarMobile(!toogledSidebarMobile)}
					/>}
			</nav>
		</>
	);
}

/**
 * <p className={styles.footerLinks}>
						<Link href="/">{I18n.t('messages.home')}</Link>
						<br />
						<Link href="/contact">{I18n.t('messages.contact')}</Link>
						<br />
						<Link href="/about">{I18n.t('messages.aboutUs')}</Link>
					</p>
 */