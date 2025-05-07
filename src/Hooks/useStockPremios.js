import { useState, useEffect } from 'react';

const useStockPremios = () => {
  const [stockPremios, setStockPremios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPremios = async () => {
      try {
        const response = await fetch('http://localhost/GRDS/StockPremiosController.php');
        if (!response.ok) {
          throw new Error('Error al obtener los premios');
        }
        const data = await response.json();
        setStockPremios(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPremios();
  }, []);

  return { stockPremios, loading, error };
};

export default useStockPremios;
