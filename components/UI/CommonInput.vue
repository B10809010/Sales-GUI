<template>
  <div :class="label ? 'grid w-full items-center gap-1.5' : 'contents'">
    <label v-if="label" 
      :class="[
        'text-sm text-gray-700 font-medium leading-none',
        required && `after:ml-0.5 after:text-red-500 after:content-['*']`
      ]"
    >
      {{ label }}
    </label>
    <input
      :class="[
        `peer
          w-full flex items-center
          bg-transparent text-gray-900
          border border-gray-200 rounded-md shadow-sm
          invalid:border-red-500 invalid:text-red-600
          focus:ring-2 focus:ring-gray-900 focus:invalid:ring-2 focus:invalid:ring-red-500 focus-visible:outline-none placeholder:text-muted
          transition-all disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none
        `,
        sizes[size],
        $attrs.class || ''
      ]"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :required="required"
      @input="onInput"
    />
  </div>
</template>
<script setup lang="ts">
import { useAttrs } from 'vue';

defineOptions({
  name: 'CommonInput',
  inheritAttrs: false,
});

// const attrs = useAttrs();

interface Props {
  value?: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  disabled?: boolean;
  required?: boolean;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  placeholder: '',
  label: '',
  type: 'text',
  disabled: false,
  required: false,
  size: 'md',
})

const emit = defineEmits(['update:value'])

function onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  emit('update:value', input.value);
}

const sizes = {
  xl: 'h-10 px-3 gap-x-2 text-base',
  lg: 'h-9 px-3 gap-x-2 text-sm',
  md: 'h-8 px-2.5 gap-x-1.5 text-sm',
  sm: 'h-7 px-2.5 gap-x-1.5 text-xs',
  xs: 'h-6 px-2 gap-x-1 text-xs',
}

</script>
