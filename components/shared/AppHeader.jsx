import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8"
		>
			{/* Header */}
			<div className="z-10 w-full mx-auto flex justify-between items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex items-center">
					<div>
						<Link href="/">
							{activeTheme === 'dark' ? (
								<Image
									src={logoDark}
									className="w-36 cursor-pointer"
									alt="Dark Logo"
									width={150}
									height={1}
								/>
							) : (
								<Image
									src={logoLight}
									className="w-36 cursor-pointer"
									alt="Light Logo"
									width={150}
									height={120}
								/>
							)}
						</Link>
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden ml-4">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="hidden sm:flex items-center space-x-8">
					<div
						className="text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light"
						aria-label="Projects"
					>
						<Link href="/projects">Projects</Link>
					</div>
					<div
						className="text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light"
						aria-label="About Me"
					>
						<Link href="/about">About Me</Link>
					</div>

					<div
						className="text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light"
						aria-label="Contact"
					>
						<Link href="/contact">Contact</Link>
					</div>
				</div>

				{/* Header right section buttons */}
				<div className="flex items-center space-x-4">
					<div className="hidden sm:block">
						<button
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Email Me Button"
						>
							Email Me
						</button>
					</div>

					{/* Theme switcher - visible on all screens */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>

			{/* Mobile menu dropdown */}
			{showMenu && (
				<div className="sm:hidden bg-white dark:bg-gray-800 py-4 px-6 shadow-lg rounded-lg mt-2">
					<div className="flex flex-col space-y-4">
						<div className="text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light">
							<Link href="/projects" aria-label="Projects">
								Projects
							</Link>
						</div>
						<div className="text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light">
							<Link href="/about" aria-label="About Me">
								About Me
							</Link>
						</div>
						<div className="text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light">
							<Link href="/contact" aria-label="Contact">
								Contact
							</Link>
						</div>
						<div>
							<button
								onClick={showHireMeModal}
								className="font-general-medium text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
								aria-label="Email Me Button"
							>
								Email Me
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Hire Me Modal */}
			{showModal && (
				<HireMeModal
					onClose={showHireMeModal}
					onRequest={showHireMeModal}
				/>
			)}
		</motion.nav>
	);
}

export default AppHeader;