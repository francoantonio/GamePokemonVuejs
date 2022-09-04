import { shallowMount } from "@vue/test-utils";

import app from "@/App.vue";
describe("app", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(app);
  });

  test("should toMatchSnapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
