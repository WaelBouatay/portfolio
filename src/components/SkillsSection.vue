<template>
  <section id="skills" class="py-24 px-6 bg-card bg-opacity-30">
    <div class="max-w-6xl mx-auto">
      <div data-aos="fade-up">
        <p class="text-purple-400 text-sm font-medium tracking-widest uppercase text-center mb-2">Ce que je maîtrise</p>
        <h2 class="text-4xl font-bold text-center mb-16">Mes <span class="gradient-text">compétences</span></h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="category in skillCategories" :key="category.title"
             data-aos="fade-up"
             class="bg-card border border-white border-opacity-5 rounded-2xl p-8 card-hover">
          <div class="text-4xl mb-4">{{ category.icon }}</div>
          <h3 class="text-xl font-bold text-white mb-2">{{ category.title }}</h3>
          <p class="text-gray-500 text-sm mb-6">{{ category.subtitle }}</p>
          <div class="flex flex-wrap">
            <span v-for="skill in category.skills" :key="skill" class="tag">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Langues -->
      <div data-aos="fade-up" class="mt-12 bg-card border border-white border-opacity-5 rounded-2xl p-8">
        <h3 class="text-xl font-bold text-white mb-6 text-center">🌍 Langues</h3>
        <div class="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div v-for="lang in languages" :key="lang.name" class="text-center">
            <div class="text-3xl mb-2">{{ lang.flag }}</div>
            <div class="text-white font-semibold">{{ lang.name }}</div>
            <div class="text-purple-400 text-sm">{{ lang.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    icon: '⚙️',
    title: 'Développement',
    subtitle: 'Backend & Frontend',
    skills: ['Node.js', 'Express.js', 'Nest.js', 'React.js', 'Vue.js', 'Next.js', 'Angular', 'Symfony', 'Laravel', 'Django', 'Spring Boot']
  },
  {
    icon: '🔄',
    title: 'Agilité & Produit',
    subtitle: 'Scrum Master & PO',
    skills: ['Scrum', 'Sprint Planning', 'Backlog Grooming', 'User Stories', 'Daily Stand-up', 'Rétrospective', 'Jira', 'Trello', 'Facilitation']
  },
  {
    icon: '🛢️',
    title: 'Data & DevOps',
    subtitle: 'Bases de données & CI/CD',
    skills: ['MySQL', 'MongoDB', 'Oracle', 'Elasticsearch', 'Docker', 'Jenkins', 'Git', 'Sonar', 'Nexus']
  }
]

const languages = [
  { flag: '🇫🇷', name: 'Français', level: 'Courant' },
  { flag: '🇬🇧', name: 'Anglais', level: 'Courant' },
  { flag: '🇹🇳', name: 'Arabe', level: 'Natif' },
]
</script>