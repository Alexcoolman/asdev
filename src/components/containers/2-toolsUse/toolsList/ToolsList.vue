<template>
  <b-row align-h="center" align-v="center">
    <b-col v-for="fa in faList" :key="fa.class" cols="6" sm="4" md="3" lg="2" class="p-3">
      <font-awesome-icon
        :icon="['fab', fa.class]"
        class="tools-fa"
        :class="fa.class"
        size="5x"
        :id="fa.class"
        />
        <b-tooltip
          :target="fa.class"
          placement="top"
          triggers="hover"
          custom-class="custom-tooltip"
          >
          {{ fa.text }}
        </b-tooltip>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'toolsList',
  data() {
    return {
      faList: [
        {
          text: 'VueJS',
          class: 'vuejs',
        },
        {
          text: 'JavaScript',
          class: 'js-square',
        },
        {
          text: 'HTML 5',
          class: 'html5',
        },
        {
          text: 'CSS 3',
          class: 'css3-alt',
        },
        {
          text: 'SASS',
          class: 'sass',
        },
        {
          text: 'Bootstrap',
          class: 'bootstrap',
        },
        {
          text: 'Font Awesome',
          class: 'font-awesome',
        },
        {
          text: 'NodeJS',
          class: 'node-js',
        },
        {
          text: 'Grunt',
          class: 'grunt',
        },
        {
          text: 'Git',
          class: 'git',
        },
        {
          text: 'NPM',
          class: 'npm',
        },
        {
          text: 'Medium',
          class: 'medium',
        },
        {
          text: 'Stack Overflow',
          class: 'stack-overflow',
        },
        {
          text: 'Apple',
          class: 'apple',
        },
        {
          text: 'Windows',
          class: 'windows',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.tools-fa {
  color: $green-50;
}
.custom-tooltip .tooltip-inner {
  box-shadow: 0 0 30px 0 $green-50;
  padding:15px;
  color: $green;
  background: $black;
  background-color: $black;
  border: 1px solid $green;
}
.custom-tooltip .arrow::before {
    border-top-color: $green;
}
.vuejs:hover {
  color: $vue;
}
.js-square:hover {
  color: $javascript;
}
.html5:hover {
  color: $html;
}
.css3-alt:hover {
  color: $css;
}
.sass:hover {
  color: $sass;
}
.bootstrap:hover {
  color: $bootstrap;
}
.node-js:hover {
  color: $node;
}
.react:hover {
  color: $react;
}
.font-awesome:hover {
  color: $font-awesome;
}
.grunt:hover {
  color: $grunt;
}
.git:hover {
  color: $git;
}
.npm:hover {
  color: $npm;
}
.medium:hover {
  color: $white;
}
.stack-overflow:hover {
  color: $stackoverflow;
}
.apple:hover {
  color: $white;
}
.windows:hover {
  color: $windows;
}
.sql:hover {
  color: $sql;
}
.fa-github:hover {
  color: $git-hub;
}
.fa-linked-in:hover {
  color: $linked-in;
}
.fa-twitter:hover {
  color: $twitter;
}
</style>
