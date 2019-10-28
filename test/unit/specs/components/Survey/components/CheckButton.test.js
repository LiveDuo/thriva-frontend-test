import { mount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CheckButton, {
      propsData: {
        text: 'text',
        value: 'value',
        selected: true,
        disabled: true
      }
    })
  })

  it('renders the text correctly', () => {
    expect(wrapper.find('.check-button').text()).toEqual('text')
  })

  it('has the selected class', () => {
    expect(wrapper.find('.check-button').classes('check-button--selected')).toBeTruthy()
  })

  it('has the disabled class', () => {
    expect(wrapper.find('.check-button').classes('check-button--disabled')).toBeTruthy()
  })
  
  it('emits \'clicked\' when a click is triggered', () => {

    wrapper.find('.check-button').trigger('click')

    expect(wrapper.emitted('clicked')).toContainEqual(['value'])
  })

  it('toggles selected class', () => {

    expect(wrapper.find('.check-button').classes('check-button--selected')).toBe(true)

    wrapper.setProps({ selected: false })

    expect(wrapper.find('.check-button').classes('check-button--selected')).toBe(false)
  })

  it('toggles disabled class', () => {

    expect(wrapper.find('.check-button').classes('check-button--disabled')).toBe(true)

    wrapper.setProps({ disabled: false })

    expect(wrapper.find('.check-button').classes('check-button--disabled')).toBe(false)
  })
})
