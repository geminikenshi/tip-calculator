export default function Reset({ setBillAmount, setTipPercentage }) {
  return (
    <button
      onClick={() => {
        setBillAmount(0);
        setTipPercentage([5, 5]);
      }}
    >
      Reset
    </button>
  );
}
