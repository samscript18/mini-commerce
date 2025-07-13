import { render, screen, fireEvent, within } from '@testing-library/react';
import CartPage from '@/components/ui/pages/cart';
import { useCart } from '@/lib/store/cart.store';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/lib/store/cart.store');

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe('CartPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders empty cart state', () => {
    (useCart as unknown as jest.Mock).mockReturnValue({
      items: [],
      getTotalPrice: () => 0,
      getTotalItems: () => 0,
    });

    render(<CartPage />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByText(/continue shopping/i)).toBeInTheDocument();
  });

  test('renders items in cart with totals', () => {
    (useCart as unknown as jest.Mock).mockReturnValue({
      items: [
        {
          id: '1',
          name: 'Test Product',
          slug: 'test-product',
          image: '/test.jpg',
          category: 'Books',
          price: 100,
          quantity: 2,
        },
      ],
      getTotalPrice: () => 200,
      getTotalItems: () => 2,
      updateQuantity: jest.fn(),
      removeItem: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartPage />);

    expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();

    // Expect at least one "$200.00" value in the cart page
    const totalPrices = screen.getAllByText('$200.00');
    expect(totalPrices.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByRole('button', { name: /Proceed to Checkout/i })).toBeInTheDocument();
  });

  test('calls router.push on checkout', () => {
    (useCart as unknown as jest.Mock).mockReturnValue({
      items: [
        {
          id: '1',
          name: 'Test Product',
          slug: 'test-product',
          image: '/test.jpg',
          category: 'Books',
          price: 100,
          quantity: 1,
        },
      ],
      getTotalPrice: () => 100,
      getTotalItems: () => 1,
      updateQuantity: jest.fn(),
      removeItem: jest.fn(),
      clearCart: jest.fn(),
    });

    render(<CartPage />);
    fireEvent.click(screen.getByRole('button', { name: /Proceed to Checkout/i }));

    expect(mockPush).toHaveBeenCalledWith('/checkout');
  });
});
