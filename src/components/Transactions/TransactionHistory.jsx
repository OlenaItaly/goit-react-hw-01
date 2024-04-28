import Transaction from "./Transaction";
import css from "./TransactionHistory.module.css"
import clsx from "clsx";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.tabel}>
  <thead>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

    <tbody>
                {items.map((item) => (
        
    <tr key={item.id} className={clsx(css.trgray)}>
        <Transaction item={item} />
    </tr>))}           
    
  </tbody>
</table>
    )
}