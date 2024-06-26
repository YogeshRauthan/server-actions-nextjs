"use client";

const { fetchListofProducts1 } = require("@/actions");
const { useEffect, useState } = require("react");

function ClientPageExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getListofProducts() {
    const data = await fetchListofProducts1();
    console.log(data);
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getListofProducts();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait</h1>;
  }

  return (
    <div>
      <h1>Client page server action example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ClientPageExample;
