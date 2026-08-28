import React, { useEffect, useState } from "react";
import { supabase } from "../src/supabaseClient";

const AdminPanel = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editingProduct, setEditingProduct] = useState({});

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching products:", error);
      return;
    }

    setProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("products").insert([
      {
        name: newProduct.name,
        quantity: Number(newProduct.quantity),
        price: Number(newProduct.price),
        image: newProduct.image,
      },
    ]);

    if (error) {
      console.error("Error adding product:", error);
      return;
    }

    setNewProduct({
      name: "",
      quantity: "",
      price: "",
      image: "",
    });

    fetchProducts();
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting product:", error);
      return;
    }

    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditingProduct(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .update({
        name: editingProduct.name,
        quantity: Number(editingProduct.quantity),
        price: Number(editingProduct.price),
        image: editingProduct.image,
      })
      .eq("id", editingId);

    if (error) {
      console.error("Error updating product:", error);
      return;
    }

    setEditingId(null);
    setEditingProduct({});
    fetchProducts();
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center w-100">Admin Panel</h2>

        <button className="btn btn-danger" onClick={onLogout}>
          Logout
        </button>
      </div>

      <form
        onSubmit={editingId ? handleUpdate : handleAdd}
        className="mb-5"
      >
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={
                editingId
                  ? editingProduct.name || ""
                  : newProduct.name
              }
              onChange={(e) =>
                editingId
                  ? setEditingProduct({
                      ...editingProduct,
                      name: e.target.value,
                    })
                  : setNewProduct({
                      ...newProduct,
                      name: e.target.value,
                    })
              }
              required
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={
                editingId
                  ? editingProduct.quantity ?? ""
                  : newProduct.quantity
              }
              onChange={(e) =>
                editingId
                  ? setEditingProduct({
                      ...editingProduct,
                      quantity: e.target.value,
                    })
                  : setNewProduct({
                      ...newProduct,
                      quantity: e.target.value,
                    })
              }
              required
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={
                editingId
                  ? editingProduct.price ?? ""
                  : newProduct.price
              }
              onChange={(e) =>
                editingId
                  ? setEditingProduct({
                      ...editingProduct,
                      price: e.target.value,
                    })
                  : setNewProduct({
                      ...newProduct,
                      price: e.target.value,
                    })
              }
              required
            />
          </div>

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              value={
                editingId
                  ? editingProduct.image || ""
                  : newProduct.image
              }
              onChange={(e) =>
                editingId
                  ? setEditingProduct({
                      ...editingProduct,
                      image: e.target.value,
                    })
                  : setNewProduct({
                      ...newProduct,
                      image: e.target.value,
                    })
              }
              required
            />
          </div>

          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-success w-100"
            >
              {editingId ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>${p.price}</td>

              <td>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "50px" }}
                />
              </td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(p)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

