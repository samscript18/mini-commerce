'use client';

import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/card';
import { Separator } from '@/components/common/separator';
import { useCart } from '@/lib/store/cart.store';
import { Footer } from '@/components/layout/footer';
import { toastSuccess } from '@/lib/utils/toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CartPage() {
	const router = useRouter();
	const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getTotalItems } = useCart();

	const subtotal = getTotalPrice();
	const total = getTotalPrice();

	const handleRemoveItem = (productId: string, productName: string) => {
		removeItem(productId);
		toastSuccess(`${productName} has been removed from your cart.`);
	};

	const handleClearCart = () => {
		clearCart();
		toastSuccess('All items have been removed from your cart.');
	};

	if (items.length === 0) {
		return (
			<div className="min-h-screen bg-background">
				<main className="container mx-auto  sm:pmx-[2rem] lg:mx-[4rem] px-4 py-8">
					<div className="text-center py-12">
						<ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
						<h1 className="text-4xl font-bold mb-2">Your cart is empty</h1>
						<p className="text-muted-foreground mb-6">Add some products to your cart to get started.</p>
						<Button asChild>
							<Link href="/products">Continue Shopping</Link>
						</Button>
					</div>
				</main>
			</div>
		);
	}

	return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 sm:px-[2rem] lg:px-[4rem] py-8">
        <Button variant="ghost" className="pl-0 hover:pl-2" asChild>
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
          </div>
          <Button variant="outline" onClick={handleClearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/product/${item.slug}`}
                            className="font-semibold hover:text-primary transition-colors line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                          <p className="text-lg font-bold text-primary mt-2">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex max-md:flex-col md:items-center justify-between max-md:gap-4 mt-4">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <p className="text-lg font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Button className="w-full" size="lg" onClick={() => router.push('/checkout')}>
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Secure checkout with SSL encryption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
