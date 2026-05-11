<template>
  <section id="skills" class="py-28 px-6" style="background:rgba(255,255,255,0.015);">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label">Expertise</p>
        <div class="section-line"></div>
        <h2 class="display text-4xl md:text-5xl font-extrabold" style="color:#E2E8F0;">
          Mes <span class="gradient-text">compétences</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div v-for="(cat, i) in categories" :key="cat.title"
             class="card p-8"
             data-aos="fade-up" :data-aos-delay="i * 100">
          <div class="text-3xl mb-4">{{ cat.icon }}</div>
          <h3 class="display text-xl font-bold mb-1" style="color:#E2E8F0;">{{ cat.title }}</h3>
          <p style="font-size:12px;color:#475569;font-weight:500;margin-bottom:20px;letter-spacing:0.04em;">{{ cat.sub }}</p>
          <div class="flex flex-wrap">
            <span v-for="s in cat.skills" :key="s" class="pill">{{ s }}</span>
          </div>
        </div>
      </div>

      <!-- Langues sans drapeaux emoji -->
      <div class="card p-8" data-aos="fade-up">
        <h3 class="display text-xl font-bold text-center mb-8" style="color:#E2E8F0;">Langues</h3>
        <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto text-center">
          <div v-for="lang in languages" :key="lang.name">
            <div class="display font-extrabold mb-1" style="font-size:1.4rem;color:#E2E8F0;">{{ lang.name }}</div>
            <div style="font-size:11px;color:#818CF8;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">{{ lang.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    icon: '⚙️',
    title: 'Développement',
    sub: 'Backend & Frontend',
    skills: ['Node.js','Express.js','Nest.js','React.js','Vue.js','Next.js','Angular','Symfony','Laravel','Django','Spring Boot','Python','PHP','Java','SQL','PL-SQL']
  },
  {
    icon: '🎯',
    title: 'Agilité & Produit',
    sub: 'Scrum Master & Product Owner',
    skills: ['Scrum','Sprint Planning','Backlog Grooming','User Stories','Daily Stand-up','Sprint Review','Rétrospective','Facilitation','Jira','Trello']
  },
  {
    icon: '🛢️',
    title: 'Data & DevOps',
    sub: 'Bases de données & CI/CD',
    skills: ['MySQL','MongoDB','Oracle DB','Elasticsearch','Docker','Jenkins','Git','Sonar','Nexus','Vagrant']
  }
]
const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais',  level: 'Courant' },
  { name: 'Arabe',    level: 'Natif'   },
]
</script>