import { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Checkbox, Input, Button, Select } from "antd";
import { PageWrapper } from "../page-wrapper";

// Files
import { FileAddOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const FileUpload = () => (
  <Dragger {...props} style={{ backgroundColor: "#D2CFD6" }}>
    <p className="ant-upload-drag-icon">
      <FileAddOutlined style={{ color: "black" }} />
    </p>
    <p className="ant-upload-text">Haz clic o arrastra un archivo a esta área.</p>
    <p className="ant-upload-hint">
      Soporte para una carga única o múltiple. Está estrictamente prohibido subir datos de la
      empresa u otros archivos no permitidos.
    </p>
  </Dragger>
);

// ---------------------------------------------------
// NAVIGATION
// ---------------------------------------------------
export function FormNavigation({ categories, currentPage }) {
  return (
    <nav
      className="w-64 bg-gradient-to-l from-[rgba(12,34,39,0.05)] to-white p-6 h-full rounded-lg mt-5"
      role="navigation">
      <ul className="relative overflow-y-auto h-full max-h-[calc(100vh-14rem)]" aria-label="Form sections">
        <div
          className="absolute left-0 w-full h-10 bg-[#0CB2AA] rounded-md shadow-[0px_5px_20px_rgba(0,0,0,0.25)] transition-all duration-300"
          style={{
            transform: `translateY(${currentPage * 3}rem)`,
          }}
          aria-hidden="true"
        />
        {categories.map((category, index) => (
          <li key={category} className="mb-2 relative z-10">
            <div
              className={`w-full py-2 px-4 text-left transition-colors ${
                currentPage === index
                  ? "text-white"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              aria-current={currentPage === index ? "step" : undefined}>
              {category}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

FormNavigation.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPage: PropTypes.number.isRequired,
};

// ---------------------------------------------------
// FORM CONTENT
// ---------------------------------------------------
export function FormContent({ pageData, formData, handleInputChange }) {
  
  const renderField = useCallback(
    ({ name, label, type, options }) => {
      const commonProps = {
        id: name,
        name,
        "aria-label": label,
        className: "form-input-green-shadow",
      };

      switch (type) {
        case "checkbox":
          return (
            <Checkbox
              {...commonProps}
              checked={formData[name] === "true"}
              onChange={(e) =>
                handleInputChange(name, e.target.checked ? "true" : "false")
              }
            />
          );
        case "select":
          return (
            <Select
              {...commonProps}
              defaultValue={formData[name] || ""}
              options={options}
              onChange={(value) => handleInputChange(name, value)}
              className="w-full"
            />
          );
        case "file":
          return (
            <>
              <FileUpload />
              <label className="mr-2">Ya está subido</label>
              <Checkbox
                {...commonProps}
                checked={formData[name] === "true"}
                onChange={(e) => handleInputChange(name, e.target.checked ? "true" : "false")}
              />
            </>
          );
        default:
          return (
            <Input
              {...commonProps}
              type={type}
              value={formData[name] || ""}
              onChange={(e) => handleInputChange(name, e.target.value)}
            />
          );
      }
    }, [formData, handleInputChange]);

  return (
    <div className="flex justify-center items-start h-full items-center">
      <div className="w-full max-w-md bg-[#F4F4F4] p-8 rounded-lg shadow-md">
        <style>
          {`
            /* Estilos para inputs */
            .form-input-green-shadow:hover {
              border-color: #0CB2AA !important;
              transition: all 0.3s ease;
            }
            
            .form-input-green-shadow:focus,
            .form-input-green-shadow:active {
              box-shadow: 0 0 0 2px rgba(12, 178, 170, 0.2) !important;
              border-color: #0CB2AA !important;
            }

            /* Estilos para Select de Ant Design */
            .ant-select:hover .ant-select-selector {
              border-color: #0CB2AA !important;
              transition: all 0.3s ease;
            }
            
            .ant-select-focused .ant-select-selector,
            .ant-select-selector:focus,
            .ant-select-selector:active {
              box-shadow: 0 0 0 2px rgba(12, 178, 170, 0.2) !important;
              border-color: #0CB2AA !important;
            }

            /* Estilos para Checkbox */
            .ant-checkbox-wrapper:hover .ant-checkbox,
            .ant-checkbox:hover {
              border-color: #0CB2AA !important;
              transition: all 0.3s ease;
            }
            
            .ant-checkbox-focused,
            .ant-checkbox-checked {
              background-color: #0CB2AA !important;
              border-color: #0CB2AA !important;
            }

            .ant-checkbox-checked::after {
              border-color: #0CB2AA !important;
            }
            
            /* Estilos para los labels */
            label:hover {
              color: #0CB2AA;
              transition: all 0.3s ease;
            }

            /* Transición suave para todos los elementos */
            .ant-input,
            .ant-select-selector,
            .ant-checkbox,
            .ant-checkbox-wrapper,
            label {
              transition: all 0.3s ease;
            }
          `}
        </style>
        {pageData?.fields?.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block mb-2">
              {field.label}
            </label>
            {renderField(field)}
          </div>
        ))}
      </div>
    </div>
  );
}

FormContent.propTypes = {
  pageData: PropTypes.shape({
    category: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        options: PropTypes.array,
      })
    ),
  }).isRequired,
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

// ---------------------------------------------------
// FORM WRAPPER
// ---------------------------------------------------
export function FormWrapper({ formPages, breadCrumbItems, onSubmit }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [oldPage, setOldPage] = useState(null);

  useEffect(() => {
    let animationTimer;
    if (isAnimating) {
      animationTimer = setTimeout(() => {
        setIsAnimating(false);
        setOldPage(null);
      }, 300);
    }
    return () => clearTimeout(animationTimer);
  }, [isAnimating]);

  const handleInputChange = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (onSubmit) {
        try {
          await onSubmit(formData);
        } catch (error) {
          console.error("Form submission error:", error);
          // Here you could add error handling UI if needed
        }
      }
    },
    [onSubmit, formData]
  );

  const changePage = useCallback(
    (direction) => {
      setTransitionDirection(direction);
      setOldPage(currentPage);
      setIsAnimating(true);
      setCurrentPage((prev) =>
        direction === "next" ? prev + 1 : Math.max(prev - 1, 0)
      );
    },
    [currentPage]
  );

  const getTransitionClass = useCallback(
    (isOldPage) => {
      if (!isAnimating) return "translate-x-0";
      if (transitionDirection === "next") {
        // Para next: actual sale por izquierda (-translate), nuevo entra desde derecha
        return isOldPage ? "-translate-x-full" : "translate-x-full";
      } else {
        // Para previous: actual sale por derecha (translate), nuevo entra desde izquierda
        return isOldPage ? "translate-x-full" : "-translate-x-full";
      }
    },
    [isAnimating, transitionDirection]
  );

  return (
    <PageWrapper breadCrumbItems={breadCrumbItems}>
      <FormNavigation
        categories={formPages.map((page) => page.category)}
        currentPage={currentPage}
      />
      <div className="flex-1 pl-4 flex flex-col justify-between h-full overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col relative p-6 rounded-lg bg-white"
          noValidate>
          {oldPage !== null && (
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-in-out z-0 ${
                isAnimating ? getTransitionClass(true) : "translate-x-0"
              }`}
              aria-hidden="true">
              <FormContent
                pageData={formPages[oldPage]}
                formData={formData}
                handleInputChange={handleInputChange}
              />
            </div>
          )}

          <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out z-10 ${
              isAnimating ? getTransitionClass(false) : "translate-x-0"
            }`}
            role="group"
            aria-label={`Form page ${currentPage + 1} of ${formPages.length}`}>
            <FormContent
              pageData={formPages[currentPage]}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
        </form>

        <div className="mt-6 flex justify-between">
          <Button
            disabled={currentPage === 0}
            onClick={() => changePage("prev")}
            aria-label="Previous page">
            Previous
          </Button>
          {currentPage === formPages.length - 1 ? (
            <Button
              type="primary"
              onClick={handleSubmit}
              aria-label="Submit form">
              Submit
            </Button>
          ) : (
            <Button onClick={() => changePage("next")} aria-label="Next page">
              Next
            </Button>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

FormWrapper.propTypes = {
  formPages: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          options: PropTypes.array,
        })
      ).isRequired,
    })
  ).isRequired,
  breadCrumbItems: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
