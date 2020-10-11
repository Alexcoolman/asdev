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
      const shortcutsTitle = document.querySelectorAll('.shortcuts h2 span');
      const toolsTitle = document.querySelectorAll('.tools-use h2 span');
      const projectsTitle = document.querySelectorAll('.projects h2 span');
      const contactTitle = document.querySelectorAll('.contact h2 span');
      // 3 - Containers content
      const mouseScroll = document.querySelector('.mouse-scroll');
      const shortcutBtns = document.querySelectorAll('.shortcut-btn');
      const toolsFa = document.querySelectorAll('.tools-fa');
      const projectsCars = document.querySelectorAll('.projects-cards');

      // Création et pause de la TimeLine
      const TLApp = gsap.timeline({ paused: true });
      // Ajout de ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({
        toggleActions: 'restart complete reverse reset',
      });
      // Ajout des animations
      TLApp
        // App
        .from(app, 0.5, { opacity: 0, ease: 'power2.out' })
        .from(logo, 0.5, { transform: 'scale(0)', ease: 'power2.out' }, '-=0.5')
        // 1 - Présentation
        .from(presentation, 0.5, { opacity: 0, ease: 'power2.out' })
        .staggerFrom(presTitle, 0.5, { top: -60, opacity: 0, ease: 'power2.out' }, 0.1)
        .from(mouseScroll, 2.5, { y: -100, opacity: 0, ease: 'bounce' })
        // 2 - Shortcuts IN
        .from(shortcuts, {
          scrollTrigger: {
            trigger: shortcuts,
            start: 'top 100%',
            end: 'top 60%',
            id: 'shortcuts',
            scrub: true,
            markers: false,
          },
          opacity: 0,
          ease: 'power2.in',
        })
        .staggerFrom(shortcutsTitle, 0.4, {
          scrollTrigger: {
            trigger: shortcutsTitle,
            start: 'top 80%',
            end: 'top 50%',
            id: 'shortcuts-title',
            scrub: true,
            markers: false,
          },
          top: -80,
          opacity: 0,
          ease: 'power2.out',
        },
        0.05)
        .staggerFrom(shortcutBtns, 0.5, {
          scrollTrigger: {
            trigger: shortcuts,
            start: 'top 70%',
            end: 'top 50%',
            id: 'shortcuts-btns',
            scrub: true,
            markers: false,
          },
          y: 100,
          opacity: 0,
          ease: 'power2.out',
        },
        0.25)
        // 2 - Shortcuts OUT
        // 3 - Tools IN
        .from(toolsUse, {
          scrollTrigger: {
            trigger: toolsUse,
            start: 'top 100%',
            end: 'top 60%',
            id: 'tools',
            scrub: true,
            markers: false,
          },
          opacity: 0,
          ease: 'power2.in',
        })
        .staggerFrom(toolsTitle, 0.4, {
          scrollTrigger: {
            trigger: toolsTitle,
            start: 'top 80%',
            end: 'top 50%',
            id: 'tools-title',
            scrub: true,
            markers: false,
          },
          y: 100,
          opacity: 0,
          ease: 'power2.out',
        },
        0.05)
        .staggerFrom(toolsFa, 0.75, {
          scrollTrigger: {
            trigger: toolsFa,
            start: 'top 70%',
            end: 'top 50%',
            id: 'tools-fa',
            scrub: true,
            markers: false,
          },
          y: 100,
          opacity: 0,
          ease: 'power1.out',
        },
        0.066)
        // Tools OUT
        // 4 - Projects
        .from(projects, {
          scrollTrigger: {
            trigger: projects,
            start: 'top 100%',
            end: 'top 60%',
            id: 'projects',
            scrub: true,
            markers: false,
          },
          opacity: 0,
          ease: 'power2.in',
        })
        .staggerFrom(projectsTitle, 0.4, {
          scrollTrigger: {
            trigger: projectsTitle,
            start: 'top 80%',
            end: 'top 50%',
            id: 'projects-title',
            scrub: true,
            markers: false,
          },
          top: -80,
          opacity: 0,
          ease: 'power2.out',
        },
        0.05)
        .staggerFrom(projectsCars, 0.75, {
          scrollTrigger: {
            trigger: projectsCars,
            start: 'top 70%',
            end: 'top 50%',
            id: 'projects-cards',
            scrub: true,
            markers: false,
          },
          y: 200,
          opacity: 0,
          ease: 'power2.out',
        },
        0.066)
        // 5 - Contact
        .from(contact, {
          scrollTrigger: {
            trigger: contact,
            start: 'top 100%',
            end: 'top 60%',
            id: 'contact',
            scrub: true,
            markers: false,
          },
          opacity: 0,
          ease: 'power2.in',
        })
        .staggerFrom(contactTitle, 0.4, {
          scrollTrigger: {
            trigger: contactTitle,
            start: 'top 80%',
            end: 'top 50%',
            id: 'contact-title',
            scrub: true,
            markers: false,
          },
          top: -80,
          opacity: 0,
          ease: 'power2.out',
        },
        0.05);
      // Let's go !
      TLApp.play();
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
h2 span {
  position: relative;
}
.full-content {
  min-height: calc(100vh - 164px);
}
</style>
