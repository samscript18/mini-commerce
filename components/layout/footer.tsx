import Link from "next/link";

export function Footer() {
	return (
		<footer className="w-full bg-gray-900 text-white mt-[3rem]">
			<div className="px-4 sm:px-[2rem] lg:px-[4rem] py-12">
				<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<Link href="/" className="flex items-center space-x-2">
								<div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
									<span className="text-primary-foreground font-bold text-sm">MC</span>
								</div>
								<span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
									Mini-Commerce
								</span>
							</Link>
						</div>
						<p className="text-gray-400 mb-4">
							Your trusted online store for quality products at great prices. We're committed to providing
							excellent customer service and fast shipping.
						</p>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="/cart" className="hover:text-white transition-colors">
									Cart
								</a>
							</li>
							<li>
								<a href="/" className="hover:text-white transition-colors">
									Products
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Support</h3>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Help Center
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; {new Date().getFullYear()} Mini-Commerce. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
