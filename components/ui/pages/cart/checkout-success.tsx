'use client';

import { useEffect } from 'react';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/card';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SuccessfulCheckoutPage() {
	const searchParams = useSearchParams();
	const orderId = searchParams.get('orderId');
	const total = searchParams.get('total');
	const router = useRouter();

	useEffect(() => {
		if (!orderId) {
			router.push('/products');
		}
	}, [orderId]);

	if (!orderId) {
		return null;
	}

	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto px-4 py-8">
				<div className="max-w-2xl mx-auto text-center">
					<div className="mb-8 animate-scale-in">
						<CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
						<h1 className="text-3xl font-bold text-success mb-2">Order Confirmed!</h1>
						<p className="text-lg text-muted-foreground">
							Thank you for your purchase. Your order has been placed successfully.
						</p>
					</div>

					<Card className="mb-8 animate-fade-in">
						<CardHeader>
							<CardTitle className="text-xl">Order Details</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between items-center py-2 border-b">
								<span className="text-muted-foreground">Order Number</span>
								<span className="font-mono font-bold">#{orderId}</span>
							</div>

							<div className="flex justify-between items-center py-2 border-b">
								<span className="text-muted-foreground">Total Amount</span>
								<span className="font-bold text-lg">${Number(total)?.toFixed(2)}</span>
							</div>

							<div className="flex justify-between items-center py-2">
								<span className="text-muted-foreground">Order Date</span>
								<span>{new Date().toLocaleDateString()}</span>
							</div>
						</CardContent>
					</Card>

					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
							<CardContent className="p-6 text-center">
								<Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
								<h3 className="font-semibold mb-2">Confirmation Email</h3>
								<p className="text-sm text-muted-foreground">
									A confirmation email has been sent to your email address with order details.
								</p>
							</CardContent>
						</Card>

						<Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
							<CardContent className="p-6 text-center">
								<Package className="h-8 w-8 mx-auto mb-3 text-primary" />
								<h3 className="font-semibold mb-2">Estimated Delivery</h3>
								<p className="text-sm text-muted-foreground">
									Your order will be delivered within 3-5 business days.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
						<h2 className="text-xl font-semibold mb-4">What's Next?</h2>

						<div className="space-y-3 text-left max-w-md mx-auto">
							<div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
								<div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
									1
								</div>
								<span className="text-sm">You'll receive an email confirmation shortly</span>
							</div>

							<div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
								<div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
									2
								</div>
								<span className="text-sm">We'll send you a tracking number when your order ships</span>
							</div>

							<div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
								<div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
									3
								</div>
								<span className="text-sm">Enjoy your new products!</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
						<Button asChild>
							<Link href="/">
								Continue Shopping
								<ArrowRight className="h-4 w-4 ml-2" />
							</Link>
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
