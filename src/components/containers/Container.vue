<template>
  <main>
    <NavbarCustom></NavbarCustom>
    <b-container fluid class="full-content">
      <section id="presentation">
        <Presentation></Presentation>
      </section>
      <section id="shortcuts">
        <Shortcuts></Shortcuts>
      </section>
      <section id="tools">
        <ToolsUse></ToolsUse>
      </section>
      <section id="projects">
        <Projects></Projects>
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
// GSAP
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Commun Customs
import NavbarCustom from '@/components/customs/2-navbarCustom/NavbarCustom.vue';
import FooterCustom from '@/components/customs/3-footerCustom/FooterCustom.vue';
import ScrollerCustom from '@/components/customs/4-scrollerCustom/ScrollerCustom.vue';
// Contents
import Presentation from '@/components/containers/1-presentation/Presentation.vue';
import Shortcuts from '@/components/containers/2-shortcuts/Shortcuts.vue';
import ToolsUse from '@/components/containers/3-tools-use/ToolsUse.vue';
import Projects from '@/components/containers/4-projects/Projects.vue';
import Contact from '@/components/containers/5-contact/Contact.vue';

export default {
  name: 'Container',
  components: {
    NavbarCustom,
    Presentation,
    Shortcuts,
    ToolsUse,
    Projects,
    Contact,
    FooterCustom,
    ScrollerCustom,
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      // Items GreenSock
      // 1 - App + logo + containers
      const app = document.querySelector('#app');
      const logo = document.querySelector('.logo');
      const presentation = document.querySelector('.presentation');
      const shortcuts = document.querySelector('.shortcuts');
      const toolsUse = document.querySelector('.tools-use');
      const projects = document.querySelector('.projects');
      const contact = document.querySelector('.contact');
      // 2 - Containers titles
      const presTitle = document.querySelectorAll('.presentation h2 span');
      const shortcutsFa = document.querySelectorAll('.shortcuts h2')[0];
      const shortcutsTitle = document.querySelectorAll('.shortcuts h2')[1];
      const toolsFa = document.querySelectorAll('.tools-use h2')[0];
      const toolsTitle = document.querySelectorAll('.tools-use h2')[1];
      const projectsFa = document.querySelectorAll('.projects h2')[0];
      const projectsTitle = document.querySelectorAll('.projects h2')[1];
      const contactFa = document.querySelectorAll('.contact h2')[0];
      const contactTitle = document.querySelectorAll('.contact h2')[1];
      // 3 - Containers content
      const mouseScroll = document.querySelector('.mouse-scroll');
      const shortcutBtns = document.querySelectorAll('.shortcut-btn');
      const toolsContent = document.querySelectorAll('.tools-fa');
      const projectsCards = document.querySelectorAll('.projects-cards');

      // Création et pause de la TimeLine
      const TLApp = gsap.timeline({ paused: true });
      // Add ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({
        toggleActions: 'restart pause resume reverse',
      });
      // Add animations
      TLApp
        // App
        .from(app, 0.5, { opacity: 0, ease: 'power2.out' })
        .from(logo, 0.5, { transform: 'scale(0)', ease: 'power2.out' }, '-=0.5')
        // 1 - Présentation
        .from(presentation, 0.5, { opacity: 0, ease: 'power2.out' })
        .staggerFrom(presTitle, 0.5, { top: -60, opacity: 0, ease: 'power2.out' }, 0.1)
        .from(mouseScroll, 1.5, { y: -100, opacity: 0, ease: 'bounce' });
      // // Let's go !
      TLApp.play();
      // 2 - Shortcuts - Container
      gsap.from(shortcuts, {
        scrollTrigger: {
          trigger: shortcuts,
          id: 'shortcuts',
          markers: false,
          start: 'top 100%',
          end: 'top 80%',
          scrub: true,
        },
        opacity: 0,
        ease: 'power2.in',
      });
      // 2 - Shortcuts - Titles
      gsap.from(shortcutsFa, {
        scrollTrigger: {
          trigger: shortcutsFa,
          id: 'shortcut-fa',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        rotation: 360,
        ease: 'bounce',
      });
      gsap.from(shortcutsTitle, {
        scrollTrigger: {
          trigger: shortcutsTitle,
          id: 'shortcut-title',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        ease: 'bounce',
      });
      // 2 - Shortcuts - Buttons
      shortcutBtns.forEach((btn, i) => {
        const rot = i % 2 === 0 ? 90 : 0;
        const y = i % 2 === 0 ? 100 : 50;
        gsap.from(btn, {
          scrollTrigger: {
            trigger: btn,
            id: `shortcuts-btn${i + 1}`,
            markers: false,
            start: 'top 80%',
          },
          y,
          rotation: i === 2 ? -rot : rot,
          opacity: 0,
          ease: 'power2.out',
        });
      });
      // 3 - Tools - Container
      gsap.from(toolsUse, {
        scrollTrigger: {
          trigger: toolsUse,
          id: 'tools',
          markers: false,
          start: 'top 100%',
          end: 'top 80%',
          scrub: true,
        },
        opacity: 0,
        ease: 'power2.in',
      });
      // 3 - Tools - Titles
      gsap.from(toolsFa, {
        scrollTrigger: {
          trigger: toolsFa,
          id: 'tools-fa',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        rotation: 360,
        ease: 'bounce',
      });
      gsap.from(toolsTitle, {
        scrollTrigger: {
          trigger: toolsTitle,
          id: 'tools-title',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        ease: 'bounce',
      });
      // 3 - Tools - Content
      toolsContent.forEach((fa, i) => {
        gsap.from(fa, {
          scrollTrigger: {
            trigger: fa,
            id: `tools-content-fa${i + 1}`,
            markers: false,
            start: 'top 80%',
          },
          y: 50,
          opacity: 0,
          ease: 'power2.out',
        });
      });
      // 4 - Projects - Container
      gsap.from(projects, {
        scrollTrigger: {
          trigger: projects,
          id: 'projects',
          markers: false,
          start: 'top 100%',
          end: 'top 80%',
          scrub: true,
        },
        opacity: 0,
        ease: 'power2.in',
      });
      // 4 - Projetcs - Titles
      gsap.from(projectsFa, {
        scrollTrigger: {
          trigger: projectsFa,
          id: 'projects-fa',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        rotation: 360,
        ease: 'bounce',
      });
      gsap.from(projectsTitle, {
        scrollTrigger: {
          trigger: projectsTitle,
          id: 'projects-title',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        ease: 'bounce',
      });
      // 4 - Projects - Content
      projectsCards.forEach((cards, i) => {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cards,
            id: `cards-${i + 1}`,
            markers: false,
            start: 'top 80%',
          },
          y: 200,
          opacity: 0,
          ease: 'power2.out',
        });
      });
      // 5 - Contact - Container
      gsap.from(contact, {
        scrollTrigger: {
          trigger: contact,
          id: 'contact',
          markers: false,
          start: 'top 100%',
          end: 'top 80%',
          scrub: true,
        },
        opacity: 0,
        ease: 'power2.in',
      });
      // 5 - Contact - Titles
      gsap.from(contactFa, {
        scrollTrigger: {
          trigger: contactFa,
          id: 'contact-fa',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        rotation: 360,
        ease: 'bounce',
      });
      gsap.from(contactTitle, {
        scrollTrigger: {
          trigger: contactTitle,
          id: 'contact-title',
          markers: false,
          start: 'top 70%',
        },
        y: -100,
        opacity: 0,
        ease: 'bounce',
      });
      // 5 - Contact - Content
    },
  },
};
</script>

<style lang="scss">
.section-container-fluid {
  border: 1px solid $green;
  box-shadow: 0 0 30px 0 $green-50;
  border-radius: 15px;
  color: $green;
  background: $black;
  background-color: $black;
  overflow-wrap: break-word;
}
.full-content {
  min-height: calc(100vh - 164px);
}
</style>
