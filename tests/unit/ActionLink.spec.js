import ActionLink from '@/components/ActionLink.vue';
import { shallowMount } from '@vue/test-utils';

describe('ActionLink', () => {
    it('it ignores the disabled attribute', () => {
        const wrapper = shallowMount(ActionLink, {
            propsData: { disabled: true },
        });
        wrapper.find('a').trigger('click');
        return expect(wrapper.emitted('click')).toBeTruthy();
    });
});
