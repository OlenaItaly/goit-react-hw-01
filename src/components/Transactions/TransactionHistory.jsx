import Transaction from "./Transaction";

export default function TransactionHistory({ items }) {
    return (
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
                {items.map((item) => (
    <tr key={item.id}>
        <Transaction item={item} />
    </tr>))}           
    
  </tbody>
</table>
    )
}