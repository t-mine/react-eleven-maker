import type { Option } from "../types/option";

type DropdownProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
};

function Dropdown({ options, value, onChange }: DropdownProps) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;