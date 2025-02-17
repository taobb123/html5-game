import React, { useState } from 'react';
import { 
  Car, 
  Rocket, 
  Flame, 
  Search, 
  ChevronRight,
  Menu,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../blog-posts';

interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
  features: string[];
  isNew: boolean;
  iframe: string;
}

function Home() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAllGames, setShowAllGames] = useState(false);

  const games: Game[] = [
    {
      id: 1,
      title: 'Racing Horizon',
      image: '/racing-horizon.jpg',
      description: 'Navigate through heavy traffic, earn money for upgrades, and enjoy thrilling police chases in this 3D racing game.',
      features: [
        '4 Exciting Game Modes',
        'Car Upgrades System',
        'Realistic 3D Graphics',
      ],
      isNew: true,
      iframe: '<iframe src="https://www.gameflare.com/embed/racing-horizon/" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    },
    {
      id: 2,
      title: 'Turbo Racing 3',
      image: '/night-city-racing-cover.avif',
      description: 'Race through the streets of Shanghai in this thrilling 3D racing game. Navigate through traffic and compete to be the best.',
      features: [
        'Shanghai City Racing',
        'Traffic Navigation',
        'Turbo Boost (X)',
      ],
      isNew: true,
      iframe: '<iframe src="https://www.gameflare.com/embed/turbo-racing-3/" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
    },
    {
      id: 3,
      title: 'Buggy Off-Road Racing',
      image: '/buggf-off-load.webp',
      description: 'Race through rugged terrains across Europe, USA, and Australia. Drive a high-powered buggy through treacherous tracks.',
      features: [
        'Multiple Global Tracks',
        'Buggy Customization',
        'Intense Off-Road Action',
      ],
      isNew: true,
      iframe: '<iframe src="https://play.gamepix.com/4x4-buggy-offroad-racing/embed?sid=80268" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
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

  const blogPosts = getAllPosts().slice(0, 3); // 只获取最新的3篇文章

  // 找到选中的游戏
  const selectedGameData = selectedGame ? games.find(game => game.id === selectedGame) : null;

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
                  {game.isNew && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                        New
                      </span>
                    </div>
                  )}
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

          {/* 移除或注释掉 View More Games 按钮部分 */}
          {/* {!showAllGames && games.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllGames(true)}
                className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center"
              >
                View More Games
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )} */}
        </div>
      </section>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 w-full h-full max-w-7xl max-h-[90vh] rounded-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">
                {selectedGameData?.title}
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleFullscreen}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors group relative"
                >
                  {isFullscreen ? (
                    <>
                      <Minimize2 className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        Exit Fullscreen
                      </span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                        Fullscreen
                      </span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors group relative"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Close
                  </span>
                </button>
              </div>
            </div>

            {/* Game Container */}
            <div className="flex-1 overflow-auto">
              <div id="game-container" className="relative w-full aspect-video">
                {/* 全屏控制按钮 */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={handleFullscreen}
                    className="bg-gray-900 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-lg transition-all duration-200 group"
                  >
                    {isFullscreen ? (
                      <>
                        <Minimize2 className="w-5 h-5 text-white" />
                        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                          Exit Fullscreen
                        </span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-5 h-5 text-white" />
                        <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                          Fullscreen
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Game iframe */}
                <div className="w-full h-full">
                  <div dangerouslySetInnerHTML={{ __html: selectedGameData?.iframe || '' }} className="w-full h-full" />
                </div>
              </div>

              {/* Game Instructions */}
              <div className="p-6 bg-gray-900">
                {/* Controls Section */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4">Controls:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-800 p-2 rounded">
                        <span className="text-gray-400">↑↓←→</span>
                      </div>
                      <span className="text-gray-300">DRIVING</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-800 px-3 py-2 rounded">
                        <span className="text-gray-400">N</span>
                      </div>
                      <span className="text-gray-300">NITRO</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gray-800 px-3 py-2 rounded">
                        <span className="text-gray-400">C</span>
                      </div>
                      <span className="text-gray-300">CHANGE CAMERA</span>
                    </div>
                  </div>
                </div>

                {/* Game Description */}
                <div>
                  <h4 className="text-xl font-bold mb-4">About {selectedGameData?.title}:</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {selectedGameData?.description}
                  </p>
                  <div className="mt-4">
                    <h5 className="font-bold mb-2">Key Features:</h5>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedGameData?.features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Latest Blogs Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Latest Blogs</h2>
            <Link 
              to="/blog" 
              className="text-red-500 hover:text-red-400 flex items-center"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">
                    {post.date} • {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <div className="flex items-center text-red-500 hover:text-red-400">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;