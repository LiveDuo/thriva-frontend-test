import { mount } from '@vue/test-utils'
import ProgressBar from '@/components/Shared/ProgressBar'

describe('ProgressBar', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ProgressBar, {
      propsData: {
        currentStep: 2,
        totalSteps: 5
      }
    })
  })

  it('renders the text correctly', () => {
    expect(wrapper.find('.mercury').element.style.width).toBe('40%');
  })
})
