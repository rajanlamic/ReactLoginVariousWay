import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import { Lists, ListProps } from '../List'
import { ListData } from '../types'

describe("List componnet", () => {
    let wrapper: any, props: any;

    beforeEach(() => {
        props = {
            list: [{
                email: "rajanlamic@gmail.com",
                first_name: "rajan",
                last_name: "lamichhane",
                title: "mr",
                user_name: "rajanlkamic",
                _id: "1",
            },
            {
                email: "rajanlamic1@gmail.com",
                first_name: "nextguy",
                last_name: "lamichhane1",
                title: "mr1",
                user_name: "rajanlkamic1",
                _id: "11",
            }
            ]
        }
        wrapper = shallow(<Lists {...props} />)
    })

    afterEach(() => {
        props = null;
        wrapper = null;
    })

    it("should render Lists properly with snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })

    it("should render ul properly", () => {
        expect(wrapper.find("ul").length).toEqual(1)
    })

    it("should render 2 li element", () => {
        expect(wrapper.find("li").length).toEqual(2)
    })

    it("should pass right parameters in the list", () => {
        expect(wrapper.find("li").first().props().children).toBe("rajan")
        expect(wrapper.find("li").at(1).props().children).toBe("nextguy")
    })

})
