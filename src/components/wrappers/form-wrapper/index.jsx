import PropTypes from "prop-types";
import { Checkbox, Input } from "antd";

export function  FormWrapper (props) {
  const { pageData, formData, handleInputChange } = props;
  return (
    <div className="flex justify-center items-start min-h-[60vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{pageData.category}</h2>
        {pageData.fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block mb-2">{field.label}</label>
            {field.type === "checkbox" ? (
              <Checkbox
                id={field.name}
                checked={formData[field.name] === "true"}
                onChange={(checked) => handleInputChange(field.name, checked ? "true" : "false")}
              />
            ) : (
              <Input 
                type={field.type}
                id={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

FormWrapper.propTypes = {
  breadCrumbItems: PropTypes.array,
  pageData: {
    category: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
      })  
    ),
  },
  formData: PropTypes.array,
  handleInputChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};


export function FormNavigation (props) {
  const { categories, currentPage } = props;
  return (
    <nav className="w-64 bg-gray-100 p-6">
      <ul>
        {categories.map((category, index) => (
          <li key={category} className="mb-2">
            <div
              className={`w-full py-2 px-4 text-left rounded-md transition-colors ${
                currentPage === index
                  ? "bg-black text-white"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

FormNavigation.propTypes = {
  categories: PropTypes.array,
  currentPage: PropTypes.number
};