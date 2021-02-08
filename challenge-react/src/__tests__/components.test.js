import React from "react";
import { shallow, mount, render } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "../App";
import Card from "../Card";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Test Component Render ", () => {
  test("Test App Component No Error", () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component.text()).toContain("Omise Tamboon React");
  });

  test("Test Card Component No Error", () => {
    const props = {
      item: {
        id: 1,
        name: "Baan Kru Noi",
        image: "baan-kru-noi.jpg",
        currency: "THB",
      },
    };
    const component = mount(<Card {...props} />);
    expect(component.contains(<p>Baan Kru Noi</p>)).toBe(true);
  });
});
