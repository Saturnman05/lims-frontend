import PropTypes from "prop-types";
import { Checkbox, Input, Button, Select } from "antd";
import { useState, useCallback } from "react";
import { PageWrapper } from "../page-wrapper";

// ---------------------------------------------------
// NAVIGATION
// ---------------------------------------------------
export function FormNavigation({ categories, currentPage }) {
  return (
    <nav className="w-64 bg-gradient-to-l from-[rgba(12,34,39,0.05)] to-white p-6 h-full rounded-lg">
      <ul className="relative">
        {/* Fondo animado detrás de las opciones */}
        <div
          className="absolute left-0 w-full h-10 bg-[rgba(12,24,39,0.35)] rounded-md shadow-[0px_5px_20px_rgba(0,0,0,0.25)] transition-all duration-300"
          style={{
            transform: `translateY(${currentPage * 3}rem)`,
          }}
        />
        {categories.map((category, index) => (
          <li key={category} className="mb-2 relative z-10">
            <div
              className={`w-full py-2 px-4 text-left transition-colors ${
                currentPage === index
                  ? "text-white"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}>
              {category}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

FormNavigation.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  currentPage: PropTypes.number,
};

// ---------------------------------------------------
// FORM CONTENT
// ---------------------------------------------------
export function FormContent({ pageData, formData, handleInputChange }) {
  return (
    <div className="flex justify-center items-start h-full items-center">
      <div className="w-full max-w-md bg-[rgba(217, 217, 217, 0.20)] p-8 rounded-lg shadow-md ">
        {pageData?.fields?.map((field) => {
          const { name, label, type, options } = field;
          return (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block mb-2">
                {label}
              </label>

              {type === "checkbox" && (
                <Checkbox
                  id={name}
                  checked={formData[name] === "true"}
                  onChange={(e) =>
                    handleInputChange(name, e.target.checked ? "true" : "false")
                  }
                />
              )}

              {type !== "checkbox" && type !== "select" && (
                <Input
                  type={type}
                  id={name}
                  value={formData[name] || ""}
                  onChange={(e) => handleInputChange(name, e.target.value)}
                />
              )}

              {type === "select" && (
                <Select
                  defaultValue={formData[name] || ""}
                  options={options}
                  className="w-full"
                  onChange={(value) => handleInputChange(name, value)}
                />
              )}
            </div>
          );
        })}
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
        label: PropTypes.string,
        type: PropTypes.string,
        options: PropTypes.array,
      })
    ),
  }),
  formData: PropTypes.object,
  handleInputChange: PropTypes.func,
};

// ---------------------------------------------------
// FORM WRAPPER
// ---------------------------------------------------
export function FormWrapper({ formPages, breadCrumbItems, onSubmit }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("next");
  // Guardamos la página anterior para mostrarla durante la animación
  const [oldPage, setOldPage] = useState(null);

  const handleInputChange = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (onSubmit) {
        await onSubmit(formData);
      }
    },
    [onSubmit, formData]
  );

  const changePage = useCallback(
    (direction) => {
      setTransitionDirection(direction); // "next" o "prev"
      setOldPage(currentPage); // Guardamos la página actual como "oldPage"
      setIsAnimating(true);

      // Calculamos el nuevo índice de página
      const newPageIndex =
        direction === "next" ? currentPage + 1 : Math.max(currentPage - 1, 0);

      setCurrentPage(newPageIndex);

      // Terminada la animación
      setTimeout(() => {
        setIsAnimating(false);
        setOldPage(null); // Ocultamos la página anterior
      }, 300);
    },
    [currentPage]
  );

  return (
    <PageWrapper breadCrumbItems={breadCrumbItems}>
      <FormNavigation
        categories={formPages.map((page) => page.category)}
        currentPage={currentPage}
      />
      <div className="flex-1 pl-4 flex flex-col justify-between h-full ">
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col relative overflow-hidden p-6 rounded-lg bg-white">
          {/* Contenedor de la página anterior */}
          {oldPage !== null && (
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-in-out z-0 ${
                isAnimating
                  ? transitionDirection === "next"
                    ? "-translate-x-full" // oldPage sale a la izquierda
                    : "translate-x-full" // oldPage sale a la derecha
                  : "translate-x-0"
              }`}>
              <FormContent
                pageData={formPages[oldPage]}
                formData={formData}
                handleInputChange={handleInputChange}
              />
            </div>
          )}

          {/* Contenedor de la página actual */}
          <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out z-10 ${
              isAnimating
                ? transitionDirection === "next"
                  ? "translate-x-full" // nueva página entra desde la derecha
                  : "-translate-x-full" // nueva página entra desde la izquierda
                : "translate-x-0"
            }`}>
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
            onClick={() => changePage("prev")}>
            Previous
          </Button>
          {currentPage === formPages.length - 1 ? (
            <Button htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={() => changePage("next")}>Next</Button>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

FormWrapper.propTypes = {
  formPages: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      fields: PropTypes.array,
    })
  ),
  breadCrumbItems: PropTypes.array,
  onSubmit: PropTypes.func,
};
