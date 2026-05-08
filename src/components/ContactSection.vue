<template>
  <section id="contact" class="py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <div data-aos="fade-up">
        <p class="text-purple-400 text-sm font-medium tracking-widest uppercase text-center mb-2">Travaillons ensemble</p>
        <h2 class="text-4xl font-bold text-center mb-4">Me <span class="gradient-text">contacter</span></h2>
        <p class="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Disponible pour des opportunités en développement full stack, Scrum Master ou Product Owner. N'hésitez pas à me contacter !
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Infos de contact -->
        <div data-aos="fade-right" class="space-y-6">
          <div v-for="info in contactInfos" :key="info.label"
               class="flex items-center gap-4 bg-card border border-white border-opacity-5 rounded-xl p-5 card-hover">
            <div class="w-12 h-12 bg-purple-600 bg-opacity-20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              {{ info.icon }}
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-wider">{{ info.label }}</p>
              <a :href="info.href" target="_blank" class="text-white font-medium hover:text-purple-400 transition-colors">
                {{ info.value }}
              </a>
            </div>
          </div>
        </div>

        <!-- Formulaire -->
        <div data-aos="fade-left">
          <div class="bg-card border border-white border-opacity-5 rounded-2xl p-8">
            <div class="space-y-5">
              <div>
                <label class="block text-gray-400 text-sm mb-2">Votre nom</label>
                <input v-model="form.name" type="text" placeholder="John Doe"
                       class="w-full bg-dark border border-white border-opacity-10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <div>
                <label class="block text-gray-400 text-sm mb-2">Votre email</label>
                <input v-model="form.email" type="email" placeholder="john@example.com"
                       class="w-full bg-dark border border-white border-opacity-10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <div>
                <label class="block text-gray-400 text-sm mb-2">Message</label>
                <textarea v-model="form.message" rows="4" placeholder="Votre message..."
                          class="w-full bg-dark border border-white border-opacity-10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
              </div>
              <button @click="sendMail"
                      class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                Envoyer le message 📨
              </button>
              <p v-if="sent" class="text-green-400 text-sm text-center">✅ Message envoyé avec succès !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t border-white border-opacity-5 py-8 text-center text-gray-600 text-sm">
    <p>© 2025 Wael Bouatay — Conçu & développé avec ❤️ et Vue.js</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

const contactInfos = [
  { icon: '📧', label: 'Email', value: 'wael.bouatay@gmail.com', href: 'mailto:wael.bouatay@gmail.com' },
  { icon: '📱', label: 'Téléphone', value: '+216 99 00 55 41', href: 'tel:+21699005541' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/wael-bouatay', href: 'https://www.linkedin.com/in/wael-bouatay-4a05661b5/' },
  { icon: '📍', label: 'Localisation', value: 'Tunisie', href: '#' },
]

const sendMail = () => {
  if (!form.value.name || !form.value.email || !form.value.message) return
  // Ouvre le client mail avec les données pré-remplies
  const subject = encodeURIComponent(`Contact Portfolio — ${form.value.name}`)
  const body = encodeURIComponent(`Nom: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)
  window.open(`mailto:wael.bouatay@gmail.com?subject=${subject}&body=${body}`)
  sent.value = true
  setTimeout(() => sent.value = false, 4000)
}
</script>