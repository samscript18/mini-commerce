import { Star } from 'lucide-react';
import { Button } from '@/components/common/button';
import { Card, CardContent, CardFooter } from '@/components/common/card';
import { Badge } from '@/components/common/badge';
import { useCart } from '@/lib/store/cart.store';
import { Product } from '@/lib/types';
import { toastSuccess } from '@/lib/utils/toast';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product.inStock) {
      toast.warning('This product is currently unavailable.');
      return;
    }

    addItem(product, 1);
    toastSuccess(`${product.name} has been added to your cart.`);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-product hover:shadow-smooth transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            {!product.inStock && (
              <Badge variant="destructive" className="text-xs">
                Out of Stock
              </Badge>
            )}
          </div>

          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          size="sm"
          className="shrink-0"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
