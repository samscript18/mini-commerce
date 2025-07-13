'use client';

import { useState } from 'react';
import { Lock, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/common/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/card';
import { Separator } from '@/components/common/separator';
import { useCart } from '@/lib/store/cart.store';
import { Footer } from '@/components/layout/footer';
import { toastSuccess } from '@/lib/utils/toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getTotalPrice();
  const total = getTotalPrice();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();

    clearCart();
    setIsProcessing(false);

    toastSuccess('Order placed successfully!');

    router.push(`/success?orderId=${orderId}&total=${total}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="md:container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some products to your cart before checkout.
            </p>
            <Button onClick={() => router.push('/products')}>Continue Shopping</Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="md:container md:mx-auto px-4 sm:px-[2rem] lg:px-[4rem] py-8">
        <Button
          variant="ghost"
          className="pl-0 hover:pl-2 mb-6"
          onClick={() => router.push('/cart')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Secure Checkout</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            SSL Encrypted & Secure
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="md:max-w-[60vw] mx-auto">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-12 h-12 bg-muted rounded overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Lock className="h-4 w-4 mr-2" />
                      Place Order
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By placing your order, you agree to our terms and conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
