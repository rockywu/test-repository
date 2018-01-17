module.exports = {
  "root": true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "extends": [
    "standard",
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "rules": {
    "semi": [
      "warn",
      "always"
    ],
    "semi-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "no-debugger": "off",
    "no-console": "off",
    "no-multiple-empty-lines": [
      1,
      {
        "max": 2
      }
    ],
    "vue/comment-directive": [
      "warn"
    ],
    "vue/jsx-uses-vars": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-parsing-error": [
      "error",
      {
        "abrupt-closing-of-empty-comment": true,
        "absence-of-digits-in-numeric-character-reference": true,
        "cdata-in-html-content": true,
        "character-reference-outside-unicode-range": true,
        "control-character-in-input-stream": true,
        "control-character-reference": true,
        "eof-before-tag-name": true,
        "eof-in-cdata": true,
        "eof-in-comment": true,
        "eof-in-tag": true,
        "incorrectly-closed-comment": true,
        "incorrectly-opened-comment": true,
        "invalid-first-character-of-tag-name": true,
        "missing-attribute-value": true,
        "missing-end-tag-name": true,
        "missing-semicolon-after-character-reference": true,
        "missing-whitespace-between-attributes": true,
        "nested-comment": true,
        "noncharacter-character-reference": true,
        "noncharacter-in-input-stream": true,
        "null-character-reference": true,
        "surrogate-character-reference": true,
        "surrogate-in-input-stream": true,
        "unexpected-character-in-attribute-name": true,
        "unexpected-character-in-unquoted-attribute-value": true,
        "unexpected-equals-sign-before-attribute-name": true,
        "unexpected-null-character": true,
        "unexpected-question-mark-instead-of-tag-name": true,
        "unexpected-solidus-in-tag": true,
        "unknown-named-character-reference": true,
        "end-tag-with-attributes": true,
        "duplicate-attribute": true,
        "end-tag-with-trailing-solidus": true,
        "non-void-html-element-start-tag-with-trailing-solidus": false,
        "x-invalid-end-tag": true,
        "x-invalid-namespace": true
      }
    ],
    "vue/no-reserved-keys": "error",
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/no-template-key": "warn",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-vars": "warn",
    "vue/require-component-is": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-text": "error",
    "vue/attribute-hyphenation": "off",
    "vue/html-end-tags": "off",
    "vue/html-indent": [
      "error",
      2,
      {
        "attribute": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    "vue/html-self-closing": [
      "warn",
      {
        "html": {
          "void": "never",
          "normal": "always",
          "component": "always"
        }
      }
    ],
    "vue/max-attributes-per-line": "warn",
    "vue/mustache-interpolation-spacing": "warn",
    "vue/name-property-casing": "off",
    "vue/no-multi-spaces": "warn",
    "vue/require-default-prop": "warn",
    "vue/require-prop-types": "error",
    "vue/v-bind-style": "warn",
    "vue/v-on-style": "warn",
    "vue/html-quotes": "warn",
    "vue/no-confusing-v-for-v-if": "error",
    "vue/order-in-components": "off",
    "vue/this-in-template": "error",
    "vue/html-closing-bracket-newline": "warn",
    "vue/html-closing-bracket-spacing": "warn",
    "vue/script-indent": 0
  },
  "env": {
    "node": true
  },
  "globals": {
    "Systen": true
  },
  "plugins": []
};