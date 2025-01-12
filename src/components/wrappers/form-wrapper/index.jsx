import PropTypes from "prop-types";
import { Checkbox, Input, Button, Select } from "antd";
import { useState } from "react";
import { PageWrapper } from "../page-wrapper";

export function FormWrapper (props) {
  const { formPages, breadCrumbItems, onSubmit } = props;

  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    console.log(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  const nextPage = (e) => {
    if (currentPage < formPages.length - 1) {
      e.preventDefault();
      setCurrentPage(currentPage + 1)
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  };

  return (
    <PageWrapper breadCrumbItems={breadCrumbItems}>
      <FormNavigation
        categories={formPages.map((page) => page.category)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 p-6 flex flex-col">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <FormContent
            pageData={formPages[currentPage]}
            formData={formData}
            handleInputChange={handleInputChange}
          />
            <div className="mt-6 flex justify-between">
              <Button color="default" onClick={prevPage} disabled={currentPage === 0}>
                Previous
              </Button>
              {currentPage === formPages.length - 1 ? (
                <Button color="default" htmlType="submit">
                  Submit
                </Button>
              ) : (
                <Button color="default" onClick={nextPage}>
                  Next
                </Button>
              )}
            </div>
        </form>
      </div>
    </PageWrapper>
  );
}

FormWrapper.propTypes = {
  formPages: PropTypes.array,
  breadCrumbItems: PropTypes.array,
  onSubmit: PropTypes.func,
}

export function  FormContent (props) {
  const { pageData, formData, handleInputChange } = props;
  
  return (
    <div className="flex justify-center items-start max-h-[calc(100%-1rem)]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* <h2 className="text-2xl font-bold mb-4">{pageData.category}</h2>*/}
        {pageData.fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block mb-2">{field.label}</label>
            {field.type === "checkbox" && (
              <Checkbox
                id={field.name}
                checked={formData[field.name] === "true"}
                onChange={(checked) => handleInputChange(field.name, checked ? "true" : "false")}
              />
            )}

            {(field.type !== "checkbox" && field.type !== "select") && (
              <Input 
                type={field.type}
                id={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}

            {field.type === "select" && (
              <Select defaultValue={field.name} options={field.options} className="w-full" onChange={(e) => handleInputChange(field.name, e)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

FormContent.propTypes = {
  breadCrumbItems: PropTypes.array,
  pageData: {
    category: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
        options: PropTypes.array,
      }),
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