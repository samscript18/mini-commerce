'use client';

import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/common/button';
import { Badge } from '@/components/common/badge';
import { Separator } from '@/components/common/separator';
import { useCart } from '@/lib/store/cart.store';
import { ProductCard } from '@/components/ui/product';
import { Footer } from '@/components/layout/footer';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { getProduct, getProducts } from '@/lib/services';
import { toastSuccess } from '@/lib/utils/toast';
import Image from 'next/image';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: products = [] } = useQuery({
    queryFn: () => getProducts(),
    queryKey: ['get-products'],
  });

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getProduct(slug),
    queryKey: ['get-products', slug],
  });

  const [quantity, setQuantity] = useState<number>(1);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    if (!product || !product.inStock) return;

    addItem(product, quantity);
    toastSuccess(`Item has been added to your cart.`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-4 w-32"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-6 bg-muted rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-destructive mb-2">Product Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="md:container md:mx-auto px-4 sm:px-[2rem] lg:px-[4rem] py-8">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <Button variant="ghost" className="mb-6 pl-0 hover:pl-4" asChild>
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {!product.inStock && <Badge variant="destructive">Out of Stock</Badge>}
              </div>

              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-success shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4 max-md:hidden">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full"
                  size="lg"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Link href={'/cart'} className="w-full">
                  <Button
                    disabled={!product.inStock}
                    variant="outline"
                    className="w-full border border-primary"
                    size="lg"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Buy Now' : 'Out of Stock'}
                  </Button>
                </Link>
              </div>
              <div className="flex space-x-4 md:hidden">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Link href={'/cart'} className="w-full">
                  <Button
                    disabled={!product.inStock}
                    variant="outline"
                    className="w-full border border-primary"
                    size="sm"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Buy Now' : 'Out of Stock'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[4rem] gap-6 animate-fade-in">
          {products.slice(0, 4).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {products.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
