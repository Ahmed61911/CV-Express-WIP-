import { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([]);

  const handleAddField = (type) => {
    setFields([
      ...fields,
      {
        id: Date.now(),
        type,
        label: "",
        value: "",
      },
    ]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, key, value) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [key]: value } : field
      )
    );
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(field.id, "value", e.target.value)}
              placeholder={field.label || "Enter text"}
              className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-blue-50 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
            
            <input
              type="date"
              value={field.value}
              onChange={(e) => handleChange(field.id, "value", e.target.value)}
            />

            <select
              value={field.value}
              onChange={(e) => handleChange(field.id, "value", e.target.value)}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </>
        );
    }
  };

  return (
    <div className="">
      <h1 className="text-xl">Infos academic</h1>
      <div className="form-fields">
        {fields.map((field) => (
          <div key={field.id} className="field">
            {renderField(field)}
            <button onClick={() => handleRemoveField(field.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="field-controls">
        <button onClick={() => handleAddField("text")}>Add Text Field</button>
      </div>
    </div>
  );
};

export default DynamicForm;