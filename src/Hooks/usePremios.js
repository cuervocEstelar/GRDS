import { useState, useEffect } from 'react';

const usePremios = () => {
  const [premios, setPremios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPremios = async () => {
      try {
        const response = await fetch('http://localhost/GRDS/premiosController.php');
        if (!response.ok) {
          throw new Error('Error al obtener los premios');
        }
        const data = await response.json();

        // 👇 Aquí es donde extraemos "data"
        // console.log(data.data);
        setPremios(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPremios();
  }, []);

  return { premios, loading, error };
};

export default usePremios;
