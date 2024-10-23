import { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogCard } from "@/components/blog/blogCard";
import { BlogSubscriberForm } from '../forms/blogSusbcribeForm';
import { LoadingSpinner } from '@/components/loadingSpinner';

interface BlogPost {
  id: number;
  image_urls?: { url: string }[];  // Hacer opcional
  title: string;
  first_section: string;
  day_posted: string;
}

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}blog/articles/public/`);
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false); // Cambiar a false después de cargar
      }
    };

    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.first_section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <div className="bg-[#F9FAFB] text-center space-y-5 py-[60px]">
        <p className="font-bold text-[#A0CC29] text-sm">Our Blog</p>
        <h2 className="font-bold text-4xl">Welcome to Tokunize Insights</h2>
        <p className="text-[#667085] text-medium w-[90%] md:w-[50%] mx-auto">
          Sign up for the Tokunize platform to gain full access to our product offerings, thought leadership and more.
        </p>
        <div className="flex items-center flex-col justify-center">
          <BlogSubscriberForm />
          <span className="text-sm text-gray-400 mt-2">We care about your data in our  <a href="/privacy-policy/" className="underline">Privacy Policy</a></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-[64px] px-[16px] md:px-[60px]">
        <aside className="flex md:w-[30%] flex-col space-y-3 pr-0 md:pr-[64px] mb-8 md:mb-0">
          <p className="text-[#C8E870] text-sm font-bold">Blog Categories</p>
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog posts..."
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-[#A0CC29] focus:border-transparent"
            />
          </div>
          <ul className="space-y-2">
            <li className="bg-[#F3F4F7] w-full font-semibold rounded-md px-3 py-1">View All</li>
          </ul>
        </aside>

        <article className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
            {isLoading ? ( // Mostrar el spinner si está cargando
              <div className="col-span-2 flex justify-center items-center">
                <LoadingSpinner />
              </div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                // Verificar si la imagen existe, de lo contrario usar un placeholder
                const imageUrl = post.image_urls && post.image_urls.length > 0
                  ? post.image_urls[0].url
                  : 'https://via.placeholder.com/400';  // Imagen de placeholder

                return (
                  <BlogCard
                    key={post.id}
                    imageUrl={imageUrl}
                    title={post.title}
                    description={post.first_section}
                    day_posted={post.day_posted}
                    article_id={post.id}
                  />
                );
              })
            ) : (
              <p className="text-center col-span-2">No blog posts yet</p>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
