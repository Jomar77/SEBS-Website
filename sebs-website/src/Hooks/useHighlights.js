import { useEffect, useState } from "react";
import { fetchHighlights } from "../Services/serviceApi";
import { getApiUrl } from "../Utils/apiConfig";

export function useHighlights() {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = getApiUrl();
    fetchHighlights()
      .then((data) => {
        // Sort by displayOrder and map to imageUrls
        const sortedHighlights = data
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((highlight) => `${apiUrl}${highlight.imageUrl}`);
        
        setHighlights(sortedHighlights);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("Failed to fetch highlights", err);
      });
  }, []);

  return { highlights, loading, error };
}
