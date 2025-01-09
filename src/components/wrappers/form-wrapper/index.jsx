import PropTypes from "prop-types";
import { PageWrapper } from "../page-wrapper";

export function  FormWrapper (props) {
  const { breadCrumbItems } = props;
  return (
    <PageWrapper breadCrumbItems={breadCrumbItems}>

    </PageWrapper>
  );
}

FormWrapper.propTypes = {
  breadCrumbItems: PropTypes.array,
}


export function FormNavigation (props) {
  const { categories, currentPage, setCurrentPage } = props;
  return (
    <nav className="w-64 bg-gray-100 p-6">
      <ul>
        {categories.map((category, index) => (
          <li key={category} className="mb-2">
            {category}
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
}