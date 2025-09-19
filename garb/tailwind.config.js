/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
     backgroundImage: {
        'add-b': "url('./assets/images/add_b.png')",
        'collapse-arrow': "url('./assets/images/collapse-arrow.png')",
        'expand-arrow': "url('./assets/images/expand-arrow.png')",
        'hero-image': "url('./assets/images/hero.PNG')",

        'integrations-cl': "url('./assets/images/integrations/productivity/cl.png')",
        'integrations-not': "url('./assets/images/integrations/productivity/notion.png')",
        'integrations-slack': "url('./assets/images/integrations/productivity/slack.png')",
        'integrations-teams': "url('./assets/images/integrations/productivity/teams.png')",
        
        'integrations-dv-api': "url('./assets/images/integrations/development/api.png')",
        'integrations-dv-s3': "url('./assets/images/integrations/development/s3.png')",
        'integrations-dv-webhook': "url('./assets/images/integrations/development/webhook.svg')",
        'integrations-dv-chatgpt': "url('./assets/images/integrations/development/chatgpt.png')",

        'integrations-ch-zen': "url('./assets/images/integrations/channels/zendesk.png')",
        'integrations-ch-wha': "url('./assets/images/integrations/channels/whatsapp.png')",
        'integrations-ch-tg': "url('./assets/images/integrations/channels/tg.png')",
        'integrations-ch-msteams': "url('./assets/images/integrations/channels/teams.png')",
        'integrations-ch-slack': "url('./assets/images/integrations/channels/slack.png')",
        'integrations-ch-fb_msg': "url('./assets/images/integrations/channels/fb_msg.png')",
        'integrations-ch-intercom': "url('./assets/images/integrations/channels/tg.png')",
        'integrations-ch-instagram': "url('./assets/images/integrations/channels/insta.png')",
        'integrations-ch-webchat': "url('./assets/images/integrations/channels/webchat.png')",

      }, 
      backgroundSize: {
        '70%': '70%',
        '60%': '60%',
        '50%': '50%',
        '100%': '100%',
      },
      spacing: {
        '4px': '4px',
      },
      colors: {
        customBlue:'RGB(241, 245, 249)',
      },
      width: {
      },
      height: {
        '25': '250px',
        '50': '500px'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    },
  },
  plugins: [],
}

