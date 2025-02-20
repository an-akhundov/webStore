import "./customInput.css";

export default function CustomInput({ label, id, ...props }) {
  return (
    <p className="custom-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </p>
  );
}
