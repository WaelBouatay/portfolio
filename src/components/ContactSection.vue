<template>
  <section id="contact" class="py-28 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label">Travaillons ensemble</p>
        <div class="section-line"></div>
        <h2 class="display text-4xl md:text-5xl font-extrabold" style="color:#E2E8F0;">
          Me <span class="gradient-text">contacter</span>
        </h2>
        <p style="color:#64748B;margin-top:14px;font-size:15px;">
          Disponible pour des opportunités en dev full stack, Scrum Master ou Product Owner.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-5" data-aos="fade-up">
        <a v-for="info in contactInfos" :key="info.label"
           :href="info.href" target="_blank"
           class="card flex items-center gap-5 p-6"
           style="text-decoration:none;">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
               style="background:rgba(129,140,248,0.1);border:1px solid rgba(129,140,248,0.2);">
            {{ info.icon }}
          </div>
          <div>
            <div class="section-label mb-1" style="font-size:10px;">{{ info.label }}</div>
            <div style="color:#E2E8F0;font-size:14px;font-weight:500;">{{ info.value }}</div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <footer class="border-t py-8 text-center" style="border-color:rgba(255,255,255,0.05);">
    <p style="font-size:12px;color:#334155;font-weight:500;letter-spacing:0.08em;">
      © 2025 WAEL BOUATAY — CONÇU & DÉVELOPPÉ AVEC VUE.JS
    </p>
  </footer>
</template>

<script setup>
const contactInfos = [
  { icon: '✉️', label: 'Email',        value: 'wael.bouatay@gmail.com',       href: 'mailto:wael.bouatay@gmail.com' },
  { icon: '📱', label: 'Téléphone',    value: '+216 99 00 55 41',             href: 'tel:+21699005541' },
  { icon: '💼', label: 'LinkedIn',     value: 'linkedin.com/in/wael-bouatay', href: 'https://linkedin.com/in/wael-bouatay' },
  { icon: '📍', label: 'Localisation', value: 'Tunisie',                      href: '#' },
]
</script>