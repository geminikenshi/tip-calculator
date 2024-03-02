export default function Tab({ bill, tip }) {
  return (
    <p>
      <b>{`You pay $${bill * 1 + tip * 1} ($${bill * 1} + $${tip} tip)`}</b>
    </p>
  );
}
