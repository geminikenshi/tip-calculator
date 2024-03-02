export default function Tab({ bill, tip }) {
  return (
    <p>
      <b>{`You pay $${bill + tip} ($${bill} + $${tip} tip)`}</b>
    </p>
  );
}
