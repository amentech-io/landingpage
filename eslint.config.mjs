// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tailwind from "eslint-plugin-tailwindcss"

console.log(tailwind)

export default withNuxt(
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      semi: ['error', 'never'],
      'vue/no-multiple-template-root': ['off'],
      'vue/script-indent': ['warn', 2, {
        baseIndent: 0,
      }],
      'vue/html-indent': ['warn', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      }],

    }
  }
)
