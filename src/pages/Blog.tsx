import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      title: "Next-Gen Racing Features Revealed",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800",
      category: "Development",
      excerpt: "Get a sneak peek at the upcoming features that will revolutionize your racing experience."
    },
    {
      title: "Community Racing Event This Weekend",
      date: "March 14, 2024",
      image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800",
      category: "Events",
      excerpt: "Join us for an exciting weekend of competitive racing and amazing prizes."
    },
    {
      title: "Car Customization Guide",
      date: "March 13, 2024",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
      category: "Guides",
      excerpt: "Learn how to customize your ride for maximum performance and style."
    },
    {
      title: "Top Racing Strategies for Beginners",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      category: "Tips & Tricks",
      excerpt: "Master the basics with our comprehensive guide for new racers."
    },
    {
      title: "Interview with Pro Racer Alex Speed",
      date: "March 11, 2024",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
      category: "Interviews",
      excerpt: "Learn from the best as we sit down with champion racer Alex Speed."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Latest News</h1>
        
        {/* Featured Post */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <span className="inline-block px-3 py-1 bg-red-500 text-white rounded-full text-sm mb-4">
                {posts[0].category}
              </span>
              <h2 className="text-2xl font-bold text-white mb-4">{posts[0].title}</h2>
              <p className="text-gray-400 mb-4">{posts[0].excerpt}</p>
              <p className="text-gray-500 mb-6">{posts[0].date}</p>
              <Link 
                to={`/blog/${posts[0].title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-red-500 hover:text-red-400 flex items-center"
              >
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-red-500">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;