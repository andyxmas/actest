<template>
  <small>This text is written directly in the vue component</small>
  <br />
  <small>{{ exampleText }}</small>
  <br />
  <slot />

  <br />
  <hr />
  <div class="main-product-image">
    <img :src="images[0]" />
  </div>

  <div class="main-product-content">
    <h1 class="heading-2 main-product-title">
      {{ currentVariant.title }}
    </h1>

    <div class="main-product-description rich-text">
      {{ currentVariant.description }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  exampleText: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    default: () => [],
  },
  variants: {
    type: Array,
    default: () => [],
  },
  initialVariantId: {
    type: Number,
    required: true,
  },
});

const selectedVariantId = ref(props.initialVariantId);
const currentVariant = computed(() => {
  return props.variants.find((variant) => {
    return variant.id == selectedVariantId.value;
  });
});
</script>
