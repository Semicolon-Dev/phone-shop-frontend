export type Product = {
  id: string,
  name: string,
  price: number,
};

export type ProductDetails = Product;

export interface ProductsState {
  list: Product[],
  productDetails: ProductDetails | null,
}

// Actions
const GET_MANY = 'phone-shop/products/GET_MANY';
const GET_ONE = 'phone-shop/products/GET_ONE';

export interface GetManyProducts {
  type: typeof GET_MANY,
  payload: {
    products: Product[];
  };
}

export interface GetOneProduct {
  type: typeof GET_ONE,
  payload: {
    product: ProductDetails;
  };
}

export type Action = GetManyProducts | GetOneProduct;

// Action Creators
export function getManyProducts(products: Product[]): GetManyProducts {
  return {
    type: GET_MANY,
    payload: {
      products
    }
  };
}

// Action Creators
export function getOneProduct(product: ProductDetails): GetOneProduct {
  return {
    type: GET_ONE,
    payload: {
      product
    }
  };
}


const initialState: ProductsState = {
  list: [],
  productDetails: null,
};

// Reducer
export default function reducer(state = initialState, action: Action): ProductsState {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}