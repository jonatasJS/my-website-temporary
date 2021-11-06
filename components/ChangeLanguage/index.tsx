import Image from 'next/image';

import style from "../../styles/ChangeLanguage.module.css";
// import { I18n } from '../../translate/i18n';

export default function ChangeLanguage() {
	async function handleClick(lang: string) {

		await localStorage.setItem('i18nextLng', `${lang}`);
		return window.location = window.location;
	}

	return (
		<>
			<div className={style.landg}>
				<ul>
					<li>
						<span>
							PT
							<button onClick={() => handleClick('pt-BR')}>
								<Image
									src={`https://flagicons.lipis.dev/flags/4x3/br.svg`}
									width={40}
									height={40}
									title="Português"
								/>
							</button>
						</span>
					</li>
					<li>
						<span>
							EN
							<button onClick={() => handleClick('en-US')}>
								<Image
									src={`https://flagicons.lipis.dev/flags/4x3/us.svg`}
									width={40}
									height={40}
									title="English"
								/>
							</button>
						</span>
					</li>
				</ul>
			</div>
		</>
	);
}