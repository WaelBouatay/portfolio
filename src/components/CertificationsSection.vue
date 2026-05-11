<template>
  <section id="certifications" class="py-28 px-6" style="background:#0D0D0D;">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label mb-3">Accréditations</p>
        <div class="section-line"></div>
        <h2 class="serif text-4xl md:text-5xl" style="color:#E8E2D9;"><em style="color:#C9A96E;">Certifications</em> & Formation</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <a v-for="(cert, i) in certifications" :key="cert.title"
           :href="cert.link" target="_blank"
           class="card card-lift p-7 flex items-start gap-5 no-underline"
           style="text-decoration:none;"
           data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="mono text-2xl flex-shrink-0" style="color:#C9A96E; font-weight:700; letter-spacing:-0.03em;">{{ cert.num }}</div>
          <div class="flex-1">
            <div class="mono mb-1" style="font-size:10px; letter-spacing:0.14em; color:#555; text-transform:uppercase;">{{ cert.issuer }}</div>
            <h3 class="serif text-lg font-bold mb-2" style="color:#E8E2D9;">{{ cert.title }}</h3>
            <p style="color:#666; font-size:13px; line-height:1.7; margin-bottom:12px;">{{ cert.description }}</p>
            <div class="flex items-center gap-3 flex-wrap">
              <span class="mono" style="color:#444; font-size:11px;">{{ cert.year }}</span>
              <span style="font-size:11px; background:rgba(201,169,110,0.12); color:#C9A96E; border:1px solid rgba(201,169,110,0.3); padding:2px 10px; border-radius:100px; font-weight:500;">
                ✓ Certifié
              </span>
              <span style="font-size:11px; color:#555; letter-spacing:0.05em;">↗ Voir le certificat</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Formation -->
      <a href="https://esprit.tn" target="_blank"
         class="card card-lift p-10 text-center block no-underline"
         style="text-decoration:none; background: linear-gradient(135deg, #111 60%, #141208);"
         data-aos="fade-up">
        <div class="mono mb-3" style="font-size:10px; letter-spacing:0.15em; color:#555; text-transform:uppercase;">Formation initiale</div>
        <h3 class="serif text-2xl md:text-3xl font-bold mb-2" style="color:#E8E2D9;">Diplôme d'ingénieur en Informatique</h3>
        <p class="serif text-lg italic mb-1" style="color:#C9A96E;">
          ESPRIT — École Supérieure Privée d'Ingénierie et de Technologies ↗
        </p>
        <p class="mono" style="font-size:11px; color:#444; letter-spacing:0.1em;">OBTENU EN OCTOBRE 2023</p>
      </a>
    </div>
  </section>
</template>

<script setup>
const certifications = [
  {
    num: '01',
    issuer: 'Scrum.org',
    title: 'Professional Scrum Master (PSM I)',
    description: "Certification internationale validant la maîtrise du framework Scrum et des pratiques de facilitation d'équipes agiles.",
    year: '2025',
    link: 'https://www.scrum.org/certificates/1'
  },
  {
    num: '02',
    issuer: 'Scrum.org',
    title: 'Professional Scrum Product Owner (PSPO I)',
    description: "Certification validant la maîtrise du rôle de Product Owner, de la gestion du backlog et de la maximisation de la valeur produit.",
    year: '2025',
    link: 'https://www.scrum.org/certificates/1'
  },
  {
    num: '03',
    issuer: 'Coursera',
    title: 'Initiating and Planning Projects',
    description: "Fondamentaux de la gestion de projet : initialisation, planification, définition des objectifs et livrables.",
    year: '2020',
    link: 'https://www.coursera.org/account/accomplishments'
  },
  {
    num: '04',
    issuer: 'Coursera',
    title: 'SQL for Data Science',
    description: "Maîtrise du SQL appliqué à l'analyse de données, requêtes avancées et manipulation de bases de données.",
    year: '2020',
    link: 'https://www.coursera.org/account/accomplishments'
  },
]
</script>