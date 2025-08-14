import "../App.css";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      date: "2025-08-01",
      item: "Full SAT Practice Test",
      status: "Completed",
      onView: (id) => alert(`View order #${id}`),
    },
    {
      id: 2,
      date: "2025-07-15",
      item: "Sectional: Math Only",
      status: "Pending",
      onView: (id) => alert(`View order #${id}`),
    },
    {
      id: 3,
      date: "2025-07-02",
      item: "Sectional: Reading & Writing",
      status: "Failed",
      onView: (id) => alert(`View order #${id}`),
    },
  ];
  return (
    <div className="order-history-card">
      <h2 className="order-history-title">Order History</h2>
      {orders.length > 0 ? (
        <table className="order-history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.date}</td>
                <td>{order.item}</td>
                <td className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </td>
                <td>
                  <button onClick={() => order.onView(order.id)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-orders">You have no past orders.</p>
      )}
    </div>
  );
};

export default OrderHistory;
