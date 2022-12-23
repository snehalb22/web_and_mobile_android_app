import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Mens Climbing Shoes',
      price: 55,
      image: '../../assets/products/shoe-1.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens Boat Shoes',
      price: 34,
      image: '../../assets/products/shoe-2.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens Sports Shoes',
      price: 40,
      image: '../../assets/products/shoe-3.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens Elevator shoes',
      price: 55,
      image: '../../assets/products/shoe-4.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Womens Sneakers',
      price: 32,
      image: '../../assets/products/shoe-5.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens Snow Shoes',
      price: 40,
      image: '../../assets/products/shoe-6.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
