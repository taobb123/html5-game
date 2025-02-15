import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

function BlogPost() {
  const { slug } = useParams();
  
  // 在实际应用中，你可能需要根据slug从API获取文章内容
  // 这里我们只是展示一个示例
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-red-500 hover:text-red-400 mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Blog
        </Link>
        
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">
            {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
          <div className="flex items-center space-x-4 text-gray-400 mb-8">
            <span>March 15, 2024</span>
            <span>•</span>
            <span>Development</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1600" 
            alt="Blog post header" 
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <div className="text-gray-400 space-y-6">
            <p>
              这里是文章的详细内容。在实际应用中，这些内容应该从后端API获取。
            </p>
            {/* 添加更多的文章内容 */}
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost; 