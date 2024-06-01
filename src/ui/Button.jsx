import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",

    small: base + "px-4 py-2 md:px-5 sm:py-2.5 text-xs",

    secondary:
      "inline-block rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300  disabled:cursor-not-allowed px-4 py-2 md:px-5 sm:py-2.5 text-xs hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 ",
    round: base + "px-2.5 py-1 md:px-3.5 <md:py-2></md:py-2> ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}{" "}
      </Link>
    );
  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
