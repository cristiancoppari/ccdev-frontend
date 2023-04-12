import type { ButtonProps } from "../../types/types";

const Button = ({ type, label, onClick }: ButtonProps) => {
    return (
        <button
            className={`btn ${type ? type : ""}`}
            onClick={onClick || undefined}
        >
            {label}
        </button>
    );
};

export default Button;
