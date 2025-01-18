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
    {
      category: "Files 1",
      fields: [
        { name: "certificadoRegistroMercantil", label: "Copia del Certificado de Registro Mercantil del Representante Legal del Producto en la República Dominicana", type: "checkbox" },
        { name: "poderRepresentacion", label: "Poder de Representación emitido por el Titular del Producto al Representante Legal en la República Dominicana", type: "checkbox" },
        { name: "certificadoMarca", label: "Copia del Certificado de Marca del producto, emitido por la Oficina Nacional de la Propiedad Industrial (ONAPI)", type: "checkbox" },
      ]
    },
    {
      category: "Files 2",
      fields: [
        { name: "permisoSanitario", label: "Copia del Permiso Sanitario del Establecimiento o local donde se elabora el producto, emitido por DIGEMAPS ", type: "checkbox" },
        { name: "contratoFabricacion", label: "Copia del contrato de Fabricación o Maquila", type: "checkbox" },
        { name: "contratoAcondicionamiento", label: "Copia del contrato de Acondicionamiento", type: "checkbox" },
        { name: "listadoIngredientes", label: "Listado de Ingredientes del producto", type: "checkbox" },
        { name: "analisisOriginalProducto", label: "Certificado de análisis original de producto terminado", type: "checkbox" },
      ]
    },
    {
      category: "Files 3",
      fields: [
        { name: "analisisOriginalMateriales", label: "Certificado de análisis original de los materiales de referencias (estándares), conteniendo", type: "checkbox" },
        { name: "estudioEstabilidad", label: "Estudio de Estabilidad o de Vida Útil del producto", type: "checkbox" },
        { name: "especificacionEmpaque", label: "Esquema y especificaciones de empaque primario del producto ", type: "checkbox" },
      ]
    },
    {
      category: "Files 4",
      fields: [
        { name: "diagramaFlujo", label: "Descripción de la elaboración Diagrama de Flujo del producto", type: "checkbox" },
        { name: "arteEtiqueta", label: "Arte de etiquetas que cumpla con las directrices NORDOM 53", type: "checkbox" },
        { name: "reciboPagoServicios", label: "Recibo de pago de servicios", type: "checkbox" },
      ]
    }
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
