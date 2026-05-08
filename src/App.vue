<template>
  <div>
    <!-- Navigation fixe -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-dark bg-opacity-80 backdrop-blur-md border-b border-white border-opacity-5">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span class="font-extrabold text-lg gradient-text">WB.</span>
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href"
             :href="link.href"
             class="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200">
            {{ link.label }}
          </a>
        </div>
        <a href="mailto:wael.bouatay@gmail.com"
           class="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300">
          Embauchez-moi
        </a>
      </div>
    </nav>

    <!-- Sections -->
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <CertificationsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ContactSection from './components/ContactSection.vue'

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  AOS.init({ duration: 800, once: true, offset: 80 })
})
</script>