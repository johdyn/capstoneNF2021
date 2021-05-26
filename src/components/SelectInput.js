import Select from "react-select";

export default function SelectInput({
  className,
  placeholder,
  onChange,
  options,
}) {
  return (
    <Select
      styles={{
        container: (provided) => ({ ...provided, boxShadow: "none" }),
      }}
      className={className}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    />
  );
}
