import React from "react";
import Button from "./button";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("renders", () => {
  const text = "text";
  const button = shallow(<Button text={text} />);
  expect(button.text()).toBe(text);
  expect(button.type()).toBe("button");
});
