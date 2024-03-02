export default function Bill({ onChangeAmount, amount }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        onChange={(e) =>
          onChangeAmount(e.target.value.replace(/(?![0-9])./gim, ""))
        }
        value={amount}
      />
    </div>
  );
}
