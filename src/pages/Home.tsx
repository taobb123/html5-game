import React, { useState } from 'react';
import { 
  Car, 
  Rocket, 
  Flame, 
  Search, 
  Facebook, 
  Twitter, 
  Instagram,
  ChevronRight,
  Menu,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAllGames, setShowAllGames] = useState(false);

  const games = [
    {
      id: 1,
      title: "Street Racer 2",
      description: "Experience the thrill of urban racing with stunning graphics and realistic physics.",
      icon: <Car className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600",
      features: ["Browser-Based Gaming", "Intuitive Controls", "Multiple Tracks"],
      iframe: '<iframe src="https://www.crazygames.com/embed/street-racer-2" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    },
    {
      id: 2,
      title: "Street Racers Nitro Extreme",
      description: "Push your limits with nitro-powered racing and extreme customization options.",
      icon: <Rocket className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600",
      features: ["Nitro Boost System", "Multiple Cars", "Online Competition"],
      iframe: '<iframe src="https://www.crazygames.com/embed/street-racers-nitro-extreme" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    },
    {
      id: 3,
      title: "Night City Racing",
      description: "Dominate the neon-lit streets in this action-packed racing experience.",
      icon: <Flame className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1547744822-0a2892f8fa6d?w=1600",
      features: ["Night Racing", "City Environment", "Arcade Style"],
      iframe: '<iframe src="https://www.crazygames.com/embed/night-city-racing" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    },
    {
      id: 4,
      title: "Drift King",
      description: "Master the art of drifting in this high-octane racing game.",
      icon: <Car className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600",
      features: ["Drift Mechanics", "Car Tuning", "Global Leaderboards"],
      iframe: '<iframe src="https://www.crazygames.com/embed/drift-king" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    },
    {
      id: 5,
      title: "Rally Champion",
      description: "Take on challenging off-road tracks in various weather conditions.",
      icon: <Car className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=1600",
      features: ["Weather System", "Track Editor", "Championship Mode"],
      iframe: '<iframe src="https://www.crazygames.com/embed/rally-champion" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    }
  ];

  const featuredGames = games.slice(0, 3); // 首页只显示前3个游戏
  const displayedGames = showAllGames ? games : featuredGames;

  const blogPosts = [
    {
      title: "Next-Gen Racing Features Revealed",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800",
      category: "Development"
    },
    {
      title: "Community Racing Event This Weekend",
      date: "March 14, 2024",
      image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800",
      category: "Events"
    },
    {
      title: "Car Customization Guide",
      date: "March 13, 2024",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
      category: "Guides"
    }
  ];

  // 处理全屏
  const handleFullscreen = () => {
    const gameContainer = document.getElementById('game-container');
    if (!gameContainer) return;

    if (!isFullscreen) {
      if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
      } else if ((gameContainer as any).webkitRequestFullscreen) {
        (gameContainer as any).webkitRequestFullscreen();
      } else if ((gameContainer as any).msRequestFullscreen) {
        (gameContainer as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  // 监听全屏变化
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600"
          alt="Hero"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Race to <span className="text-red-500">Glory</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Experience the ultimate browser racing games. Choose your ride, customize your style, and dominate the streets.
            </p>
            <button 
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full font-bold transition-colors"
              onClick={() => {
                const gamesSection = document.getElementById('games');
                gamesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Play Now
            </button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Our Games</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedGames.map((game) => (
              <div key={game.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div className="relative">
                  <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      New
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {game.icon}
                    <h3 className="text-xl font-bold ml-2">{game.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      {game.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-full font-bold transition-colors"
                    onClick={() => setSelectedGame(game.id)}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!showAllGames && games.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllGames(true)}
                className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center"
              >
                View More Games
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 w-full max-w-6xl rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">
                {games[selectedGame - 1].title}
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleFullscreen}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Maximize2 className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
            <div 
              id="game-container"
              className="relative w-full"
              style={{ height: '80vh' }}
              dangerouslySetInnerHTML={{ 
                __html: games[selectedGame - 1].iframe 
              }}
            />
          </div>
        </div>
      )}

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-red-500 rounded-full text-sm mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-400">{post.date}</p>
                  <Link 
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-4 text-red-500 hover:text-red-400 flex items-center"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;