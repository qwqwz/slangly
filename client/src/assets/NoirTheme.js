import { definePreset } from "@primevue/themes"
import Aura from "@primevue/themes/aura"

const Noir = definePreset(Aura, {
  components: {
    button: {
      outlined: {
        primary: {}
      }
    }
  },
  semantic: {
    primary: {
      light: {
        "text-default": "#373C4D",
        stroke: "#A8ABB4"
      },
      50: "{zinc.50}",
      100: "{zinc.100}",
      200: "{zinc.200}",
      300: "{zinc.300}",
      400: "{zinc.400}",
      500: "{zinc.500}",
      600: "{zinc.600}",
      700: "{zinc.700}",
      800: "{zinc.800}",
      900: "{zinc.900}",
      950: "{zinc.950}"
    },
    colorScheme: {
      light: {
        primary: {
          color: "{primary.light.text-default}",
          inverseColor: "#ffffff",
          hoverColor: "{primary.light.stroke}",
          activeColor: "{zinc.800}"
        },
        highlight: {
          background: "{zinc.950}",
          focusBackground: "{zinc.700}",
          color: "#ffffff",
          focusColor: "#ffffff"
        },
        formField: {
          borderRadius: "{border.radius.lg}",
          background: false,
          borderColor: "{primary.light.stroke}",
          focusBorderColor: "#91949B"
        }
      },
      dark: {
        primary: {
          color: "{zinc.50}",
          inverseColor: "{zinc.950}",
          hoverColor: "{zinc.100}",
          activeColor: "{zinc.200}"
        },
        highlight: {
          background: "rgba(250, 250, 250, .16)",
          focusBackground: "rgba(250, 250, 250, .24)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)"
        }
      }
    }
  }
})

export default Noir
