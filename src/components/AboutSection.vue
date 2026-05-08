<template>
  <section id="about" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div data-aos="fade-up">
        <p class="text-purple-400 text-sm font-medium tracking-widest uppercase text-center mb-2">Qui suis-je ?</p>
        <h2 class="text-4xl font-bold text-center mb-16">À <span class="gradient-text">propos</span></h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Texte -->
        <div data-aos="fade-right">
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            Ingénieur informatique diplômé d'<span class="text-purple-400 font-semibold">ESPRIT</span>, je combine une expertise technique full stack avec une solide pratique des méthodologies agiles.
          </p>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            Certifié <span class="text-purple-400 font-semibold">Scrum Master (PSM I)</span> et <span class="text-purple-400 font-semibold">Product Owner (PSPO I)</span> par Scrum.org, j'ai acquis deux ans d'expérience terrain en facilitation d'équipes et développement de plateformes en production.
          </p>
          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            Ma double casquette me permet d'être un pont naturel entre les parties prenantes et les développeurs : je comprends les enjeux techniques autant que les enjeux produit.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="tag">🎓 Diplômé ESPRIT 2023</span>
            <span class="tag">📍 Tunisie</span>
            <span class="tag">🌐 FR / EN / AR</span>
            <span class="tag">⚡ Disponible</span>
          </div>
        </div>

        <!-- Stats -->
        <div data-aos="fade-left" class="grid grid-cols-2 gap-6">
          <div v-for="stat in stats" :key="stat.label"
               class="bg-card border border-white border-opacity-5 rounded-2xl p-6 text-center card-hover">
            <div class="text-4xl mb-3">{{ stat.icon }}</div>
            <div class="text-3xl font-extrabold gradient-text mb-1">{{ stat.value }}</div>
            <div class="text-gray-400 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { icon: '💼', value: '2+', label: 'Ans d\'expérience' },
  { icon: '🚀', value: '6+', label: 'Clients en production' },
  { icon: '📜', value: '4', label: 'Certifications' },
  { icon: '🛠️', value: '15+', label: 'Technologies maîtrisées' },
]
</script>