import { Link } from "react-router";
import { FormWrapper } from "../../../../components/wrappers/form-wrapper/index.jsx";
import { getCategorysOptions, getSubCategorysOptions } from "../../../../api/samples/index.js" 
import { useState, useEffect } from "react";

export default function RequestSample() {
  const [options, setOptions] = useState({
    categorys: [],
    subCategorys: [],
    allergens: [],
  });

  const formPages = [
    {
      category: "Datos del producto",
      fields: [
        { name: "productBrand", label: "Nombre del producto", type: "text" },
        { name: "comercialName", label: "Nombre comercial", type: "text" },
        { name: "category", label: "Categoría", type: "select", options: options.categorys },
        { name: "subCategory", label: "Subcategoría", type: "select", options: options.subCategorys },
        { name: "originCountry", label: "País de origen", type: "text" },
      ],
    },
    {
      category: "Identificación del lote",
      fields: [
        { name: "batchCode", label: "Código del lote", type: "text" },
        { name: "productionDate", label: "Fecha de producción", type: "date" },
        { name: "expirationDate", label: "Fecha de expiración", type: "date" },
        { name: "quantityUnits", label: "Cantidad de unidades", type: "text" },
      ],
    },
    {
      category: "Condiciones muestra",
      fields: [
        { name: "specialConditions", label: "Condiciones especiales", type: "text" },
        { name: "temperature", label: "Temperatura (°C)", type: "number" },
      ],
    },
  ];

  useEffect(() => {
    const loadCategorys = async () => {
      const categorys = await getCategorysOptions();
      setOptions((prev) => ({
        ...prev,
        categorys: categorys,
      }));
    }
    loadCategorys();

    const loadSubCategorys = async () => {
      const subCategorys = await getSubCategorysOptions();
      setOptions((prev) => ({
        ...prev,
        subCategorys: subCategorys,
      }));
    }
    loadSubCategorys();
  }, []);

  return (
    <FormWrapper
      formPages={formPages}
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        {
          title: (
            <Link to="/layout-lab-manager/samples">Muestras</Link>
          ),
        },
        { title: "Solicitud de muestra" },
      ]}
    />
  );
}
