import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Bike Shop !";
export const siteTitle = "bike shop";

function Layout({children}) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<div className={styles.header_inner}>
					<Link href="/" >
						<a>
							<h1 className={`${utilStyles.heading2xl} ${styles.title}`} >
								{name}
							</h1>
						</a>
					</Link>
				</div>
			</header>
			<main>
				{children}
			</main>
		</div>
	);
}

export default Layout;