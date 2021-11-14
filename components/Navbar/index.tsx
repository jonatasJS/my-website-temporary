import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { FaBars as BarsIcon } from 'react-icons/fa';
import { MdOutlineNightlight as MoonIcon, MdOutlineLightMode as SunIcon } from 'react-icons/md';

import { useTheme } from '../../contexts/ThemeContext';
import { I18n } from '../../translate/i18n';
import style from '../../styles/NavStyle.module.css';

export default function Navbar() {
	const [pathname, setPathname] = useState(String);
	const [limited, setLimited] = useState(String);
	const { changeTheme, theme, lock } = useTheme();
	const path = Router;

	useEffect(() => {
		if (localStorage.getItem('theme') == '' || localStorage.getItem('theme') == null) localStorage.setItem('theme', 'light');
		const route = path.asPath;

		setPathname(route)
	}, []);

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
			<nav className={style.nav}>
				<Link href="/">
					<a>
						<h1 className={style.title}>Next Rocket</h1>
					</a>
				</Link>
				<BarsIcon className={style.bars} />
				<div className={style.navMenu}>
					<Link href="/">
						{pathname == '/' ? (
							<a className={style.active}>
								{I18n.t('messages.home')}
							</a>
						) : (
							<a className={style.navLink}>
								{I18n.t('messages.home')}
							</a>
						)}
					</Link>
					<Link href="/contact">
						{pathname == '/contact' ? (
							<a className={style.active}>
								{I18n.t('messages.contact')}
							</a>
						) : (
							<a className={style.navLink}>
								{I18n.t('messages.contact')}
							</a>
						)}
					</Link>
					<Link href="/about">
						{pathname == '/about' ? (
							<a className={style.active}>
								{I18n.t('messages.aboutUs')}
							</a>
						) : (
							<a className={style.navLink}>
								{I18n.t('messages.aboutUs')}
							</a>
						)}
					</Link>
					<Link href="/signup">
						Sign Up
					</Link>
				</div>
				<nav className={style.navBtn}>
					<Link href="/signin"><a className={style.navBtnLink}>Sign In</a></Link>
				</nav>
				<div className={style.toogleTheme}>
					{theme == 'dark' ?
						<MoonIcon
							className={style.moonIcon}
							title={`Toogle theme to ${theme == 'dark' && 'light'}`}
							width="10"
							height="10"
							onClick={changeTheme}
						/>
						:
						<SunIcon
							className={style.sunIcon}
							title={`Toogle theme to ${theme == 'light' && 'dark'}`}
							width="10"
							height="10"
							onClick={changeTheme}
						/>}
				</div>
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