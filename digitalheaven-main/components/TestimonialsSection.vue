<template>
  <section class="testimonials-section">
    <h2 class="testimonials-title" data-aos="fade-up">O que nossos clientes dizem</h2>
    <div class="testimonials-container" data-aos="fade-up">
      <div class="testimonial-item">
        <p class="testimonial-text">
          A CONST ajudou muito a melhorar o reconhecimento da minha empresa! Nossas vendas subiram muito.
        </p>
        <p class="testimonial-author">- João Pedro </p>
      </div>
      <div class="testimonial-item">
        <p class="testimonial-text">
          Agora meus clientes tem todas as informções que precisam no meu site
        </p>
        <p class="testimonial-author">- Arthur Cabral</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.testimonials-section {
  background-color: var(--background);
  padding: 2em 0;
  text-align: center;
}

.testimonials-title {
  color: var(--primary-light);
  font-size: 2em;
  margin-bottom: 1em;
}

.testimonials-container {
  display: grid;
  gap: 2em;
  justify-items: center;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-item {
  background-image: linear-gradient(
    to right,
    var(--primary-light),
    var(--primary)
  );
  color: var(--background);
  padding: 2em;
  border-radius: 1em;
  max-width: 600px;
}

.testimonial-text {
  font-size: 1.2em;
  line-height: 1.6em;
  margin-bottom: 1em;
}

.testimonial-text::before {
  content: '“';
  color: var(--background);
  font-size: 2em;
}

.testimonial-text::after {
  content: '”';
  color: var(--background);
  font-size: 2em;
}

.testimonial-author {
  font-size: 1em;
  font-style: italic;
}

@media (min-width: 768px) {
  .testimonials-container {
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
  }
}
</style>
