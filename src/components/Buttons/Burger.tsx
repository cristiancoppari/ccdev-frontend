import type { BurgerProps } from "../../types/types";

const Burger = ({ onClick, isOpen }: BurgerProps) => {
    return (
        <button
            className={`burger-wrapper ${isOpen ? "--open" : ""}`}
            onClick={onClick}
        >
            <div className="burger"></div>
        </button>
    );
};

export default Burger;
