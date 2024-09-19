import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  first_section: string;
  second_section: string;
  third_section: string;
  fourth_section?: string;  
  five_section?: string;
  conclusion?:string;  
  image_urls: { url: string }[];  
}

export const SingleArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [article, setArticle] = useState<Article | null>(null); 
  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) {
        setError("Article ID is missing");
        setIsLoading(false);
        return;
      }

      const apiUrl = `${import.meta.env.VITE_BACKEND_URL}blog/articles/${id}/`;
      try {
        const response = await axios.get<Article>(apiUrl); 
        console.log(response.data);
               
        setArticle(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!article) {
    return <div className="text-center">No article found yet</div>;
  }

  const sanitizeHTML = (html: string) => 
    DOMPurify.sanitize(html, { USE_PROFILES: { html: true }, ALLOWED_TAGS: ['ol', 'li', 'ul', 'p', 'img'] });

  return (
    <article className=" mt-12" id="singleArticleView">
      <header className="text-center mb-8">
        <p className="font-bold text-lg text-[#C8E870] mb-4">Investing Fundamentals</p>
        <p className="text-[27px] md:text-[37px]  md:w-[60%] mx-auto font-bold mb-4">{article.title}</p>
      </header>

      {/* Main Image */}
      {article.image_urls[0] && (
        <figure className="mb-8">
          <img
            src={article.image_urls[0].url || 'fallback-image-url.jpg'}
            alt={article.title}
            className="w-full h-[350px] object-cover"
          />
        </figure>
      )}

      <section className="md:w-3/4 mx-auto py-8">
        {/* First Section */}
        {article.first_section && (
          <article className="mb-8">
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(article.first_section) }} />
          </article>
        )}

        {/* Second Image */}
        {article.image_urls[1] && (
          <figure className="my-8">
            <img
              src={article.image_urls[1].url || 'fallback-image-url.jpg'}
              alt="Second illustrative image"
              className="w-full h-[300px] object-cover"
            />
          </figure>
        )}

        {/* Second Section */}
        {article.second_section && (
          <article className="mb-8">
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(article.second_section) }} />
          </article>
        )}

        {/* Third Image */}
        {article.image_urls[2] && (
          <figure className="my-8">
            <img
              src={article.image_urls[2].url || 'fallback-image-url.jpg'}
              alt="Third illustrative image"
              className="w-full h-[300px] object-cover"
            />
          </figure>
        )}

        {/* Third Section */}
        {article.third_section && (
          <article>
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(article.third_section) }} />
          </article>
        )}

        {/* 4 Image */}
        {article.image_urls[3] && (
          <figure className="my-8">
            <img
              src={article.image_urls[3].url || 'fallback-image-url.jpg'}
              alt="Third illustrative image"
              className="w-full h-[300px] object-cover"
            />
          </figure>
        )}

         {/* 4 Section */}
         {article.fourth_section && (
          <article>
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(article.fourth_section) }} />
          </article>
        )}

        {/* 4 Image */}
        {article.image_urls[4] && (
          <figure className="my-8">
            <img
              src={article.image_urls[4].url || 'fallback-image-url.jpg'}
              alt="Third illustrative image"
              className="w-full h-[300px] object-cover"
            />
          </figure>
        )}

         {/* 5 Section */}
         {article.five_section && (
          <article>
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(article.five_section) }} />
          </article>
        )}

        {/*Conclusion */}
        {article.conclusion && (
          <article className="bg-[#F4FAE2] p-3 rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(article.conclusion) }} />
          </article>
        )}
      </section>
    </article>
  );
};
