<template>
  <section id="about" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label mb-3">Qui suis-je</p>
        <div class="section-line"></div>
        <h2 class="serif text-4xl md:text-5xl" style="color:#E8E2D9;">À <em style="color:#C9A96E;">propos</em></h2>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <p style="color:#aaa; line-height:1.9; font-size:16px; margin-bottom:20px;">
            Ingénieur informatique diplômé d'<span style="color:#C9A96E; font-weight:500;">ESPRIT</span>, je combine une expertise technique full stack à une solide pratique des méthodologies agiles.
          </p>
          <p style="color:#aaa; line-height:1.9; font-size:16px; margin-bottom:20px;">
            Certifié <span style="color:#C9A96E; font-weight:500;">Scrum Master (PSM I)</span> et <span style="color:#C9A96E; font-weight:500;">Product Owner (PSPO I)</span> par Scrum.org, j'ai acquis deux ans d'expérience terrain en facilitation d'équipes et développement de plateformes en production.
          </p>
          <p style="color:#aaa; line-height:1.9; font-size:16px; margin-bottom:32px;">
            Ma double casquette me permet d'être un pont naturel entre les parties prenantes et les développeurs : je comprends les enjeux techniques autant que les enjeux produit.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="pill">🎓 ESPRIT 2023</span>
            <span class="pill">📍 Tunisie</span>
            <span class="pill">Disponible</span>
          </div>
        </div>

        <div data-aos="fade-left" class="grid grid-cols-2 gap-5">
          <div v-for="stat in stats" :key="stat.label"
               class="card card-lift p-6 text-center">
            <div class="serif text-4xl font-black gold-text mb-1">{{ stat.value }}</div>
            <div class="mono" style="font-size:11px; letter-spacing:0.1em; color:#555; text-transform:uppercase;">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '2+', label: "Ans d'expérience" },
  { value: '6+', label: 'Clients prod' },
  { value: '4', label: 'Certifications' },
  { value: '15+', label: 'Technologies' },
]
</script>