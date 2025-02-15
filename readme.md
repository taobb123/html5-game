
# Game Portal Template

A modern, responsive web template for creating a gaming portal that supports iframe game embedding. Built with React, TypeScript, and Tailwind CSS.

![landing page](landing_page.png)

## Features

- 🎮 Easy game integration via iframes
- 🎯 Customizable game cards and descriptions
- 📱 Fully responsive design
- 🌙 Dark theme optimized for gaming
- ⚡ Built with performance in mind
- 🎨 Modern UI with smooth animations
- 🖥️ Fullscreen game support
- 📰 Built-in blog section
- 📄 FAQ and policy pages included

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Lucide Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/game-portal-template.git
```

2. Install dependencies:
```bash
cd game-portal-template
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Customizing Games

Add your games by modifying the `games` array in `src/pages/Home.tsx`:

```typescript
const games = [
  {
    id: 1,
    title: "Your Game Title",
    description: "Game description here",
    icon: <YourIcon className="w-8 h-8" />,
    image: "path/to/game/image",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    iframe: '<iframe src="your-game-url" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
  },
  // Add more games...
];
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
