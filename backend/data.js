import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nuno',
      email: 'nunorpacheco@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true, 
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Carteira chick',
        category: 'Carteiras',
        image: '/images/d2.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Cavalinho',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Carteira gira',
        category: 'Carteiras',
        image: '/images/d3.jpg',
        price: 100,
        countInStock: 10,
        brand: 'Guess',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Sapatos bonitos',
        category: 'Sapatos',
        image: '/images/d4.jpg',
        price: 220,
        countInStock: 10,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/d1.jpg',
        price: 78,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/d1.jpg',
        price: 65,
        countInStock: 10,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/d1.jpg',
        price: 139,
        countInStock: 10,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;