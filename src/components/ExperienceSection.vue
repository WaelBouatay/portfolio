<template>
  <section id="experience" class="py-28 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label">Parcours</p>
        <div class="section-line"></div>
        <h2 class="display text-4xl md:text-5xl font-extrabold" style="color:#E2E8F0;">
          Expériences <span class="gradient-text">professionnelles</span>
        </h2>
      </div>

      <div class="space-y-8">
        <div v-for="(exp, i) in experiences" :key="i"
             class="card p-8 md:p-10"
             data-aos="fade-up" :data-aos-delay="i * 100">

          <!-- Header -->
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <div>
              <h3 class="display text-2xl font-bold mb-2" style="color:#E2E8F0;">{{ exp.title }}</h3>
              <div class="flex flex-wrap items-center gap-2">
                <span style="color:#818CF8;font-weight:600;font-size:15px;">{{ exp.company }}</span>
                <span v-if="exp.type" class="pill" style="font-size:11px;">{{ exp.type }}</span>
              </div>
            </div>
            <span class="pill whitespace-nowrap" style="font-size:12px;align-self:flex-start;">📅 {{ exp.period }}</span>
          </div>

          <p style="color:#64748B;font-size:14px;line-height:1.85;margin-bottom:8px;">{{ exp.description }}</p>

          <!-- Clients -->
          <div v-if="exp.clients" class="mb-6 mt-3 px-4 py-3 rounded-xl"
               style="background:rgba(129,140,248,0.06);border:1px solid rgba(129,140,248,0.15);">
            <span style="font-size:12px;font-weight:600;color:#818CF8;letter-spacing:0.05em;">CLIENTS — </span>
            <span style="font-size:13px;color:#94A3B8;">{{ exp.clients }}</span>
          </div>

          <!-- Sections -->
          <div v-for="section in exp.sections" :key="section.title" class="mt-6">
            <div class="flex items-center gap-3 mb-3">
              <div style="width:20px;height:2px;background:linear-gradient(90deg,#6C63FF,#C084FC);border-radius:2px;flex-shrink:0;"></div>
              <h4 style="font-size:11px;font-weight:700;letter-spacing:0.14em;color:#818CF8;text-transform:uppercase;">
                {{ section.title }}
              </h4>
            </div>
            <ul class="space-y-2 pl-2">
              <li v-for="item in section.items" :key="item"
                  style="color:#94A3B8;font-size:14px;line-height:1.8;padding-left:14px;position:relative;">
                <span style="position:absolute;left:0;color:#6C63FF;font-size:16px;line-height:1.5;">›</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Techs -->
          <div class="flex flex-wrap mt-8 pt-6" style="border-top:1px solid rgba(255,255,255,0.05);">
            <span v-for="t in exp.techs" :key="t" class="pill">{{ t }}</span>
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
    description: "Conception et développement de plateformes web et services backend destinés à la gestion d'activités de loisirs, intégrant la réservation, les paiements, la gestion des comptes clients et le reporting opérationnel, déployés en production pour plusieurs clients.",
    clients: 'Les Biens en Commun, Zosh, GameHouse, Monky, Indoor Kletterwald, Raiffeisen Parc',
    sections: [
      {
        title: 'Facilitation Agile & Scrum Master',
        items: [
          "Animation de l'ensemble des cérémonies Scrum (daily stand-up, sprint planning, sprint review, rétrospective), avec détection et levée des obstacles bloquant la livraison.",
          "Coordination des priorités concurrentes de plusieurs clients en production : arbitrage des demandes, protection de la capacité d'équipe et alignement continu avec les parties prenantes.",
          "Rédaction et clarification des user stories et critères d'acceptation en lien direct avec les clients, réduisant les incompréhensions en phase de review.",
          "Facilitation technique crédible : anticipation des risques d'architecture, facilitation des estimations et interlocuteur fiable pour l'équipe.",
          "Suivi de l'amélioration continue via les rétrospectives : proposition et traçabilité des actions correctives d'une itération à l'autre.",
        ]
      },
      {
        title: 'Développement Technique',
        items: [
          "Conception et développement de services backend RESTful avec Node.js et Express.js, incluant la gestion des utilisateurs, des réservations, des transactions et des flux métiers.",
          "Développement d'interfaces web avec React.js et Vue.js : tableaux de bord administrateurs, suivi en temps réel des activités, gestion des opérations métier.",
          "Intégration de solutions de paiement en ligne et sécurisation des API (authentification, contrôle des droits d'accès).",
          "Mise en place de communications temps réel pour améliorer la réactivité et la synchronisation des événements applicatifs.",
          "Modélisation et optimisation de bases de données relationnelles et NoSQL, avec accent sur la performance et la fiabilité en production.",
          "Contribution à la conception de l'architecture applicative et à son évolution continue.",
        ]
      }
    ],
    techs: ['Node.js','Express.js','React.js','Vue.js','MongoDB','MySQL','Docker','Scrum','Jira']
  },
  {
    title: "Ingénieur Full Stack — Stage de fin d'études",
    company: 'Talan',
    type: 'Stage PFE',
    period: '02/2023 — 08/2023',
    description: "Conception et réalisation d'une application e-commerce complète pour la boutique « HibouT'chou », de la définition des besoins à la mise en production.",
    clients: null,
    sections: [
      {
        title: 'Coordination Agile & Livraison',
        items: [
          "Définition des besoins avec les parties prenantes et alignement du développement sur les objectifs, assurant une livraison dans les délais.",
          "Participation aux cérémonies Scrum : daily stand-ups, sprint planning, rétrospectives — suivi des livrables et identification des blocages.",
          "Mise en place d'une pipeline CI/CD avec Jenkins et Docker, garantissant une livraison continue et un gain sur le temps de débogage.",
          "Recueil et formalisation des besoins avec les parties prenantes pour garantir l'alignement produit.",
        ]
      },
      {
        title: 'Développement Technique',
        items: [
          "Développement d'API RESTful avec Symfony 6 pour la gestion des utilisateurs, produits et commandes.",
          "Interfaces réactives avec React.js garantissant une intégration fluide avec les API et une navigation intuitive.",
          "Implémentation d'un moteur de recommandations personnalisées en Python, augmentant la découverte de produits.",
          "Intégration d'Elasticsearch pour optimiser les recherches et réduire le temps de requête.",
          "Conteneurisation complète avec Docker, simplifiant le déploiement et réduisant les problèmes de configuration.",
        ]
      }
    ],
    techs: ['Symfony 6','React.js','Python','Elasticsearch','Docker','Jenkins','MySQL','Scrum','Jira']
  }
]
</script>