<template>
  <main>
    <NavbarCustom></NavbarCustom>
    <b-container class="full-content">
      <section id="presentation">
        <Presentation></Presentation>
      </section>
      <section id="tools">
        <ToolsUse></ToolsUse>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </b-container>
    <FooterCustom></FooterCustom>
    <ScrollerCustom></ScrollerCustom>
  </main>
</template>

<script>
import { gsap } from 'gsap';
import NavbarCustom from '@/components/customs/2-navbarCustom/NavbarCustom.vue';
import Presentation from '@/components/containers/1-presentation/Presentation.vue';
import ToolsUse from '@/components/containers/2-toolsUse/ToolsUse.vue';
import Contact from '@/components/containers/5-contact/Contact.vue';
import FooterCustom from '@/components/customs/3-footerCustom/FooterCustom.vue';
import ScrollerCustom from '@/components/customs/4-scrollerCustom/ScrollerCustom.vue';

export default {
  name: 'Container',
  components: {
    NavbarCustom,
    Presentation,
    ToolsUse,
    Contact,
    FooterCustom,
    ScrollerCustom,
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      // Items GreeenSock
      // 1 - Appartition : app + logo + containers
      const logo = document.querySelector('.logo');
      const app = document.querySelector('#app');
      const presentation = document.querySelector('.presentation');
      const toolsUse = document.querySelector('.tools-use');
      const contact = document.querySelector('.contact');
      // 2 - Apparition des titres dans les conatainers
      const presTitle = document.querySelectorAll('.presentation h2 span');
      const toolsTitle = document.querySelectorAll('.tools-use h2 span');
      const contactTitle = document.querySelectorAll('.contact h2 span');
      // 3 - Apparition du contenu des containers
      const btns = document.querySelectorAll('.btn-first');
      const toolsFa = document.querySelectorAll('.tools-fa');
      const contactContent = document.querySelectorAll('.contact-content');
      // const medias = document.querySelectorAll('.bulle');

      // Pause des TimeLines
      const TLApp = gsap.timeline({ paused: true });
      const TLPresentation = gsap.timeline({ paused: true });
      const TLTools = gsap.timeline({ paused: true });
      const TLContact = gsap.timeline({ paused: true });

      TLApp
        .from(app, 0.5, { opacity: 0, ease: 'power2.out' })
        .from(logo, 0.5, { transform: 'scale(0)', ease: 'power2.out' });
      TLPresentation
        .from(presentation, 0.5, { opacity: 0, ease: 'power2.out' })
        .staggerFrom(presTitle, 1, { top: -50, opacity: 0, ease: 'power2.out' }, 0.3)
        .staggerFrom(btns, 1, { opacity: 0, ease: 'power2.out' }, 0.3);
      //  .staggerFrom(medias, 1, { right: -500, ease: 'power2.out' }, 0.3, '-=1')
      TLTools
        .from(toolsUse, 0.5, { opacity: 0, ease: 'power2.out' })
        .staggerFrom(toolsTitle, 1, { top: -50, opacity: 0, ease: 'power2.out' }, 0.3)
        .staggerFrom(toolsFa, 1, { opacity: 0, ease: 'power2.out' }, 0.3);
      TLContact
        .from(contact, 0.5, { opacity: 0, ease: 'power2.out' })
        .staggerFrom(contactTitle, 1, { top: -50, opacity: 0, ease: 'power2.out' }, 0.3)
        .staggerFrom(contactContent, 1, { opacity: 0, ease: 'power2.out' }, 0.3);
      // Let's go !
      TLApp.play();
      TLPresentation.play();
      TLTools.play();
      TLContact.play();
    },
  },
};
</script>

<style lang="scss">
.container {
  border-radius: 15px;
  position: relative;
  overflow-x: hidden;
  height: auto;
}
.full-content {
  min-height: calc(100vh - 148px);
}
</style>
