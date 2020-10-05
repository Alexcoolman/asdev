import { shallowMount } from '@vue/test-utils';
import Loading from '@/components/customs/1-loaders/loading/Loading.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Loading, {
    propsData: {
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Loading Tests', () => {
  // DIVS / SPANS
  it('renders a div with loader class', () => {
    const divs = wrapper.findAll('div.loader');
    expect(divs.length).toBe(1);
  });

  it('renders spans with lettre class', () => {
    const spans = wrapper.findAll('span.lettre');
    expect(spans.length).toBe('CHARGEMENT'.length);
  });

  // FUNCTIONS
  it('calls the loaded method when mounted', () => {
    const spy = jest.spyOn(Loading.methods, 'loaded');
    shallowMount(Loading);
    expect(spy).toHaveBeenCalled();
  });
  // it('has the fondu-out class when mounted', async () => {
  //   const loader = wrapper.find('.loader');
  //   expect(loader.classes()).toContain(['loader', 'fondu-out']);
  // });
  // EMITS
  it('execute loaded end emit loading', () => {
    jest.useFakeTimers();
    wrapper.vm.loaded();
    jest.advanceTimersByTime(1500);
    expect(wrapper.emitted().loaded).toEqual([[{ load: false, welcome: true }]]);
    jest.useRealTimers();
  });
});
