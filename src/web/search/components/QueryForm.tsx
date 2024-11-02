import { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

export const QueryForm: FC<Props> = ({ value, onChange, placeholder }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event.target.value); // In this case, the query, e.g. "COVID.19"
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <input
        className="w-full text-gray-700 rounded-md border-gray-300 focus:outline-none focus:shadow-outline"
        autoFocus
        type="text"
        value={value}
        onChange={handleInputChange}
        name="query"
        id="query"
        placeholder={placeholder}
        onSubmit={(e) => e.preventDefault()}
      />
    </form>
  );
};
