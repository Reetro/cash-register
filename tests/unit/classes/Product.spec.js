import Product from '@/Classes/Product'

describe('Product', () => {

  describe('constructor', () => {
    const testCases = [
      [10, '$10'],
      [10.10, '$10.10'],
      [.1, '$0.10'],
      ['$10', '$10'],
      ['.1', '$0.10'],
      ['.10', '$0.10'],
      ['0.10', '$0.10'],
      ['10.10', '$10.10'],
      ['010.10', '$10.10'],
      ['$10.10', '$10.10']
    ]

    for (let testCase of testCases) {
      const [input, output] = testCase
      describe('called with the '+ typeof input +' '+ input +' for price', () => {
        it('converts the input to Money and returns "'+ output +'" for price', () => {
          const p = new Product("x", input, "1")
          expect(p.price).toMatch(output)
        })
      })
    }
  })

})
