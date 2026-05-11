<template>
  <section id="certifications" class="py-28 px-6" style="background:rgba(255,255,255,0.015);">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label">Accréditations</p>
        <div class="section-line"></div>
        <h2 class="display text-4xl md:text-5xl font-extrabold" style="color:#E2E8F0;">
          <span class="gradient-text">Certifications</span> & Formation
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <a v-for="(cert, i) in certifications" :key="cert.title"
           :href="cert.link" target="_blank"
           class="card p-7 flex items-start gap-5"
           style="text-decoration:none;cursor:pointer;"
           data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
               style="background:rgba(129,140,248,0.1);border:1px solid rgba(129,140,248,0.2);">
            {{ cert.icon }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="section-label mb-1" style="font-size:10px;">{{ cert.issuer }}</div>
            <h3 class="display font-bold mb-2" style="color:#E2E8F0;font-size:16px;line-height:1.4;">{{ cert.title }}</h3>
            <p style="color:#64748B;font-size:13px;line-height:1.7;margin-bottom:12px;">{{ cert.description }}</p>
            <div class="flex items-center gap-3 flex-wrap">
              <span style="font-size:11px;color:#475569;">{{ cert.year }}</span>
              <span style="font-size:11px;background:rgba(34,197,94,0.1);color:#4ADE80;border:1px solid rgba(34,197,94,0.2);padding:2px 10px;border-radius:100px;font-weight:600;">
                ✓ Certifié
              </span>
              <span style="font-size:11px;color:#818CF8;">↗ Voir le certificat</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Formation -->
      <a href="https://esprit.tn" target="_blank"
         class="card p-10 text-center block glow"
         style="text-decoration:none;background:linear-gradient(135deg,rgba(108,99,255,0.06),rgba(192,132,252,0.06));"
         data-aos="fade-up">
        <div class="text-5xl mb-4">🎓</div>
        <p class="section-label mb-3">Formation initiale</p>
        <h3 class="display text-2xl md:text-3xl font-extrabold mb-2" style="color:#E2E8F0;">
          Diplôme d'ingénieur en Informatique
        </h3>
        <p class="gradient-text font-bold text-lg mb-2">
          ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies ↗
        </p>
        <p style="font-size:13px;color:#475569;letter-spacing:0.08em;font-weight:500;">OBTENU EN OCTOBRE 2023</p>
      </a>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  {
    icon: '🏅',
    issuer: 'Scrum.org',
    title: 'Professional Scrum Master (PSM I)',
    description: "Certification internationale validant la maîtrise du framework Scrum et des pratiques de facilitation d'équipes agiles.",
    year: '2025',
    link: 'https://www.scrum.org/user/1502729'
  },
  {
    icon: '🏅',
    issuer: 'Scrum.org',
    title: 'Professional Scrum Product Owner (PSPO I)',
    description: "Certification validant la maîtrise du rôle de Product Owner, de la gestion du backlog et de la maximisation de la valeur produit.",
    year: '2025',
    link: 'https://www.scrum.org/user/1502729'
  },
  {
    icon: '📊',
    issuer: 'Coursera',
    title: 'Initiating and Planning Projects',
    description: "Fondamentaux de la gestion de projet : initialisation, planification, définition des objectifs et livrables.",
    year: '2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/WDR4VRJ2DXR7'
  },
  {
    icon: '🗄️',
    issuer: 'Coursera',
    title: 'SQL for Data Science',
    description: "Maîtrise du SQL appliqué à l'analyse de données, requêtes avancées et manipulation de bases de données.",
    year: '2020',
    link: 'https://www.coursera.org/account/accomplishments/certificate/NJP5F49R9KET'
  },
]
</script>