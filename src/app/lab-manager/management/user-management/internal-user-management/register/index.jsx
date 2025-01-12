import { FormWrapper } from "../../../../../../components/wrappers/form-wrapper/index.jsx";
import { Link } from "react-router";

const formPages = [
  {
    category: "Personal Information",
    fields: [
      { name: "name", label: "Full Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
    ],
  },
  {
    category: "Address",
    fields: [
      { name: "street", label: "Street Address", type: "text" },
      { name: "city", label: "City", type: "text" },
      { name: "zipCode", label: "Zip Code", type: "text" },
    ],
  },
  {
    category: "Preferences",
    fields: [
      { name: "favoriteColor", label: "Favorite Color", type: "text" },
      {
        name: "newsletter",
        label: "Subscribe to Newsletter",
        type: "checkbox",
      },
    ],
  },
];

export default function InternalRegisterLabManager() {
  return (
    <FormWrapper
      formPages={formPages}
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        {
          title: (
            <Link to="/layout-lab-manager/management">Administración</Link>
          ),
        },
        {
          title: (
            <Link to="/layout-lab-manager/management/user-management-internal/">
              Gestion de Usuarios Internos
            </Link>
          ),
        },
        { title: "Register" },
      ]}
    />
  );
}
