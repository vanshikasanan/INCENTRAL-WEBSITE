export function formatMoney(amount: number) {
  const value = Number(amount || 0);
  return (
    "₹" +
    value.toLocaleString("en-IN", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 2,
    })
  );
}
