export default function Rating({ children, onChangeTipPercent, id }) {
  return (
    <div>
      <span>{children}</span>
      <select
        name=""
        id=""
        onChange={(e) => {
          onChangeTipPercent(id, e.target.value * 1);
        }}
      >
        <option value={0}>{"Dissatisfied (0%)"}</option>
        <option value={5} selected>
          {"It was okay (5%)"}
        </option>
        <option value={10}>{"It was good (10%)"}</option>
        <option value={20}>{"Absolutely amazing! (20%)"}</option>
      </select>
    </div>
  );
}
