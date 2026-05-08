<template>
  <section id="experience" class="py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <div data-aos="fade-up">
        <p class="text-purple-400 text-sm font-medium tracking-widest uppercase text-center mb-2">Mon parcours</p>
        <h2 class="text-4xl font-bold text-center mb-16">Expériences <span class="gradient-text">professionnelles</span></h2>
      </div>

      <div class="relative">
        <!-- Ligne verticale -->
        <div class="absolute left-8 top-0 bottom-0 w-px bg-purple-600 bg-opacity-30 hidden md:block"></div>

        <div class="space-y-12">
          <div v-for="(exp, index) in experiences" :key="index"
               data-aos="fade-up"
               class="relative md:pl-20">
            <!-- Point sur la ligne -->
            <div class="absolute left-6 top-6 w-5 h-5 bg-purple-600 rounded-full border-4 border-dark hidden md:block"></div>

            <div class="bg-card border border-white border-opacity-5 rounded-2xl p-8 card-hover">
              <!-- Header -->
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                <div>
                  <h3 class="text-xl font-bold text-white">{{ exp.title }}</h3>
                  <div class="flex items-center gap-3 mt-1">
                    <span class="text-purple-400 font-semibold">{{ exp.company }}</span>
                    <span v-if="exp.type" class="text-xs bg-purple-600 bg-opacity-20 text-purple-300 border border-purple-500 border-opacity-30 px-2 py-1 rounded-full">
                      {{ exp.type }}
                    </span>
                  </div>
                </div>
                <span class="text-gray-500 text-sm whitespace-nowrap bg-white bg-opacity-5 px-3 py-1 rounded-full">
                  📅 {{ exp.period }}
                </span>
              </div>

              <p class="text-gray-400 text-sm leading-relaxed mb-6">{{ exp.description }}</p>

              <!-- Sous-sections -->
              <div v-for="section in exp.sections" :key="section.title" class="mb-6">
                <h4 class="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span>{{ section.icon }}</span> {{ section.title }}
                </h4>
                <ul class="space-y-2">
                  <li v-for="item in section.items" :key="item"
                      class="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                    <span class="text-purple-500 mt-1 flex-shrink-0">▸</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tags techno -->
              <div class="flex flex-wrap mt-4">
                <span v-for="tech in exp.techs" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: 'Ingénieur Full Stack & Scrum Master',
    company: 'PlayZwell',
    type: 'CDI',
    period: '08/2024 — Présent',
    description: 'Conception et déploiement de plateformes web de gestion d\'activités de loisirs pour plusieurs clients simultanément en production, dans un contexte multi-clients exigeant coordination agile et priorisation rigoureuse.',
    sections: [
      {
        icon: '🔄',
        title: 'Facilitation Agile & Scrum Master',
        items: [
          'Animation de toutes les cérémonies Scrum (daily, sprint planning, review, rétrospective) et levée des obstacles bloquant la livraison.',
          'Coordination des priorités de plusieurs clients en production : arbitrage des demandes et protection de la capacité d\'équipe.',
          'Rédaction et clarification des user stories et critères d\'acceptation en lien direct avec les clients.',
          'Suivi de l\'amélioration continue via les rétrospectives avec proposition d\'actions correctives.',
        ]
      },
      {
        icon: '💻',
        title: 'Développement Technique',
        items: [
          'Conception de services backend RESTful avec Node.js et Express.js : gestion des utilisateurs, réservations, transactions et flux métiers.',
          'Développement d\'interfaces web avec React.js et Vue.js : tableaux de bord, suivi temps réel, gestion des opérations.',
          'Intégration de solutions de paiement en ligne et sécurisation des API (authentification, gestion des droits).',
          'Mise en place de communications temps réel et optimisation des bases de données relationnelles et NoSQL.',
        ]
      }
    ],
    techs: ['Node.js', 'Express.js', 'React.js', 'Vue.js', 'MongoDB', 'MySQL', 'Scrum', 'Jira']
  },
  {
    title: 'Ingénieur Full Stack — Stage de fin d\'études',
    company: 'Talan',
    type: 'Stage PFE',
    period: '02/2023 — 08/2023',
    description: 'Conception et réalisation d\'une application e-commerce complète, de la définition des besoins à la mise en production.',
    sections: [
      {
        icon: '🔄',
        title: 'Coordination Agile & Livraison',
        items: [
          'Participation aux cérémonies Scrum et suivi des livrables de sprint avec identification des blocages.',
          'Mise en place d\'une pipeline CI/CD avec Jenkins et Docker réduisant le temps de débogage.',
          'Recueil et formalisation des besoins avec les parties prenantes pour garantir l\'alignement produit.',
        ]
      },
      {
        icon: '💻',
        title: 'Développement Technique',
        items: [
          'Développement d\'API RESTful avec Symfony 6 pour la gestion des utilisateurs, produits et commandes.',
          'Interfaces réactives avec React.js garantissant une navigation fluide et intuitive.',
          'Implémentation d\'un moteur de recommandations personnalisées en Python et intégration d\'Elasticsearch.',
          'Conteneurisation complète avec Docker pour un déploiement simplifié entre environnements.',
        ]
      }
    ],
    techs: ['Symfony 6', 'React.js', 'Python', 'Elasticsearch', 'Docker', 'Jenkins', 'MySQL']
  }
]
</script>