import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

console.log("PRODUCTS_URL", PRODUCTS_URL);
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
    }),
    getProductsByFilters: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/filter/${data}`,
      }),
    }),
    keepUnusedDataFor: 5,
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetProductsByFiltersMutation,
} = productApiSlice;
