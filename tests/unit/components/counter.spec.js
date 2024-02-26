import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  // test("debe hacer match con el snapshot", () => {
  //   const wrapper = shallowMount(Counter);
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  test('h2 debe tener el valor por defecto "Counter"', () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2Value = wrapper.find("h2").text();

    expect(h2Value).toBe("Counter");
  });
});

test("el valor por defecto debe ser 100 en el p", () => {
  const wrapper = shallowMount(Counter);
  const value = wrapper.findAll("p");
  console.log(value);
  expect(value[1]).toBe("100");
});