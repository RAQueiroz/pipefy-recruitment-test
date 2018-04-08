import React from "react";
import DateField from "../DateField";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(" <DateField/>", () => {
    const onChangeSpy = jest.fn();

    const item = {
        id: "xpto",
        label: "Name",
        value: "08/12/1986"
    };

    const wrapper = shallow(
        <DateField onChange={onChangeSpy} {...item} />
    );

    it("renders", () => {
        expect(wrapper.find(`#${item.id}`)).toHaveLength(1);
    });

    it("to match snapshot", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("display label based on props", () => {
        expect(wrapper.containsMatchingElement(item.label)).toBeTruthy();
        wrapper.setProps({ label: "Birthday" });
        expect(wrapper.containsMatchingElement("Birthday")).toBeTruthy();
    });

    it("display value based on props", () => {
        expect(wrapper.find(`#${item.id}`).props().value).toEqual(
            item.value
        );
        wrapper.setProps({ value: "08/12/2017" });
        expect(wrapper.find(`#${item.id}`).props().value).toEqual("08/12/2017");
    });

    it("check if onChange works", () => {
        wrapper
            .find(`#${item.id}`)
            .simulate("change", { target: { value: '08/12/2018' } });
        expect(onChangeSpy).toBeCalledWith({ id: "xpto", value: "08/12/2018" });
    });
});
