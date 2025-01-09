import PropTypes from "prop-types";
import { PageWrapper } from "../page-wrapper";
import { Button, Checkbox, Input } from "antd";

export function  FormWrapper (props) {
  const { breadCrumbItems, pageData, formData, handleInputChange } = props;
  return (
    <PageWrapper breadCrumbItems={breadCrumbItems}>
      <h2 className="text-2xl font-bold mb-4">{pageData.category}</h2>
      {pageData.fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name}>{field.label}</label>
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
    </PageWrapper>
  );
}

FormWrapper.propTypes = {
  breadCrumbItems: PropTypes.array,
  pageData: {
    category: PropTypes.string,
    fields: {
      name: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.string,
    },
  },
  formData: PropTypes.array,
  handleInputChange: PropTypes.func,
};


export function FormNavigation (props) {
  const { categories, currentPage, setCurrentPage } = props;
  return (
    <nav className="w-64 bg-gray-100 p-6">
      <ul>
        {categories.map((category, index) => (
          <li key={category} className="mb-2">
            <Button 
              variant={currentPage === index ? "solid" : "outlined"}
              className="w-full jistify-start"
              onClick={() => setCurrentPage(index)}
            >
              {category}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

FormNavigation.propTypes = {
  categories: PropTypes.array,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};