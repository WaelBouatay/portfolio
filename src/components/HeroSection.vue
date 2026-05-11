<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-16">
    <!-- Blobs décoratifs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute rounded-full"
           style="width:600px;height:600px;top:-100px;left:-150px;background:radial-gradient(circle,rgba(108,99,255,0.12) 0%,transparent 70%);"></div>
      <div class="absolute rounded-full"
           style="width:500px;height:500px;bottom:-80px;right:-100px;background:radial-gradient(circle,rgba(192,132,252,0.1) 0%,transparent 70%);"></div>
    </div>

    <div class="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 z-10">
      <!-- TEXTE -->
      <div class="flex-1 text-center md:text-left">
        <div class="fade-up d1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
             style="background:rgba(129,140,248,0.08);border:1px solid rgba(129,140,248,0.2);">
          <span style="width:7px;height:7px;border-radius:50%;background:#6C63FF;display:inline-block;"></span>
          <span style="font-size:12px;font-weight:600;color:#818CF8;letter-spacing:0.1em;text-transform:uppercase;">Disponible</span>
        </div>

        <h1 class="display fade-up d2 leading-none mb-4"
            style="font-size:clamp(3.2rem,9vw,6.5rem);font-weight:800;color:#E2E8F0;">
          Wael<br/><span class="gradient-text">Bouatay</span>
        </h1>

        <div class="fade-up d3 flex flex-wrap gap-2 justify-center md:justify-start mb-6">
          <span class="pill">💻 Full Stack Dev</span>
          <span class="pill">🎯 Scrum Master</span>
          <span class="pill">📋 Product Owner</span>
        </div>

        <p class="fade-up d4 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
           style="color:#64748B;font-size:15.5px;line-height:1.8;">
          Diplômé d'ESPRIT, certifié <strong style="color:#A5B4FC;font-weight:600;">PSM  & PSPO </strong>.
          J'allie une expertise technique full stack à une culture produit agile pour livrer des solutions robustes en production.
        </p>

        <div class="fade-up d5 flex flex-wrap gap-4 justify-center md:justify-start mb-10">
          <a href="#contact" class="btn-primary">Me contacter</a>
          <a href="#experience" class="btn-outline">Mon parcours</a>
        </div>

        <!-- Liens -->
        <div class="fade-up d6 flex flex-wrap gap-6 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/wael-bouatay-4a05661b5/" target="_blank"
             class="flex items-center gap-2 transition-colors duration-200"
             style="color:#475569;font-size:13px;text-decoration:none;"
             onmouseover="this.style.color='#818CF8'" onmouseout="this.style.color='#475569'">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:wael.bouatay@gmail.com"
             class="flex items-center gap-2 transition-colors duration-200"
             style="color:#475569;font-size:13px;text-decoration:none;"
             onmouseover="this.style.color='#818CF8'" onmouseout="this.style.color='#475569'">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            wael.bouatay@gmail.com
          </a>
        </div>
      </div>

      <!-- PHOTO -->
      <div class="flex-shrink-0 fade-up d3">
        <div class="relative">
          <!-- Cercle décoratif tournant -->
          <div class="absolute inset-0 rounded-full"
               style="background:conic-gradient(from 0deg,#6C63FF,#C084FC,#6C63FF);padding:3px;border-radius:50%;animation:spin 8s linear infinite;">
            <div style="width:100%;height:100%;border-radius:50%;background:#080B14;"></div>
          </div>
          <div class="relative overflow-hidden"
               style="width:260px;height:260px;border-radius:50%;border:3px solid transparent;background:linear-gradient(#080B14,#080B14) padding-box,linear-gradient(135deg,#6C63FF,#C084FC) border-box;">
            <img
                src="/photo.png"
                alt="Wael Bouatay"
                style="width:100%;height:100%;object-fit:cover;"
            />
          </div>

        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>