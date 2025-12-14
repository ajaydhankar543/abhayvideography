import './style.css'

let currentPage = 'home'

function initApp() {
  const app = document.getElementById('app')
  
  app.innerHTML = `
    <div class="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white overflow-hidden">
      <!-- Animated Background Blobs -->
      <div class="blob w-96 h-96 bg-purple-600 top-0 left-0 animate-float"></div>
      <div class="blob w-96 h-96 bg-blue-600 bottom-0 right-0 animate-float" style="animation-delay: 2s"></div>
      <div class="blob w-96 h-96 bg-pink-600 top-1/2 left-1/2 animate-float" style="animation-delay: 4s"></div>

      <!-- Navbar -->
      <nav class="relative z-50 glass-effect border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3 animate-slide-in">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl animate-gradient shrink-0">
                ✨
              </div>
              <div>
                <h1 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  FullStack Studio
                </h1>
                <p class="text-xs text-gray-400 hidden sm:block">Next-Gen Development</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 justify-center animate-slide-in" style="animation-delay: 0.2s">
              <button id="home-btn" class="group relative px-4 sm:px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden text-sm sm:text-base ${currentPage === 'home' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'hover:bg-white/5'}">
                <span class="relative z-10 flex items-center gap-2">
                  <span class="text-lg sm:text-xl">🏠</span>
                  <span>Home</span>
                </span>
                ${currentPage === 'home' ? '<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-xl"></div>' : ''}
              </button>
              <button id="frontend-btn" class="group relative px-4 sm:px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden text-sm sm:text-base ${currentPage === 'frontend' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'hover:bg-white/5'}">
                <span class="relative z-10 flex items-center gap-2">
                  <span class="text-lg sm:text-xl">🎨</span>
                  <span>Frontend</span>
                </span>
                ${currentPage === 'frontend' ? '<div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-50 blur-xl"></div>' : ''}
              </button>
              <button id="backend-btn" class="group relative px-4 sm:px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden text-sm sm:text-base ${currentPage === 'backend' ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'hover:bg-white/5'}">
                <span class="relative z-10 flex items-center gap-2">
                  <span class="text-lg sm:text-xl">⚙️</span>
                  <span>Backend</span>
                </span>
                ${currentPage === 'backend' ? '<div class="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-50 blur-xl"></div>' : ''}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <div id="content" class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        <!-- Home Section -->
        <div id="home-section" class="hidden">
          <div class="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
            <div class="inline-block animate-slide-in">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-xs sm:text-sm mb-4 sm:mb-6">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-gray-300">System Online</span>
              </div>
            </div>
            
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 animate-slide-in px-4" style="animation-delay: 0.1s">
              <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient text-glow">
                Build The Future
              </span>
            </h1>
            
            <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-in px-4" style="animation-delay: 0.2s">
              A cutting-edge fullstack application with modern architecture, 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">interactive interfaces</span>, 
              and <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">powerful APIs</span>
            </p>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-in px-4" style="animation-delay: 0.3s">
              <button onclick="switchPage('frontend')" class="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105">
                <span class="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              </button>
              <button onclick="switchPage('backend')" class="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 glass-effect hover:bg-white/10">
                <span class="flex items-center justify-center gap-2">
                  Explore API
                  <span class="text-xl">📡</span>
                </span>
              </button>
            </div>
          </div>

          <!-- Feature Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div class="group card-hover animate-slide-in" style="animation-delay: 0.4s">
              <div class="relative h-full p-8 rounded-3xl glass-effect overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl"></div>
                
                <div class="relative z-10 space-y-4">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    🎨
                  </div>
                  <h3 class="text-2xl font-bold">Modern Frontend</h3>
                  <p class="text-gray-400 leading-relaxed">
                    Built with Vite & Tailwind CSS. Lightning-fast development with hot module replacement and utility-first styling.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 rounded-full text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30">Vite</span>
                    <span class="px-3 py-1 rounded-full text-xs bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">Tailwind</span>
                    <span class="px-3 py-1 rounded-full text-xs bg-purple-600/20 text-purple-400 border border-purple-500/30">Responsive</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="group card-hover animate-slide-in" style="animation-delay: 0.5s">
              <div class="relative h-full p-8 rounded-3xl glass-effect overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute top-0 right-0 w-32 h-32 bg-green-600/30 rounded-full blur-3xl"></div>
                
                <div class="relative z-10 space-y-4">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    ⚙️
                  </div>
                  <h3 class="text-2xl font-bold">Robust Backend</h3>
                  <p class="text-gray-400 leading-relaxed">
                    Express.js REST API with CORS support. Clean architecture with proper error handling and JSON responses.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 rounded-full text-xs bg-green-600/20 text-green-400 border border-green-500/30">Node.js</span>
                    <span class="px-3 py-1 rounded-full text-xs bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">Express</span>
                    <span class="px-3 py-1 rounded-full text-xs bg-teal-600/20 text-teal-400 border border-teal-500/30">REST API</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="group card-hover animate-slide-in" style="animation-delay: 0.6s">
              <div class="relative h-full p-8 rounded-3xl glass-effect overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute top-0 right-0 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl"></div>
                
                <div class="relative z-10 space-y-4">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                  <h3 class="text-2xl font-bold">Real-time Features</h3>
                  <p class="text-gray-400 leading-relaxed">
                    Seamless API integration with fetch API. Live data updates, error handling, and beautiful response visualization.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 rounded-full text-xs bg-purple-600/20 text-purple-400 border border-purple-500/30">Real-time</span>
                    <span class="px-3 py-1 rounded-full text-xs bg-pink-600/20 text-pink-400 border border-pink-500/30">Interactive</span>
                    <span class="px-3 py-1 rounded-full text-xs bg-rose-600/20 text-rose-400 border border-rose-500/30">Modern</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Section -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-slide-in" style="animation-delay: 0.7s">
            <div class="p-4 sm:p-6 rounded-2xl glass-effect text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">100%</div>
              <div class="text-gray-400 text-xs sm:text-sm">Uptime</div>
            </div>
            <div class="p-4 sm:p-6 rounded-2xl glass-effect text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2">Fast</div>
              <div class="text-gray-400 text-xs sm:text-sm">Performance</div>
            </div>
            <div class="p-4 sm:p-6 rounded-2xl glass-effect text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">Modern</div>
              <div class="text-gray-400 text-xs sm:text-sm">Design</div>
            </div>
            <div class="p-4 sm:p-6 rounded-2xl glass-effect text-center">
              <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2">Easy</div>
              <div class="text-gray-400 text-xs sm:text-sm">To Use</div>
            </div>
          </div>
        </div>

        <!-- Frontend Section -->
        <div id="frontend-section" class="hidden space-y-6 sm:space-y-8">
          <div class="text-center mb-8 sm:mb-12 animate-slide-in">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
              <span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient text-glow">
                Frontend Lab
              </span>
            </h1>
            <p class="text-base sm:text-lg md:text-xl text-gray-400 px-4">Interactive playground for modern web experiences</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Input Card -->
            <div class="group animate-slide-in" style="animation-delay: 0.1s">
              <div class="relative p-8 rounded-3xl glass-effect card-hover overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="shimmer absolute inset-0"></div>
                
                <div class="relative z-10 space-y-6">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl">
                      📝
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold">Interactive Input</h2>
                      <p class="text-sm text-gray-400">Type and see the magic happen</p>
                    </div>
                  </div>
                  
                  <div class="space-y-4">
                    <label class="block group">
                      <span class="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <span>Your Message</span>
                        <span class="text-xs text-gray-500">(Press Enter to submit)</span>
                      </span>
                      <div class="relative">
                        <input 
                          id="text-input" 
                          type="text" 
                          placeholder="Type something amazing..." 
                          class="w-full px-6 py-4 bg-black/30 border border-blue-500/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                        >
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">✨</div>
                      </div>
                    </label>
                    
                    <button 
                      id="submit-btn" 
                      class="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                    >
                      <span class="relative z-10 flex items-center justify-center gap-2">
                        Submit Message
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Output Card -->
            <div class="group animate-slide-in" style="animation-delay: 0.2s">
              <div class="relative p-8 rounded-3xl glass-effect card-hover overflow-hidden h-full">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div class="relative z-10 space-y-6 h-full flex flex-col">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl">
                      ✨
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold">Live Output</h2>
                      <p class="text-sm text-gray-400">Watch your input come alive</p>
                    </div>
                  </div>

                  <div id="output" class="hidden flex-1 p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30">
                    <div class="space-y-3">
                      <p class="text-sm text-gray-400">Your message:</p>
                      <p id="output-text" class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent break-words"></p>
                      <div class="flex gap-2 pt-4">
                        <span class="px-3 py-1 rounded-full text-xs bg-green-600/20 text-green-400 border border-green-500/30">✓ Received</span>
                        <span class="px-3 py-1 rounded-full text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30">Real-time</span>
                      </div>
                    </div>
                  </div>

                  <div id="empty-state" class="flex-1 flex flex-col items-center justify-center text-center py-12">
                    <div class="text-6xl mb-4 animate-float">💭</div>
                    <p class="text-gray-500 text-lg">Waiting for your input...</p>
                    <p class="text-gray-600 text-sm mt-2">Type something above and submit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Status Banner -->
          <div class="relative p-6 rounded-2xl glass-effect overflow-hidden animate-slide-in" style="animation-delay: 0.3s">
            <div class="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
            <div class="relative z-10 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-2xl">
                ✅
              </div>
              <div class="flex-1">
                <p class="font-bold text-green-400 text-lg">Frontend System Active</p>
                <p class="text-gray-400 text-sm">All components operational • Interactive features enabled</p>
              </div>
              <div class="flex gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Section -->
        <div id="backend-section" class="hidden space-y-6 sm:space-y-8">
          <div class="text-center mb-8 sm:mb-12 animate-slide-in">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
              <span class="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent animate-gradient text-glow">
                API Control Center
              </span>
            </h1>
            <p class="text-base sm:text-lg md:text-xl text-gray-400 px-4">Real-time backend data visualization</p>
          </div>

          <!-- Control Panel -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <button 
              id="fetch-btn" 
              class="group relative sm:col-span-2 md:col-span-1 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden animate-slide-in"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"></div>
              <div class="relative z-10 text-center sm:text-left space-y-2 sm:space-y-3">
                <div class="text-3xl sm:text-4xl mb-1 sm:mb-2">🔄</div>
                <h3 class="text-xl sm:text-2xl font-bold">Fetch Data</h3>
                <p class="text-green-100 text-xs sm:text-sm">Request live API data</p>
              </div>
            </button>

            <div class="p-4 sm:p-6 rounded-2xl glass-effect animate-slide-in" style="animation-delay: 0.1s">
              <div class="space-y-2 sm:space-y-3">
                <p class="text-gray-400 text-xs sm:text-sm">Endpoint</p>
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <span class="px-3 py-1 rounded-lg bg-green-600/20 text-green-400 text-xs font-mono border border-green-500/30">GET</span>
                  <span class="text-xs sm:text-sm font-mono text-gray-300 break-all">/api/data</span>
                </div>
                <p class="text-gray-500 text-xs">Port 3000</p>
              </div>
            </div>

            <div class="p-4 sm:p-6 rounded-2xl glass-effect animate-slide-in" style="animation-delay: 0.2s">
              <div class="space-y-2 sm:space-y-3">
                <p class="text-gray-400 text-xs sm:text-sm">Server Status</p>
                <div class="flex items-center gap-2">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span class="text-green-400 font-bold text-sm sm:text-base">Online</span>
                </div>
                <p class="text-gray-500 text-xs">Express.js v4</p>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div id="loading" class="hidden animate-slide-in">
            <div class="p-12 rounded-3xl glass-effect text-center">
              <div class="inline-block">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-3xl animate-spin">
                    ⏳
                  </div>
                  <div class="text-left">
                    <p class="text-xl font-bold text-gray-200">Fetching API Data</p>
                    <p class="text-sm text-gray-400">Communicating with backend server...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- API Response -->
          <div id="api-response" class="hidden space-y-6 animate-slide-in">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-2xl">
                  📦
                </div>
                <div>
                  <h2 class="text-2xl font-bold">Response Data</h2>
                  <p class="text-sm text-gray-400">JSON formatted output</p>
                </div>
              </div>
              <span class="px-4 py-2 rounded-xl bg-green-600/20 text-green-400 text-sm font-semibold border border-green-500/30">200 OK</span>
            </div>

            <div class="relative rounded-3xl overflow-hidden glass-effect">
              <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-green-600/10 to-emerald-600/10">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span class="text-xs text-gray-400 font-mono">response.json</span>
              </div>
              <div class="bg-black/50 p-6 overflow-x-auto">
                <pre id="response-data" class="text-sm text-green-300 font-mono leading-relaxed"></pre>
              </div>
            </div>

            <div class="p-6 rounded-2xl glass-effect bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30">
              <div class="flex items-start gap-4">
                <div class="text-3xl">✨</div>
                <div>
                  <p class="font-bold text-green-400 text-lg mb-2">API Call Successful!</p>
                  <p class="text-gray-400 text-sm">The backend server responded with data. Check the JSON output above for details.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Error State -->
          <div id="api-error" class="hidden animate-slide-in">
            <div class="p-8 rounded-3xl glass-effect bg-gradient-to-r from-red-600/10 to-rose-600/10 border border-red-500/30">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-2xl flex-shrink-0">
                  ❌
                </div>
                <div class="flex-1 space-y-3">
                  <h3 class="text-xl font-bold text-red-400">Connection Error</h3>
                  <p id="error-message" class="text-gray-300"></p>
                  <div class="p-4 rounded-xl bg-black/30 border border-red-500/20">
                    <p class="text-sm text-gray-400 mb-2">💡 <strong>Quick Fix:</strong></p>
                    <ul class="text-sm text-gray-500 space-y-1 ml-4">
                      <li>• Ensure backend server is running on port 3000</li>
                      <li>• Check <code class="text-orange-400">backend/server.js</code></li>
                      <li>• Run: <code class="text-orange-400">npm start</code> in backend folder</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="relative z-10 text-center py-8 text-gray-500 text-sm">
        <p>Built with <span class="text-red-400">♥</span> using Vite, Tailwind CSS, and Node.js</p>
      </div>
    </div>
  `

  showPage(currentPage)
  
  document.getElementById('home-btn').addEventListener('click', () => switchPage('home'))
  document.getElementById('frontend-btn').addEventListener('click', () => switchPage('frontend'))
  document.getElementById('backend-btn').addEventListener('click', () => switchPage('backend'))
  
  document.getElementById('submit-btn').addEventListener('click', handleSubmit)
  document.getElementById('text-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSubmit()
  })
  
  document.getElementById('fetch-btn').addEventListener('click', fetchBackendData)
}

