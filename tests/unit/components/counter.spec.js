import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  // test("debe hacer match con el snapshot", () => {
  //   const wrapper = shallowMount(Counter);
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  test('h2 debe tener el valor por defecto "Counter"', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
    const h2Value = wrapper.find('h2').text();

    expect(h2Value).toBe('Counter');
  });

  test('el valor por defecto debe ser 100 en el p', async () => {
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(value).toBe('100');
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

    await increaseBtn.trigger('click');
  });

  test('debe incrementar y decrementar el valor del contador', async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await increaseBtn.trigger('click');
    await decreaseBtn.trigger('click');
    await decreaseBtn.trigger('click');

    const newValue = wrapper.find('[data-testid="counter"]').text();
    expect(newValue).toBe('101');
  });

  test('debe establecer el valor por defecto', () => {
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();
    expect(Number(value)).toBe(start);
  });

  test('Debe mostrar la prop del title', () => {
    const title = 'Hola Mundo';
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });

    expect(wrapper.find('h2').text()).toBe(title);
  });
});
