import { shallowMount } from '@vue/test-utils';
import Loading from '@/components/customs/1-loaders/loading/Loading.vue';
import Welcome from '@/components/customs/1-loaders/welcome/Welcome.vue';
import Container from '@/components/containers/Container.vue';
import App from '../src/App.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(App, {
    data() {
      return {
      };
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('App', () => {
  it('renders the App div', () => {
    const app = wrapper.findAll('#app');
    expect(app.length).toBe(1);
  });

  // COMPONENTS
  it('renders a Loading component when loading.load is true', async () => {
    await wrapper.setData({ loading: { load: true, welcome: false } });
    expect(wrapper.findComponent(Loading).exists()).toBe(true);
  });
  it('not renders a Loading component when loading.load is false', async () => {
    await wrapper.setData({ loading: { load: false, welcome: false } });
    expect(wrapper.findComponent(Loading).exists()).toBe(false);
  });
  it('renders a Welcome component when loading.welcome is true', async () => {
    await wrapper.setData({ loading: { load: false, welcome: true } });
    expect(wrapper.findComponent(Welcome).exists()).toBe(true);
  });
  it('not renders a Welcome component when loading.welcome is false', async () => {
    await wrapper.setData({ loading: { load: false, welcome: false } });
    expect(wrapper.findComponent(Welcome).exists()).toBe(false);
  });
  it('renders a Container component when loading.load is false and loading.welcome is false ', async () => {
    await wrapper.setData({ loading: { load: false, welcome: false } });
    expect(wrapper.findComponent(Container).exists()).toBe(true);
  });
  it('not renders a Container component when loading.load is true or / and loading.welcome is true ', async () => {
    await wrapper.setData({ loading: { load: true, welcome: false } });
    expect(wrapper.findComponent(Container).exists()).toBe(false);
    await wrapper.setData({ loading: { load: false, welcome: true } });
    expect(wrapper.findComponent(Container).exists()).toBe(false);
    await wrapper.setData({ loading: { load: true, welcome: true } });
    expect(wrapper.findComponent(Container).exists()).toBe(false);
  });
  // FUNCTION
  it('execute loaded', () => {
    wrapper.vm.loaded({ load: false, welcome: false });
    expect(wrapper.vm.loading).toEqual({ load: false, welcome: false });
  });
});
