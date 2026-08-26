import React, { useEffect, useState } from "react";

const AdminPanel = ({ onLogout }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", quantity: "", price: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [editingProduct, setEditingProduct] = useState({});

  const fetchProducts = () => {
    fetch("http://localhost:5001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:5001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newProduct, quantity: Number(newProduct.quantity), price: Number(newProduct.price) })
    })  
    .then(() => {
      setNewProduct({ name: "", quantity: "", price: "", image: "" });
      fetchProducts();
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/products/${id}`, { method: "DELETE" })
      .then(() => fetchProducts());
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditingProduct(product);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/products/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...editingProduct, quantity: Number(editingProduct.quantity), price: Number(editingProduct.price) })
    })
    .then(() => {
      setEditingId(null);
      setEditingProduct({});
      fetchProducts();
    });
  };

  return (
    <div className="container my-5">
     

      <div className="d-flex justify-content-between align-items-center mb-3">
  <h2 className="text-center w-100">Admin Panel</h2>
  <button className="btn btn-danger" onClick={onLogout}>
    Logout
  </button>
</div>

      <form onSubmit={editingId ? handleUpdate : handleAdd} className="mb-5">
        <div className="row g-2">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Name" value={editingId ? editingProduct.name : newProduct.name}
              onChange={e => editingId ? setEditingProduct({ ...editingProduct, name: e.target.value }) : setNewProduct({ ...newProduct, name: e.target.value })} required />
          </div>
          <div className="col-md-2">
            <input type="number" className="form-control" placeholder="Quantity" value={editingId ? editingProduct.quantity : newProduct.quantity}
              onChange={e => editingId ? setEditingProduct({ ...editingProduct, quantity: e.target.value }) : setNewProduct({ ...newProduct, quantity: e.target.value })} required />
          </div>
          <div className="col-md-2">
            <input type="number" className="form-control" placeholder="Price" value={editingId ? editingProduct.price : newProduct.price}
              onChange={e => editingId ? setEditingProduct({ ...editingProduct, price: e.target.value }) : setNewProduct({ ...newProduct, price: e.target.value })} required />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Image URL" value={editingId ? editingProduct.image : newProduct.image}
              onChange={e => editingId ? setEditingProduct({ ...editingProduct, image: e.target.value }) : setNewProduct({ ...newProduct, image: e.target.value })} required />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">{editingId ? "Update" : "Add"}</button>
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
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>${p.price}</td>
              <td><img src={p.image} alt={p.name} style={{ width: "50px" }} /></td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(p)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
