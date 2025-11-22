import { FiCalendar, FiClock, FiUser, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Revolutionary Physiotherapy Techniques for Faster Recovery",
      excerpt: "Discover how cutting-edge technologies are transforming rehabilitation and helping patients recover mobility 40% faster.",
      category: "Innovations",
      date: "May 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "The Science Behind Pain Management: New Research Findings",
      excerpt: "Recent studies reveal surprising connections between brain activity and chronic pain perception that could change treatment approaches.",
      category: "Research",
      date: "April 28, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Dr. Michael Rodriguez"
    },
    {
      id: 3,
      title: "Home Exercises for Office Workers: Prevent Back Pain Effectively",
      excerpt: "Simple 10-minute daily routines that can prevent chronic back problems for those with sedentary jobs.",
      category: "Wellness",
      date: "March 10, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Emma Johnson"
    },
    {
      id: 4,
      title: "How Virtual Reality is Changing Physical Therapy",
      excerpt: "Explore how VR technology helps patients regain mobility through immersive rehabilitation experiences.",
      category: "Technology",
      date: "February 22, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      author: "Dr. Alan Park"
    }
  ];

  const featuredPost = blogPosts[0];

  const categories = [
    { name: "All", count: 12 },
    { name: "Innovations", count: 4 },
    { name: "Research", count: 3 },
    { name: "Wellness", count: 3 },
    { name: "Technology", count: 2 }
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/dot-pattern.svg')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stride Well Studio Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert insights, research updates, and wellness tips from our team of specialists
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" /> {featuredPost.date}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FiClock className="w-4 h-4" /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiUser className="w-5 h-5" />
                    <span className="font-medium">{featuredPost.author}</span>
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 font-medium hover:translate-x-1 transition">
                    Read Article <FiArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${index === 0 ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-100 text-gray-700'}`}>
                        {category.name} <span className="text-gray-500 float-right">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
               
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-48">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" /> {post.date}</span>
                        <span className="flex items-center gap-1"><FiClock className="w-4 h-4" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <FiUser className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors">
                          Read more <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700">3</button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700">8</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700">
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Blog;
