import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { FaBars as BarsIcon } from 'react-icons/fa';

import { I18n } from '../../translate/i18n';
import style from '../../styles/NavStyle.module.css'

export default function Navbar() {
	const [pathname, setPathname] = useState(String)
	const path = Router;

	useEffect(() => {
		const route = path.asPath;

		setPathname(route)
	}, []);

	return (
		<>
			<nav className={style.nav}>
				<Link href="/">
					<h1 className={style.title}>Next Rocket</h1>
				</Link>
				<BarsIcon className={style.bars} />
				<div className={style.navMenu}>
					<Link href="/">
						{pathname  == '/' ? (
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
						{pathname  == '/contact' ? (
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
						{pathname  == '/about' ? (
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