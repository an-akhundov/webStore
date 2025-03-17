import "./menuButton.css";

export default function MenuButton({
  children,
  classN,
  onClick,
  active = false,
  closeNav = () => {},
}) {
  function handleClick() {
    onClick();
    closeNav();
  }

  const classes = active ? "header-button_active" : undefined;

  return (
    <li className={`${classes} ${classN}`} onClick={handleClick}>
      {children}
    </li>
  );
}
