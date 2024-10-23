import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { SubscribersTableList } from "./blog/subscribersTableList";
import { LoadingSpinner } from "./loadingSpinner";

interface BlogVisits {
  dates: string[];
  visits: number[];
}

interface AnalysisData {
  total_articles: number;
  total_subscribers: number;
  subscriber_emails: string[];
}

export const BlogOverview = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [articlesAmount, setArticlesAmount] = useState<number | undefined>(undefined);
  const [analysisData, setAnalysisData] = useState<AnalysisData | undefined>(undefined);
  const [blogVisits, setBlogVisits] = useState<BlogVisits>({ dates: [], visits: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carga

  const getInvestmentSummary = async () => {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}blog/articles/stats/`;

    try {
      const accessToken = await getAccessTokenSilently();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(apiUrl, config);

      if (response.data && response.data.visit_data) {
        setAnalysisData(response.data);
        setBlogVisits(response.data.visit_data);
        setArticlesAmount(response.data.total_articles);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Desactivar el estado de carga al finalizar
    }
  };

  useEffect(() => {
    getInvestmentSummary();
  }, [getAccessTokenSilently]);

  return (
    <section className="flex-1 bg-gray-100 min-h-screen">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <Card className="callout-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles Posted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{articlesAmount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total visits on the blog</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {blogVisits.visits.length > 0 ? blogVisits.visits.reduce((a, b) => a + b, 0) : 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total blog subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analysisData?.total_subscribers}</div>
            </CardContent>
          </Card>
        </div>
      )}
      {!isLoading && ( // Solo mostrar la tabla si no está cargando
          <Card className="grid  grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4 mx-4">
            <SubscribersTableList subscribers={analysisData?.subscriber_emails || []} />
          </Card>
      )}
    </section>
  );
};
