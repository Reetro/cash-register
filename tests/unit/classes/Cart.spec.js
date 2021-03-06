import Cart from '@/Classes/Cart'
import Product from '@/Classes/Product'
import CartItem from '@/Classes/CartItem'

describe('Cart', () => {

  describe('constructor', () => {
    describe('called with an array of Products', () => {
      it('converts the Products to CartItems with quantity 1 by default', () => {
        const items = [
          new Product("x", 10.10, "1"),
          // NOTE: We assume that the first product for a given ID is correct and ignore any other values.
          new Product("x", 15.10, "1"),
          new Product("b", 10.10, "2"),
          new Product("c", 5.15, "3")
        ]
        const cart = new Cart(items)
        expect(cart.items).toBeInstanceOf(Array)
        expect(cart.items.length).toEqual(3)
        expect(cart.items[0]).toBeInstanceOf(CartItem)
        expect(cart.items[0].product).toBe(items[0])
        expect(cart.items[0].product.price).toMatch('$10.10')
        expect(cart.items[0].quantity).toEqual(2)
        expect(cart.items[1].quantity).toEqual(1)
      })
    })

    describe('called with an array of CartItems', () => {
      it('sets the cart items', () => {
        const items = [
          new CartItem(new Product("x", 10.10, "1"), 2),
          new CartItem(new Product("b", 10.10, "2"), 1),
          new CartItem(new Product("c", 5.15, "3"), 1)
        ]
        const cart = new Cart(items);
        expect(cart.items).toBeInstanceOf(Array)
        expect(cart.items.length).toEqual(3)
        expect(cart.items[0]).toBeInstanceOf(CartItem)
        // NOTE: We gave up on dealing with the fact that these are copies.
        expect(cart.items[0]).toMatchObject(items[0])
        expect(cart.items[0].product).toBe(items[0].product)
        expect(cart.items[0].quantity).toEqual(2)
        expect(cart.items[1].quantity).toEqual(1)
      })
    })
  })

  describe('getTotalPrice', () => {

    describe('with an empty cart', () => {
      it('gets the total price', () => {
        const cart = new Cart()
        expect(cart.getTotalPrice()).toEqual(0)
      })
    })

    describe('with items in the cart', () => {
      it('gets the total price', () => {
        const items = [
          new CartItem(new Product("x", 10.10, "1"), 2),
          new CartItem(new Product("b", 10.10, "2"), 1),
          new CartItem(new Product("c", 5.15, "3"), 1)
        ]
        const cart = new Cart(items)
        expect(cart.getTotalPrice()).toEqual(35.45)
      })
    })

  })

})
