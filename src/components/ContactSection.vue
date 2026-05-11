<template>
  <section id="contact" class="py-28 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <p class="section-label mb-3">Travaillons ensemble</p>
        <div class="section-line"></div>
        <h2 class="serif text-4xl md:text-5xl" style="color:#E8E2D9;">Me <em style="color:#C9A96E;">contacter</em></h2>
        <p style="color:#555; margin-top:16px; font-size:15px;">Disponible pour des opportunités en dev full stack, Scrum Master ou Product Owner.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <!-- Infos -->
        <div data-aos="fade-right" class="space-y-4">
          <a v-for="info in contactInfos" :key="info.label"
             :href="info.href" target="_blank"
             class="card card-lift flex items-center gap-5 p-5 no-underline"
             style="text-decoration:none;">
            <div class="mono text-lg flex-shrink-0" style="color:#C9A96E; width:36px; text-align:center;">{{ info.icon }}</div>
            <div>
              <div class="mono mb-1" style="font-size:10px; letter-spacing:0.12em; color:#444; text-transform:uppercase;">{{ info.label }}</div>
              <div style="color:#E8E2D9; font-size:14px; font-weight:500;">{{ info.value }}</div>
            </div>
          </a>
        </div>

        <!-- Formulaire -->
        <div class="card p-8" data-aos="fade-left">
          <div class="space-y-5">
            <div>
              <label class="mono block mb-2" style="font-size:10px; letter-spacing:0.12em; color:#555; text-transform:uppercase;">Votre nom</label>
              <input v-model="form.name" type="text" placeholder="John Doe"
                     style="width:100%; background:#0A0A0A; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:12px 16px; color:#E8E2D9; font-size:14px; outline:none; font-family:'DM Sans',sans-serif; transition:border-color 0.2s; box-sizing:border-box;"
                     @focus="$event.target.style.borderColor='rgba(201,169,110,0.5)'"
                     @blur="$event.target.style.borderColor='rgba(255,255,255,0.08)'" />
            </div>
            <div>
              <label class="mono block mb-2" style="font-size:10px; letter-spacing:0.12em; color:#555; text-transform:uppercase;">Votre email</label>
              <input v-model="form.email" type="email" placeholder="john@example.com"
                     style="width:100%; background:#0A0A0A; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:12px 16px; color:#E8E2D9; font-size:14px; outline:none; font-family:'DM Sans',sans-serif; transition:border-color 0.2s; box-sizing:border-box;"
                     @focus="$event.target.style.borderColor='rgba(201,169,110,0.5)'"
                     @blur="$event.target.style.borderColor='rgba(255,255,255,0.08)'" />
            </div>
            <div>
              <label class="mono block mb-2" style="font-size:10px; letter-spacing:0.12em; color:#555; text-transform:uppercase;">Message</label>
              <textarea v-model="form.message" rows="4" placeholder="Votre message..."
                        style="width:100%; background:#0A0A0A; border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:12px 16px; color:#E8E2D9; font-size:14px; outline:none; font-family:'DM Sans',sans-serif; transition:border-color 0.2s; box-sizing:border-box; resize:none;"
                        @focus="$event.target.style.borderColor='rgba(201,169,110,0.5)'"
                        @blur="$event.target.style.borderColor='rgba(255,255,255,0.08)'"></textarea>
            </div>

            <button @click="send"
                    :disabled="sending"
                    class="btn-primary w-full text-center"
                    style="border:none; cursor:pointer; width:100%; opacity: 1; transition: all 0.3s;"
                    :style="{ opacity: sending ? '0.6' : '1' }">
              {{ sending ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>

            <!-- Succès -->
            <div v-if="success" class="text-center py-3 rounded-xl"
                 style="background:rgba(201,169,110,0.1); border:1px solid rgba(201,169,110,0.3); color:#C9A96E; font-size:14px;">
              ✓ Message envoyé avec succès ! Je vous répondrai sous 48h.
            </div>

            <!-- Erreur -->
            <div v-if="error" class="text-center py-3 rounded-xl"
                 style="background:rgba(255,80,80,0.08); border:1px solid rgba(255,80,80,0.2); color:#ff6b6b; font-size:14px;">
              ✗ {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t py-8 text-center" style="border-color:rgba(255,255,255,0.05);">
    <p class="mono" style="font-size:11px; letter-spacing:0.1em; color:#333;">
      © 2025 WAEL BOUATAY — CONÇU & DÉVELOPPÉ AVEC VUE.JS
    </p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// ⚠️ REMPLACE CES 3 VALEURS PAR LES TIENNES (depuis emailjs.com)
const EMAILJS_SERVICE_ID = 'service_portfolio123'
const EMAILJS_TEMPLATE_ID = 'template_aaxi6ax'
const EMAILJS_PUBLIC_KEY = 'ea527x6M95g1Hmav2'

const form = ref({ name: '', email: '', message: '' })
const sending = ref(false)
const success = ref(false)
const error = ref('')

const contactInfos = [
  { icon: '✉', label: 'Email', value: 'wael.bouatay@gmail.com', href: 'mailto:wael.bouatay@gmail.com' },
  { icon: '✆', label: 'Téléphone', value: '+216 99 00 55 41', href: 'tel:+21699005541' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/wael-bouatay', href: 'https://linkedin.com/in/wael-bouatay' },
  { icon: '⌖', label: 'Localisation', value: 'Tunisie', href: '#' },
]

const send = async () => {
  error.value = ''
  if (!form.value.name || !form.value.email || !form.value.message) {
    error.value = 'Veuillez remplir tous les champs.'
    return
  }
  sending.value = true
  try {
    await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
        },
        EMAILJS_PUBLIC_KEY
    )
    success.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => success.value = false, 6000)
  } catch (e) {
    error.value = 'Erreur lors de l\'envoi. Réessayez ou contactez-moi directement par email.'
  } finally {
    sending.value = false
  }
}
</script>