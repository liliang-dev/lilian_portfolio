'use client'

import { motion } from 'framer-motion';

/**
 * Component to load animation when changing route
 */
export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.75 }}
			className='flex flex-col gap-10'
		>
			{children}
		</motion.div>
	)
}