// import React from 'react'
import React from 'react'
import Login from '../Login'
import { shallow } from 'enzyme';

describe("Login", () => {
    let wrapper: any, props: any;
    beforeEach(() => {
        props = {

        }
        wrapper = shallow(<Login {...props} />)
    })

    afterEach(() => {
        props = null
        wrapper = null
    })

    it("should render properly matching with its snapshots", () => {
        expect(wrapper).toMatchSnapshot()
    })

    it("should render Login comnponner property", () => {
        expect(wrapper.find(".login-form").length).toEqual(1)
    })

    it("should render username and password label", () => {
        expect(wrapper.find('label').first().props().children).toBe('Username')
        expect(wrapper.find('label').at(1).props().children).toBe('Password')
    })

    it("should render first input as userName input with various attributes", () => {
        expect(wrapper.find('input').first().props().type).toBe('text')
        expect(wrapper.find('input').first().props().name).toBe('userName')
        expect(wrapper.find('input').first().props().value).toBeFalsy()
        expect(wrapper.find('input').first().props().onChange).toBeInstanceOf(Function)
    })

    it("userName input should change value by respoinding to onChnage event handler", () => {
        const handleChange = jest.spyOn(wrapper.instance(), 'handleChange')
        wrapper.find('input').first().simulate('change', { target: { value: '' } })
        wrapper.find('input').at(1).simulate('change', { target: { value: '' } })
        expect(handleChange).toHaveBeenCalled()
    })

    it("should update userName and password value", () => {
        wrapper.find('input').first().simulate('change', { target: { value: 'rajan' } })
        wrapper.find('input').at(1).simulate('change', { target: { value: 'pass' } })
        expect(wrapper.find('input').first().props().value).toBe('rajan')
        expect(wrapper.find('input').at(1).props().value).toBe('pass')
    })
})