function handleSubmit() {
  const input = document.getElementById('text-input')
  const value = input.value.trim()
  
  if (value) {
    document.getElementById('output-text').textContent = value
    document.getElementById('output').classList.remove('hidden')
    document.getElementById('empty-state').classList.add('hidden')
    input.value = ''
    input.focus()
  }
}

function switchPage(page) {
  currentPage = page
  
  const buttons = {
    'home': document.getElementById('home-btn'),
    'frontend': document.getElementById('frontend-btn'),
    'backend': document.getElementById('backend-btn')
  }
  
  Object.entries(buttons).forEach(([key, btn]) => {
    if (key === page) {
      btn.className = btn.className.replace(/hover:bg-white\/5/g, '')
      if (key === 'home') {
        btn.className = btn.className.replace(/bg-white\/5/, 'bg-gradient-to-r from-purple-600 to-pink-600')
        btn.innerHTML = btn.innerHTML.replace(/<div class="absolute[^>]*><\/div>/g, '') + 
          '<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-xl"></div>'
      } else if (key === 'frontend') {
        btn.className = btn.className.replace(/bg-white\/5/, 'bg-gradient-to-r from-blue-600 to-cyan-600')
        btn.innerHTML = btn.innerHTML.replace(/<div class="absolute[^>]*><\/div>/g, '') + 
          '<div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-50 blur-xl"></div>'
      } else if (key === 'backend') {
        btn.className = btn.className.replace(/bg-white\/5/, 'bg-gradient-to-r from-green-600 to-emerald-600')
        btn.innerHTML = btn.innerHTML.replace(/<div class="absolute[^>]*><\/div>/g, '') + 
          '<div class="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-50 blur-xl"></div>'
      }
    } else {
      btn.className = btn.className.replace(/bg-gradient-to-r.*?(from|to)-\w+-\d+/g, '').trim()
      btn.className += ' hover:bg-white/5'
      btn.innerHTML = btn.innerHTML.replace(/<div class="absolute[^>]*><\/div>/g, '')
    }
  })
  
  showPage(page)
}

function showPage(page) {
  document.getElementById('home-section').classList.toggle('hidden', page !== 'home')
  document.getElementById('frontend-section').classList.toggle('hidden', page !== 'frontend')
  document.getElementById('backend-section').classList.toggle('hidden', page !== 'backend')
}

async function fetchBackendData() {
  const loading = document.getElementById('loading')
  const response = document.getElementById('api-response')
  const error = document.getElementById('api-error')
  
  loading.classList.remove('hidden')
  response.classList.add('hidden')
  error.classList.add('hidden')
  
  try {
    const res = await fetch('/api/data')
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    
    const data = await res.json()
    document.getElementById('response-data').textContent = JSON.stringify(data, null, 2)
    
    setTimeout(() => {
      loading.classList.add('hidden')
      response.classList.remove('hidden')
    }, 800)
  } catch (err) {
    document.getElementById('error-message').textContent = err.message || 'Failed to connect to backend server'
    setTimeout(() => {
      loading.classList.add('hidden')
      error.classList.remove('hidden')
    }, 800)
  }
}

document.addEventListener('DOMContentLoaded', initApp)
