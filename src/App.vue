<template>
  <div>
    <!-- NAV -->
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white border-opacity-5"
         style="background: rgba(10,10,10,0.88); backdrop-filter: blur(16px);">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span class="serif font-black text-xl tracking-tight" style="color:#C9A96E;">WB<span style="color:#E8E2D9;">.</span></span>
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a>
        </div>
        <!-- Mobile menu toggle -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-cream" style="background:none;border:none;cursor:pointer;">
          <svg v-if="!menuOpen" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <a href="#contact" class="btn-primary hidden md:inline-block">Me contacter</a>
      </div>
      <!-- Mobile dropdown -->
      <div v-if="menuOpen" class="md:hidden border-t border-white border-opacity-5 px-6 py-4 space-y-3"
           style="background: rgba(10,10,10,0.97);">
        <a v-for="link in navLinks" :key="link.href" :href="link.href"
           @click="menuOpen = false"
           class="block text-sm text-gray-400 hover:text-gold py-2 uppercase tracking-widest" style="font-size:12px;">
          {{ link.label }}
        </a>
        <a href="#contact" class="btn-primary block text-center mt-4" @click="menuOpen = false">Me contacter</a>
      </div>
    </nav>

    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <CertificationsSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ContactSection from './components/ContactSection.vue'

const menuOpen = ref(false)

const navLinks = [
  { href: '#about', label: 'Profil' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]
onMounted(() => AOS.init({ duration: 700, once: true, offset: 60 }))
</script>