<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
    <!-- Fond animé -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>

    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
      <!-- Texte -->
      <div class="flex-1 text-center md:text-left">
        <p class="text-purple-400 font-medium mb-3 tracking-widest uppercase text-sm">Bonjour, je suis</p>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-4">
          <span class="gradient-text">Wael</span><br/>Bouatay
        </h1>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
          <span class="bg-purple-600 bg-opacity-20 border border-purple-500 border-opacity-40 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
            💻 Ingénieur Full Stack
          </span>
          <span class="bg-indigo-600 bg-opacity-20 border border-indigo-500 border-opacity-40 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
            🔄 Scrum Master
          </span>
          <span class="bg-violet-600 bg-opacity-20 border border-violet-500 border-opacity-40 text-violet-300 px-4 py-2 rounded-full text-sm font-medium">
            📋 Product Owner
          </span>
        </div>
        <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
          Diplômé d'ESPRIT, certifié PSM I & PSPO I. J'allie une solide expertise technique à une culture produit agile pour livrer des solutions à fort impact.
        </p>
        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#contact"
             class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
            Me contacter
          </a>
          <a href="#experience"
             class="border border-purple-500 border-opacity-50 text-purple-300 hover:bg-purple-600 hover:bg-opacity-20 font-semibold px-8 py-3 rounded-full transition-all duration-300">
            Voir mon parcours
          </a>
        </div>
        <!-- Réseaux -->
        <div class="flex gap-5 mt-8 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/wael-bouatay-4a05661b5/" target="_blank"
             class="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:wael.bouatay@gmail.com"
             class="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            wael.bouatay@gmail.com
          </a>
        </div>
      </div>

      <!-- Photo -->
      <div class="flex-shrink-0">
        <div class="relative">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 p-1">
            <div class="w-full h-full rounded-full overflow-hidden bg-card">
              <img
                  src="/photo.png"
                  alt="Wael Bouatay"
                  class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Badge -->
          <div class="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
            PSM I & PSPO I ✓
          </div>
        </div>
      </div>
    </div>

    <!-- Flèche scroll -->
    <a href="#about" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-purple-400 transition-colors animate-bounce">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </a>
  </section>
</template>