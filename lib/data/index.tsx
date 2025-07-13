import { Product } from '../types';

interface NavGroup {
	name: string;
	link: string;
}

export const navLinks: NavGroup[] = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Products',
		link: '/products',
	},
];

export const mockProducts: Product[] = [
	{
		id: 'wireless-headphones',
		slug: 'wireless-headphones',
		name: 'Premium Wireless Headphones',
		price: 199.99,
		image:
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center',
		category: 'Electronics',
		description:
			'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
		features: ['Active Noise Cancellation', '30-hour battery', 'Fast charging', 'Premium materials'],
		inStock: true,
		rating: 4.8,
		reviews: 247,
	},
	{
		id: 'smart-watch',
		slug: 'smart-watch',
		name: 'Smart Fitness Watch',
		price: 299.99,
		image:
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center',
		category: 'Electronics',
		description:
			'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.',
		features: ['Heart rate monitor', 'GPS tracking', 'Water resistant', '7-day battery'],
		inStock: true,
		rating: 4.6,
		reviews: 189,
	},
	{
		id: 'laptop-bag',
		slug: 'laptop-bag',
		name: 'Professional Laptop Bag',
		price: 79.99,
		image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
		category: 'Accessories',
		description:
			'Stylish and functional laptop bag with multiple compartments and premium leather construction.',
		features: ['Genuine leather', 'Multiple compartments', 'Fits 15-inch laptops', 'Adjustable strap'],
		inStock: true,
		rating: 4.7,
		reviews: 156,
	},
	{
		id: 'wireless-speaker',
		slug: 'wireless-speaker',
		name: 'Portable Bluetooth Speaker',
		price: 89.99,
		image:
			'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center',
		category: 'Electronics',
		description:
			'Powerful portable speaker with 360-degree sound and waterproof design perfect for any adventure.',
		features: ['360-degree sound', 'Waterproof', '12-hour battery', 'Voice assistant'],
		inStock: true,
		rating: 4.5,
		reviews: 203,
	},
	{
		id: 'phone-case',
		slug: 'phone-case',
		name: 'Protective Phone Case',
		price: 24.99,
		image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop&crop=center',
		category: 'Accessories',
		description:
			'Ultra-durable phone case with military-grade protection and wireless charging compatibility.',
		features: [
			'Military-grade protection',
			'Wireless charging compatible',
			'Anti-slip grip',
			'Screen protection',
		],
		inStock: true,
		rating: 4.4,
		reviews: 342,
	},
	{
		id: 'coffee-maker',
		slug: 'coffee-maker',
		name: 'Smart Coffee Maker',
		price: 149.99,
		image:
			'https://www.foodandwine.com/thmb/KKhjQOGrxP6w9pUIg-1oYvTLGXM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-Breville_BDC650BSSUSC_2-0844-Russell-Kilgore-3x2-1-0b1018f763a04b3bae7539637b89862b.jpeg',
		category: 'Home',
		description:
			'Brew the perfect cup every time with this smart coffee maker featuring app control and programmable settings.',
		features: ['App control', 'Programmable', 'Auto-shutoff', 'Thermal carafe'],
		inStock: true,
		rating: 4.3,
		reviews: 128,
	},
	{
		id: 'desk-lamp',
		slug: 'desk-lamp',
		name: 'LED Desk Lamp',
		price: 59.99,
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
		category: 'Home',
		description:
			'Adjustable LED desk lamp with multiple brightness levels and color temperatures for optimal lighting.',
		features: [
			'Adjustable brightness',
			'Color temperature control',
			'USB charging port',
			'Energy efficient',
		],
		inStock: true,
		rating: 4.6,
		reviews: 94,
	},
	{
		id: 'gaming-mouse',
		slug: 'gaming-mouse',
		name: 'Gaming Mouse Pro',
		price: 69.99,
		image:
			'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center',
		category: 'Electronics',
		description:
			'High-precision gaming mouse with customizable RGB lighting and programmable buttons for competitive gaming.',
		features: ['High DPI sensor', 'RGB lighting', 'Programmable buttons', 'Ergonomic design'],
		inStock: false,
		rating: 4.9,
		reviews: 76,
	},
];
