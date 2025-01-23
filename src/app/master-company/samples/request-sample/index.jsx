import { Link, useNavigate } from "react-router";
import { FormWrapper } from "../../../../components/wrappers/form-wrapper/index.jsx";
import { getCategorysOptions, getSubcategorysOptions, postSample } from "../../../../api/samples/index.js";
import { useState, useEffect } from "react";

export default function RequestSample() {
  const navigate = useNavigate();
  const [options, setOptions] = useState({
    categorys: [],
    subcategorys: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formPages = [
    {
      category: "Datos del producto",
      fields: [
        { name: "productBrand", label: "Nombre del producto", type: "text" },
        { name: "comercialName", label: "Nombre comercial", type: "text" },
        { name: "category", label: "Categoría", type: "select", options: options.categorys },
        { name: "subCategory", label: "Subcategoría", type: "select", options: options.subcategorys },
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
      category: "Registro Mercantil",
      fields: [
        { name: "certificadoRegistroMercantil", label: "Copia del Certificado de Registro Mercantil del Representante Legal del Producto en la República Dominicana", type: "file" },
      ]
    },
    {
      category: "Poder de Representación",
      fields: [
        { name: "poderRepresentacion", label: "Poder de Representación emitido por el Titular del Producto al Representante Legal en la República Dominicana", type: "file" },
      ]
    },
    {
      category: "Certificado de Marca",
      fields: [
        { name: "certificadoMarca", label: "Copia del Certificado de Marca del producto, emitido por la Oficina Nacional de la Propiedad Industrial (ONAPI)", type: "file" },
      ]
    },
    {
      category: "Permiso Sanitario",
      fields: [
        { name: "permisoSanitario", label: "Copia del Permiso Sanitario del Establecimiento o local donde se elabora el producto, emitido por DIGEMAPS", type: "file" },
      ]
    },
    {
      category: "Contrato de Fabricación",
      fields: [
        { name: "contratoFabricacion", label: "Copia del contrato de Fabricación o Maquila", type: "file" },
      ]
    },
    {
      category: "Acondicionamiento",
      fields: [
        { name: "contratoAcondicionamiento", label: "Copia del contrato de Acondicionamiento", type: "file" },
      ]
    },
    {
      category: "Listado de Ingredientes",
      fields: [
        { name: "listadoIngredientes", label: "Listado de Ingredientes del producto", type: "file" },
      ]
    },
    {
      category: "Producto Terminado",
      fields: [
        { name: "analisisOriginalProducto", label: "Certificado de análisis original de producto terminado", type: "file" },
      ]
    },
    {
      category: "Materiales Referencias",
      fields: [
        { name: "analisisOriginalMateriales", label: "Certificado de análisis original de los materiales de referencias (estándares), conteniendo", type: "file" },
      ]
    },
    {
      category: "Estudio de Estabilidad",
      fields: [
        { name: "estudioEstabilidad", label: "Estudio de Estabilidad o de Vida Útil del producto", type: "file" },
      ]
    },
    {
      category: "Esquema de empaque",
      fields: [
        { name: "especificacionEmpaque", label: "Esquema y especificaciones de empaque primario del producto", type: "file" },
      ]
    },
    {
      category: "Diagrama de Flujo",
      fields: [
        { name: "diagramaFlujo", label: "Descripción de la elaboración Diagrama de Flujo del producto", type: "file" },
      ]
    },
    {
      category: "NORDOM 53",
      fields: [
        { name: "arteEtiqueta", label: "Arte de etiquetas que cumpla con las directrices NORDOM 53", type: "file" },
      ]
    },
    {
      category: "Recibo de pago",
      fields: [
        { name: "reciboPagoServicios", label: "Recibo de pago de servicios", type: "file" },
      ]
    },
  ];

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [categorys, subcategorys] = await Promise.all([
          getCategorysOptions(),
          getSubcategorysOptions()
        ]);
        
        setOptions((prev) => ({
          ...prev,
          categorys,
          subcategorys,
        }));
      } catch (error) {
        console.error("Error loading options:", error);
      }
    };

    loadOptions();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);

      // Transformar los datos al formato requerido
      const transformedData = {
        ...formData,
        userId: 1,
        categorys: [
          {categoryId: formData.category}
        ],
        subcategorys: [
          {subcategoryId: formData.subCategory}
        ],
      };

      // Eliminar las propiedades originales ya que ahora están en el nuevo formato
      delete transformedData.category;
      delete transformedData.subCategory;

      console.log("transformed data:", transformedData);
      const response = await postSample(transformedData);
      
      console.log(response);
      
      // Aquí puedes agregar redirección después del éxito si lo deseas
      navigate("/layout-master-company/samples");
      
    } catch (error) {
      console.error("Error submitting sample:", error);
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
        { title: <Link to="/layout-master-company/home-master-company">Home</Link> },
        { title: <Link to="/layout-master-company/samples">Muestras</Link> },
        { title: "Solicitud de muestra" },
      ]}
    />
  );
}