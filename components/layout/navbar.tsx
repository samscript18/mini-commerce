'use client';

import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/common/button';
import { Badge } from '@/components/common/badge';
import { useCart } from '@/lib/store/cart.store';
import { useState } from 'react';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Navbar() {
	const itemsCount = useCart((state) => state.getTotalItems());
	const totalItems = useCart((state) => state.getTotalItems());
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const router = useRouter();

	return (
		<>
			<header
				className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
					isMenuOpen && 'max-md:hidden'
				}`}>
				<div className="container mx-auto px-4 sm:px-[2rem] lg:px-[4rem]">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center space-x-4">
							<Link href="/" className="flex items-center space-x-2">
								<div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
									<span className="text-primary-foreground font-bold text-sm">MC</span>
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
									Mini-Commerce
								</span>
							</Link>
						</div>

						<nav className="hidden md:flex items-center space-x-8">
							{navLinks.map((link, index) => {
								return (
									<Link
										key={index}
										href={link.link}
										className="text-sm font-medium text-foreground hover:text-primary transition-colors">
										{link.name}
									</Link>
								);
							})}
						</nav>

						<div className="flex items-center space-x-4">
							<Button variant="ghost" size="icon" className="relative" onClick={() => router.push('/cart')}>
								<ShoppingCart className="h-4 w-4" />
								{itemsCount > 0 && (
									<Badge
										variant="destructive"
										className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
										{itemsCount > 99 ? '99+' : itemsCount}
									</Badge>
								)}
								<span className="sr-only">Shopping cart</span>
							</Button>

							<Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
								{!isMenuOpen && <Menu className="h-4 w-4" />}
							</Button>
						</div>
					</div>
				</div>
			</header>
			{isMenuOpen && (
				<div className="md:hidden p-4 w-screen h-screen bg-primary">
					<div className="flex justify-between items-center">
						<Link href="/" className="flex items-center space-x-2">
							<div className="h-10 w-10 bg-accent/50 rounded-lg flex items-center justify-center">
								<span className="text-primary-foreground font-extrabold text-sm">MC</span>
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-white">
								Mini-Commerce
							</span>
						</Link>
						<div className="flex justify-end items-end">
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden bg-accent/50"
								onClick={() => setIsMenuOpen(false)}>
								{isMenuOpen && <X className="h-4 w-4 text-white font-extrabold" />}
							</Button>
						</div>
					</div>
					<nav className="flex flex-col justify-center items-center gap-[4rem] pt-[15%]">
						<Link
							href="/"
							className="block font-semibold py-2 text-white hover:text-primary"
							onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>
						<Link
							href="/products"
							className="block font-semibold py-2 text-white hover:text-primary"
							onClick={() => setIsMenuOpen(false)}>
							Products
						</Link>
						<Link
							href="/cart"
							className="flex font-semibold items-center py-2 text-white hover:text-primary"
							onClick={() => setIsMenuOpen(false)}>
							<ShoppingCart className="w-5 h-5 mr-2" />
							Cart ({totalItems})
						</Link>
					</nav>
				</div>
			)}
		</>
	);
}
