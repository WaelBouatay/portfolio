<template>
  <section id="certifications" class="py-24 px-6 bg-card bg-opacity-30">
    <div class="max-w-6xl mx-auto">
      <div data-aos="fade-up">
        <p class="text-purple-400 text-sm font-medium tracking-widest uppercase text-center mb-2">Mes accréditations</p>
        <h2 class="text-4xl font-bold text-center mb-16"><span class="gradient-text">Certifications</span> & Formation</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div v-for="cert in certifications" :key="cert.title"
             data-aos="fade-up"
             class="bg-card border border-white border-opacity-5 rounded-2xl p-6 card-hover flex items-start gap-5">
          <div class="text-5xl flex-shrink-0">{{ cert.icon }}</div>
          <div>
            <span class="text-xs uppercase tracking-wider text-purple-400 font-medium">{{ cert.issuer }}</span>
            <h3 class="text-white font-bold text-lg mt-1 mb-1">{{ cert.title }}</h3>
            <p class="text-gray-400 text-sm mb-3">{{ cert.description }}</p>
            <div class="flex items-center gap-3">
              <span class="text-gray-500 text-xs">📅 {{ cert.year }}</span>
              <span :class="cert.badgeClass" class="text-xs px-2 py-1 rounded-full font-medium">
                {{ cert.badge }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formation -->
      <div data-aos="fade-up" class="bg-gradient-to-r from-purple-600 from-opacity-10 to-indigo-600 to-opacity-10 border border-purple-500 border-opacity-20 rounded-2xl p-8 text-center"
           style="background: linear-gradient(135deg, rgba(108,99,255,0.1), rgba(79,70,229,0.1))">
        <div class="text-5xl mb-4">🎓</div>
        <p class="text-purple-400 text-sm uppercase tracking-widest font-medium mb-2">Formation initiale</p>
        <h3 class="text-2xl font-bold text-white mb-1">Diplôme d'ingénieur en Informatique</h3>
        <p class="text-purple-300 font-semibold mb-2">ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies</p>
        <p class="text-gray-500 text-sm">Obtenu en Octobre 2023</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  {
    icon: '🏅',
    issuer: 'Scrum.org',
    title: 'Professional Scrum Master (PSM I)',
    description: 'Certification internationale validant la maîtrise du framework Scrum et des pratiques de facilitation d\'équipes agiles.',
    year: '2025',
    badge: '✓ Certifié',
    badgeClass: 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30'
  },
  {
    icon: '🏅',
    issuer: 'Scrum.org',
    title: 'Professional Scrum Product Owner (PSPO I)',
    description: 'Certification validant la maîtrise du rôle de Product Owner, de la gestion du backlog et de la maximisation de la valeur produit.',
    year: '2025',
    badge: '✓ Certifié',
    badgeClass: 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30'
  },
  {
    icon: '📊',
    issuer: 'Coursera',
    title: 'Initiating and Planning Projects',
    description: 'Fondamentaux de la gestion de projet : initialisation, planification, définition des objectifs et livrables.',
    year: '2020',
    badge: '✓ Complété',
    badgeClass: 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30'
  },
  {
    icon: '🗄️',
    issuer: 'Coursera',
    title: 'SQL for Data Science',
    description: 'Maîtrise du SQL appliqué à l\'analyse de données, requêtes avancées et manipulation de bases de données.',
    year: '2020',
    badge: '✓ Complété',
    badgeClass: 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30'
  },
]
</script>