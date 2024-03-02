export default function Rating({ children }) {
  return (
    <div>
      <span>{children}</span>
      <select name="" id="">
        <option value="">{"Dissatisfied (0%)"}</option>
        <option value="" selected>
          {"It was okay (5%)"}
        </option>
        <option value="">{"It was good (10%)"}</option>
        <option value="">{"Absolutely amazing! (20%)"}</option>
      </select>
    </div>
  );
}
