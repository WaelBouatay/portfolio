<template>
  <section id="skills" class="py-28 px-6" style="background:#0D0D0D;">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label mb-3">Expertise</p>
        <div class="section-line"></div>
        <h2 class="serif text-4xl md:text-5xl" style="color:#E8E2D9;">Mes <em style="color:#C9A96E;">compétences</em></h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-10">
        <div v-for="(cat, i) in categories" :key="cat.title"
             class="card card-lift p-8"
             data-aos="fade-up" :data-aos-delay="i * 100">
          <!-- Numéro décoratif -->
          <div class="mono mb-4" style="font-size:11px; color:#333; letter-spacing:0.12em;">0{{ i + 1 }}</div>
          <h3 class="serif text-xl mb-1" style="color:#E8E2D9;">{{ cat.title }}</h3>
          <p class="mono mb-6" style="font-size:11px; color:#555; letter-spacing:0.08em;">{{ cat.sub }}</p>
          <div class="flex flex-wrap">
            <span v-for="s in cat.skills" :key="s" class="pill">{{ s }}</span>
          </div>
        </div>
      </div>

      <!-- Langues — texte, pas drapeaux -->
      <div class="card p-8" data-aos="fade-up">
        <h3 class="serif text-xl mb-8 text-center" style="color:#E8E2D9;">Langues</h3>
        <div class="grid grid-cols-3 gap-6 max-w-md mx-auto">
          <div v-for="lang in languages" :key="lang.name" class="text-center">
            <div class="serif text-2xl font-bold mb-1" style="color:#E8E2D9;">{{ lang.name }}</div>
            <div class="mono" style="font-size:10px; letter-spacing:0.12em; color:#C9A96E; text-transform:uppercase;">{{ lang.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Développement',
    sub: 'Backend & Frontend',
    skills: ['Node.js', 'Express.js', 'Nest.js', 'React.js', 'Vue.js', 'Next.js', 'Angular', 'Symfony', 'Laravel', 'Django', 'Spring Boot', 'Python', 'PHP', 'Java', 'SQL', 'PL-SQL']
  },
  {
    title: 'Agilité & Produit',
    sub: 'Scrum Master & Product Owner',
    skills: ['Scrum', 'Sprint Planning', 'Backlog Grooming', 'User Stories', 'Daily Stand-up', 'Sprint Review', 'Rétrospective', 'Facilitation', 'Jira', 'Trello']
  },
  {
    title: 'Data & DevOps',
    sub: 'Bases de données & CI/CD',
    skills: ['MySQL', 'MongoDB', 'Oracle DB', 'Elasticsearch', 'Docker', 'Jenkins', 'Git', 'Sonar', 'Nexus', 'Vagrant']
  }
]

const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Courant' },
  { name: 'Arabe', level: 'Natif' },
]
</script>