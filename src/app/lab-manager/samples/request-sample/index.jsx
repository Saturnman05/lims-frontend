import { Link } from "react-router";
import { FormWrapper } from "../../../../components/wrappers/form-wrapper/index.jsx";
import { getCategorysOptions, getSubCategorysOptions, postSample } from "../../../../api/samples/index.js";
import { useState, useEffect } from "react";
import { message } from "antd";

export default function RequestSample() {
  const [options, setOptions] = useState({
    categorys: [],
    subCategorys: [],
    allergens: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const loadOptions = async () => {
      try {
        const [categorys, subCategorys] = await Promise.all([
          getCategorysOptions(),
          getSubCategorysOptions()
        ]);
        
        setOptions((prev) => ({
          ...prev,
          categorys,
          subCategorys,
        }));
      } catch (error) {
        message.error("Error al cargar las opciones del formulario");
        console.error("Error loading options:", error);
      }
    };

    loadOptions();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);

      // Obtener userId del localStorage o de donde esté almacenado
      const userId = localStorage.getItem("userId");

      // Transformar los datos al formato requerido
      const transformedData = {
        ...formData,
        userId: userId,
        categorys: [
          {
            categoryId: formData.category
          }
        ],
        subCategorys: [
          {
            subcategoryId: formData.subCategory
          }
        ]
      };

      // Eliminar las propiedades originales ya que ahora están en el nuevo formato
      delete transformedData.category;
      delete transformedData.subCategory;

      const response = await postSample(transformedData);
      
      if (response.error) {
        throw new Error(response.error);
      }
      
      // Aquí puedes agregar redirección después del éxito si lo deseas
      // navigate("/layout-lab-manager/samples");
      
    } catch (error) {
      console.error("Error submitting sample:", error);
      message.error("Error al enviar la muestra: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper
      formPages={formPages}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        { title: <Link to="/layout-lab-manager/samples">Muestras</Link> },
        { title: "Solicitud de muestra" },
      ]}
    />
  );
}