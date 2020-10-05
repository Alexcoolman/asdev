import { shallowMount } from '@vue/test-utils';
import Welcome from '@/components/customs/1-loaders/welcome/Welcome.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Welcome, {
    propsData: {
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Welcome Tests', () => {
  // DIVS / SPANS
  it('renders a div with loader class', () => {
    const divs = wrapper.findAll('div.bloc');
    expect(divs.length).toBe(1);
  });
  it('renders spans', () => {
    const spans = wrapper.findAll('span');
    expect(spans.length).toBe('BIENVENUE'.length);
  });
  it('renders a ligne', () => {
    const ligne = wrapper.findAll('.ligne');
    expect(ligne.length).toBe(1);
  });

  // FUNCTIONS
  it('calls the animation method when mounted', () => {
    const spy = jest.spyOn(Welcome.methods, 'animation');
    shallowMount(Welcome);
    expect(spy).toHaveBeenCalled();
  });
  // EMITS
  it('execute end end emit loading', () => {
    wrapper.vm.end();
    expect(wrapper.emitted().loaded).toEqual([[{ load: false, welcome: false }]]);
  });
});
