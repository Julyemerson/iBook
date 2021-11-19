<template>
  <div class="presentation">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam at
      reiciendis hic, maxime aperiam sed vitae sint dolore commodi. Autem alias
      cumque voluptatum, magnam possimus provident vero impedit maiores labore.
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação o iBook" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
