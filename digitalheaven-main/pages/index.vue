<template>
  <div class="home-page">
    <hero-section />
    <about-section />
    <testimonials-section />
    <contact-section />
    <footer-section />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/aboutSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import FooterSection from '~/components/footerSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    AboutSection,
    TestimonialsSection,
    ContactSection,
    FooterSection,
  },
  head: {
    title: 'CONST',
    titleTemplate: '%s | Melhore sua imagem',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '',
      },
      // Open Graph
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'CONST',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.const.dev.br/',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'CONST',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@const' },
    ],
    link: [{ rel: 'canonical', href: 'https://www.const.dev.br/' }],
  },
}
</script>
