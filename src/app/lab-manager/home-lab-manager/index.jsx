// import "../../styles/HomeLabManager/HomeLabManager.css";
import { FormNavigation, FormWrapper } from "../../../components/wrappers/form-wrapper";
import { Link } from "react-router";
import { useState } from "react";
import { Button } from "antd";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";

const formPages = [
  {
    category: 'Personal Information',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text' },
      { name: 'email', label: 'Email', type: 'email' },
    ],
  },
  {
    category: 'Address',
    fields: [
      { name: 'street', label: 'Street Address', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'zipCode', label: 'Zip Code', type: 'text' },
    ],
  },
  {
    category: 'Preferences',
    fields: [
      { name: 'favoriteColor', label: 'Favorite Color', type: 'text' },
      { name: 'newsletter', label: 'Subscribe to Newsletter', type: 'checkbox' },
    ],
  },
];

export default function HomeLabManager() {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const nextPage = () => {
    if (currentPage < formPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  };

  return (
    <PageWrapper breadCrumbItems={[{ title: <Link>Home</Link> }]}>
      <FormNavigation 
        categories={formPages.map((page) => page.category)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 p-6 flex flex-col">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <FormWrapper
            pageData={formPages[currentPage]}
            formData={formData}
            handleInputChange={handleInputChange}
          />
            <div className="mt-6 flex justify-between">
              <Button color="default" onClick={prevPage} disabled={currentPage === 0}>
                Previous
              </Button>
              {currentPage === formPages.length - 1 ? (
                <Button color="default" htmlType="submit">Submit</Button>
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
