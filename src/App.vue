<template>
  <div class="grid-bg min-h-screen">
    <!-- NAV -->
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white border-opacity-5"
         style="background: rgba(8,11,20,0.85); backdrop-filter: blur(18px);">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span class="display font-extrabold text-xl tracking-tight gradient-text">WB.</span>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a>
        </div>

        <!-- Mobile burger -->
        <button @click="menuOpen = !menuOpen" class="md:hidden p-2 rounded-lg"
                style="background:rgba(129,140,248,0.08); border:1px solid rgba(129,140,248,0.15); color:#818CF8;">
          <svg v-if="!menuOpen" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <a href="#contact" class="btn-primary hidden md:inline-block">Me contacter</a>
      </div>

      <!-- Mobile menu -->
      <transition name="slide">
        <div v-if="menuOpen" class="md:hidden border-t border-white border-opacity-5 px-6 py-5 space-y-1"
             style="background: rgba(8,11,20,0.98);">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
             @click="menuOpen = false"
             class="block py-3 text-sm font-medium border-b border-white border-opacity-5"
             style="color:#94A3B8; text-decoration:none;">
            {{ link.label }}
          </a>
          <a href="#contact" class="btn-primary block text-center mt-4" @click="menuOpen = false">
            Me contacter
          </a>
        </div>
      </transition>
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
import HeroSection        from './components/HeroSection.vue'
import AboutSection       from './components/AboutSection.vue'
import SkillsSection      from './components/SkillsSection.vue'
import ExperienceSection  from './components/ExperienceSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import ContactSection     from './components/ContactSection.vue'

const menuOpen = ref(false)
const navLinks = [
  { href: '#about',          label: 'Profil' },
  { href: '#skills',         label: 'Compétences' },
  { href: '#experience',     label: 'Expériences' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact',        label: 'Contact' },
]
onMounted(() => AOS.init({ duration: 700, once: true, offset: 60 }))
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
