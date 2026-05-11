<template>
  <section id="about" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label">Qui suis-je</p>
        <div class="section-line"></div>
        <h2 class="display text-4xl md:text-5xl font-extrabold" style="color:#E2E8F0;">
          À <span class="gradient-text">propos</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-14 items-center">
        <div data-aos="fade-right">
          <p style="color:#94A3B8;line-height:1.9;font-size:15.5px;margin-bottom:18px;">
            Ingénieur informatique diplômé d'<span style="color:#A5B4FC;font-weight:600;">ESPRIT</span>, je combine une expertise technique full stack à une solide pratique des méthodologies agiles.
          </p>
          <p style="color:#94A3B8;line-height:1.9;font-size:15.5px;margin-bottom:18px;">
            Certifié <span style="color:#A5B4FC;font-weight:600;">Scrum Master (PSM I)</span> et <span style="color:#A5B4FC;font-weight:600;">Product Owner (PSPO I)</span> par Scrum.org, j'ai acquis deux ans d'expérience terrain en facilitation d'équipes et développement de plateformes en production.
          </p>
          <p style="color:#94A3B8;line-height:1.9;font-size:15.5px;margin-bottom:28px;">
            Ma double casquette me permet d'être un pont naturel entre les parties prenantes et les développeurs.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="pill">🎓 ESPRIT 2023</span>
            <span class="pill">📍 Tunisie</span>
            <span class="pill">🌐 FR / EN / AR</span>
            <span class="pill">✅ Disponible</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-5" data-aos="fade-left">
          <div v-for="stat in stats" :key="stat.label" class="card p-6 text-center">
            <div class="text-3xl mb-2">{{ stat.icon }}</div>
            <div class="display font-extrabold gradient-text mb-1" style="font-size:2rem;">{{ stat.value }}</div>
            <div style="font-size:12px;color:#475569;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { icon: '💼', value: '2+', label: "Ans d'expérience" },
  { icon: '🚀', value: '6+', label: 'Clients prod' },
  { icon: '📜', value: '4',  label: 'Certifications' },
  { icon: '🛠️', value: '15+',label: 'Technologies' },
]
</script>