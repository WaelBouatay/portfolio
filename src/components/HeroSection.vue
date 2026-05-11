<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16">
    <!-- Grain texture -->
    <div class="absolute inset-0 opacity-30" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E'); background-size: 200px;"></div>
    <!-- Ligne décorative verticale -->
    <div class="absolute left-12 top-24 bottom-0 w-px hidden lg:block" style="background: linear-gradient(to bottom, #C9A96E, transparent); opacity: 0.3;"></div>

    <div class="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 z-10">
      <!-- TEXTE -->
      <div class="flex-1 text-center md:text-left">
        <p class="section-label fade-up delay-1 mb-4">Ingénieur Informatique</p>
        <h1 class="serif fade-up delay-2 mb-2 leading-none"
            style="font-size: clamp(3.5rem, 9vw, 7rem); font-weight: 900; color: #E8E2D9;">
          Wael<br/><span class="gold-text">Bouatay</span>
        </h1>

        <div class="fade-up delay-3 flex flex-wrap gap-2 justify-center md:justify-start my-6">
          <span class="pill">Full Stack Dev</span>
          <span class="pill">Scrum Master</span>
          <span class="pill">Product Owner</span>
        </div>

        <p class="fade-up delay-4 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
           style="color: #888; font-size: 16px;">
          Diplômé d'ESPRIT, certifié PSM I & PSPO I. J'allie une expertise technique full stack à une culture produit agile pour livrer des solutions robustes en production.
        </p>

        <div class="fade-up delay-5 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#contact" class="btn-primary">Me contacter</a>
          <a href="#experience" class="btn-outline">Mon parcours</a>
        </div>

        <!-- Liens sociaux -->
        <div class="fade-up delay-5 flex gap-6 mt-10 justify-center md:justify-start">
          <a href="https://linkedin.com/in/wael-bouatay" target="_blank"
             style="color:#555; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:color 0.2s;"
             onmouseover="this.style.color='#C9A96E'" onmouseout="this.style.color='#555'">
            LinkedIn ↗
          </a>
          <a href="mailto:wael.bouatay@gmail.com"
             style="color:#555; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; transition:color 0.2s;"
             onmouseover="this.style.color='#C9A96E'" onmouseout="this.style.color='#555'">
            wael.bouatay@gmail.com ↗
          </a>
        </div>
      </div>

      <!-- PHOTO -->
      <div class="flex-shrink-0 fade-up delay-3">
        <div class="relative">
          <!-- Cadre décoratif décalé -->
          <div class="absolute rounded-2xl"
               style="width:100%;height:100%;top:12px;left:12px;border:1px solid rgba(201,169,110,0.3);border-radius:16px;"></div>
          <div class="relative overflow-hidden rounded-2xl"
               style="width:280px;height:340px; background:#111;">
            <!-- Remplace src par /photo.jpg quand tu as ta vraie photo -->
            <img
                src="/photo.png"
                alt="Wael Bouatay"
                style="width:100%;height:100%;object-fit:cover;"
            />
            <!-- Overlay subtil -->
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 50%);"></div>
          </div>
          <!-- Numéro décoratif -->
          <div class="absolute -top-4 -right-4 mono text-xs" style="color:#C9A96E; opacity:0.6;">01</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#about" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
       style="color:#444; text-decoration:none;">
      <span class="mono" style="font-size:10px;letter-spacing:0.1em;">SCROLL</span>
      <div style="width:1px;height:40px;background:linear-gradient(to bottom,#C9A96E,transparent);"></div>
    </a>
  </section>
</template>