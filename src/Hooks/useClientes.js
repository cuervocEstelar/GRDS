import { useState, useEffect } from 'react';

const useClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost/GRDS/ClientesController.php');
        if (!response.ok) {
          throw new Error('Error al obtener los clientes');
        }
        const data = await response.json();

        // 👇 Aquí es donde extraemos "data"
        console.log(data.data);
        setClientes(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return { clientes, loading, error };
};

export default useClientes;
