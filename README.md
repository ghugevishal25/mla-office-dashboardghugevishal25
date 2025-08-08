# MLA Office Dashboard

A modern, professional dashboard application for managing MLA (Member of Legislative Assembly) office operations, built with React, TypeScript, and Material-UI.

## ✨ Features

- **Modern Tech Stack**: React 19, TypeScript, Material-UI
- **Professional Development Environment**: Complete IDE setup with VS Code configurations
- **Responsive Design**: Mobile-first approach with Material-UI components
- **Type Safety**: Full TypeScript integration with strict type checking
- **Code Quality**: ESLint, Prettier, and Husky for pre-commit hooks
- **Development Tools**: Hot reloading, debugging configurations, and Docker support

## 🚀 Best Project IDE Setup

This project is configured with the best possible development experience:

### VS Code Configuration
- **Extensions**: Auto-installed recommended extensions for React, TypeScript, ESLint, Prettier
- **Settings**: Optimized for React/TypeScript development with auto-formatting and import organization
- **Debugging**: Pre-configured launch configurations for development and testing
- **Tasks**: Quick access to build, test, and lint commands

### Code Quality Tools
- **ESLint**: Real-time code linting with React and TypeScript rules
- **Prettier**: Automatic code formatting on save
- **Husky**: Pre-commit hooks for code quality enforcement
- **TypeScript**: Strict type checking with modern TypeScript features

## 📋 Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher
- **VS Code**: Latest version (recommended)
- **Git**: For version control

## 🛠️ Installation & Setup

### 1. Clone and Install
```bash
git clone https://github.com/ghugevishal25/mla-office-dashboardghugevishal25.git
cd mla-office-dashboardghugevishal25
npm install
```

### 2. Development Server
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in your browser.

### 3. VS Code Setup
1. Open the project in VS Code
2. Install recommended extensions (popup will appear)
3. Extensions will auto-configure for optimal development

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run test suite |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | TypeScript type checking |

## 🐳 Docker Development

### Using Docker Compose (Recommended)
```bash
docker-compose -f docker-compose.dev.yml up
```

### Using Dockerfile
```bash
docker build -f Dockerfile.dev -t mla-dashboard-dev .
docker run -p 3000:3000 -v $(pwd):/app mla-dashboard-dev
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.tsx      # Main layout component
├── pages/              # Page components
│   ├── Dashboard.tsx   # Dashboard page
│   ├── Members.tsx     # Members management
│   ├── Meetings.tsx    # Meetings management
│   └── Tasks.tsx       # Tasks management
├── types/              # TypeScript type definitions
│   └── index.ts        # Main types
└── utils/              # Utility functions
```

## 🔧 IDE Features

### VS Code Extensions (Auto-installed)
- **ESLint**: Real-time linting
- **Prettier**: Code formatting
- **TypeScript**: Enhanced TypeScript support
- **Material Icon Theme**: Better file icons
- **Path Intellisense**: Auto-complete for file paths
- **Auto Rename Tag**: Auto-rename paired HTML/JSX tags
- **GitHub Copilot**: AI-powered code completion

### Debugging
- **F5**: Start debugging session
- **Breakpoints**: Set breakpoints in TypeScript/JavaScript
- **Console**: Integrated debugging console
- **Hot Reload**: Changes reflect instantly

### Code Quality
- **Auto-format**: Code formats on save
- **Auto-import**: Automatic import organization
- **Type checking**: Real-time TypeScript errors
- **Lint errors**: Immediate feedback on code issues

## 🎨 Styling & UI

- **Material-UI**: Modern, accessible components
- **Theme**: Customizable Material-UI theme
- **Responsive**: Mobile-first design approach
- **Typography**: Professional typography scale
- **Icons**: Material Design icons

## 🧪 Testing

```bash
npm test                # Run tests in watch mode
npm run test:coverage   # Run tests with coverage
```

## 📦 Building for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## 🚀 Deployment

The build folder can be deployed to any static hosting service:
- **Netlify**: Drag and drop build folder
- **Vercel**: Connect GitHub repository
- **AWS S3**: Upload build folder to S3 bucket
- **Firebase Hosting**: Use Firebase CLI

## 🛡️ TypeScript Configuration

Strict TypeScript setup with:
- **Strict mode**: Maximum type safety
- **Path mapping**: Clean import paths with `@/` aliases
- **No unused variables**: Prevents dead code
- **Import organization**: Auto-organize imports

## 🔍 Code Quality Rules

### ESLint Rules
- React best practices
- TypeScript strict rules
- Prettier integration
- No unused variables
- Prefer const over let

### Pre-commit Hooks
- Lint all staged files
- Format code with Prettier
- Type check TypeScript
- Prevent commits with errors

## 📝 Development Workflow

1. **Start development**: `npm start`
2. **Write code**: VS Code provides IntelliSense, auto-completion
3. **Auto-format**: Code formats on save
4. **Debug**: Use F5 or debug panel
5. **Test**: `npm test` for testing
6. **Commit**: Pre-commit hooks ensure quality
7. **Build**: `npm run build` for production

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation
- Review VS Code extensions and settings

---

**Happy Coding! 🎉** This setup provides the best possible development experience for building the MLA Office Dashboard.