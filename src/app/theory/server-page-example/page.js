import { fetchListofProducts1 } from "@/actions";

async function ServerActionsExample() {
  // async function fetchListofProducts1() {
  //     'use server'

  //     const apiResponse = await fetch('https://dummyjson.com/products');
  //     const result = await apiResponse.json();

  //     return result?.products;
  // }

  const productList = await fetchListofProducts1();
  console.log(productList);
  return (
    <div>
      <h1>Server actions example - server component</h1>
      <ul>
        {productList && productList.length > 0 ? (
          productList.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ServerActionsExample;
