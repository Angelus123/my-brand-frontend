export interface IntegrationTypes {
    title: string;
    src: string;
    exp: string;
    category: string;
    url: string;
  }
  
  // todo html preprocess extraction
  
  export interface CategoryTypes {
    checked: boolean,
    title: string;
    checkCol: string;
  }
  
  export const CATEGORIES: CategoryTypes[] = [
    {
      title: "Productivity",
      checked: true,
      checkCol: "blue"
    },
    {
      title: "Channels",
      checked: false,
      checkCol: "white"
    },
    {
      title: "Automation",
      checked: false,
      checkCol: "white"
    },{
      title: "Development",
      checked: false,
      checkCol: "white"
    },/*,{
      title: "Analysis",
      checked: false,
      checkCol: "white"
    },{
      title: "Business Operations",
      checked: false,
      checkCol: "white"
    },{
      title: "New",
      checked: false,
      checkCol: "white"
    },#{
      title: "Support",
      checked: false,
      checkCol: "white"
    },{
      title: "Support",
      checked: false,
      checkCol: "white"
    }*/
  ]
  export const DEVELOPMENT: IntegrationTypes[] = [
    {
      title: "Messaging API",
      src: "bg-integrations-dv-api",
      exp: "This integration allows you to easily send messages to your bot and get responses back to your endpoint.",
      category: "messaging",
      url: "https://www.mediawiki.org/wiki/Manual:Messages_API"
    },
    /*{
      title: "Jira actions",
      src: "/integrations/jira.png",
      exp: "This integration allows you to manipulate Jira issues and users.",
      category: "productivity",
      url: "https://www.atlassian.com/software/jira/guides/automation/overview#what-is-automation"
    },
    {
      title: "UUID",
      src: "/integrations/fb_msg.png",
      exp: "This integration allows you to create unique IDs using the UUID library.",
      category: "utility",
      url: "https://docs.python.org/3/library/uuid.html"
    },*/
    {
      title: "Webhook",
      src: "bg-integrations-dv-webhook",
      exp: "Connect your chatbot to your systems with webhooks. Send and receive data from external systems and trigger workflows effortlessly.",
      category: "automation",
      url: "https://de.wikipedia.org/wiki/Webhooks"
    },
    {
      title: "DALL-E Image Generation",
      src: "bg-integrations-dv-chatgpt",
      exp: "Integrate DALL-E to generate stunning and unique images directly within your chatbot conversations",
      category: "automation",
      url: "https://openai.com/index/dall-e-3/"
    },
    /*{
      title: "JSON Web Token",
      src: "/integrations/fb_msg.png",
      exp: "This integration allows you to generate and verify JSON Web Tokens (JWTs) in your bot",
      category: "automation",
      url: "https://en.wikipedia.org/wiki/JSON_Web_Token"
    },
    {
      title: "Zendesk",
      src: "/integrations/zapier.png",
      exp: "Optimize your support workflow using Zendesk. Seamlessly integrate your chatbot into Zendesk chat, enabling you to trigger workflows from ticket updates. Easily manage tickets, access conversations, and engage with customers",
      category: "customer support",
      url: "https://www.zendesk.de/"
    },*/
    {
      title: "AWS S3",
      src: "bg-integrations-dv-s3",
      exp: "Empower your BotWorld chatbot with AWS S3 to manage cloud storage. Create, list, and delete S3 buckets, and handle files directly through your chatbot. Ideal for automating cloud workflows.",
      category: "cloud storage",
      url: "https://aws.amazon.com/"
    },
    /*{
      title: "Linear",
      src: "/integrations/linear.png",
      exp: "Elevate project management with Linear. Update, create, and track issues effortlessly. Improve collaboration with workflow actions like marking duplicates, managing teams and connect your chatbot directly in discussions",
      category: "productivity",
      url: "https://linear.app/homepage"
    }*/
  
  ];
  export const CHANNELS: IntegrationTypes[] = [
  
    {
      title: "Zendesk",
      src: "bg-integrations-ch-zen",
      exp: "Optimize your support workflow using Zendesk. Seamlessly integrate your chatbot into Zendesk chat, enabling you to trigger workflows from ticket updates. Easily manage tickets, access conversations, and engage with customers",
      category: "channels",
      url: "https://www.zendesk.de/"
    },
    {
      title: "WhatsApp",
      src: "bg-integrations-ch-wha",
      exp: "This integration allows your bot to interact with WhatsApp.",
      category: "channels",
      url: "https://web.whatsapp.com/"
    },
    /*{
      title: "Vonage",
      src: "bg-/integrations/vonage.png",
      exp: "This integration allows your bot to interact with Vonage.",
      category: "channels",
      url: "https://www.vonage.com/"
    },
    {
      title: "Viber",
      src: "bg-/integrations/viber.svg",
      exp: "This integration allows your bot to interact with Viber.",
      category: "channels",
      url: "https://www.viber.com/en/"
    },
    {
      title: "Twilio",
      src: "bg-/integrations/twillo.png",
      exp: "This integration allows your bot to interact with Twilio.",
      category: "channels",
      url: "https://www.twilio.com/en-us/"
    },*/
    {
      title: "Telegram",
      src: "bg-integrations-ch-tg",
      exp: "This integration allows your bot to interact with Telegram.",
      category: "channels",
      url: "https://www.telegram.com"
    },
    {
      title: "Microsoft Teams",
      src: "bg-integrations-ch-msteams",
      exp: "This integration allows your bot to interact with Microsoft Teams.",
      category: "channels",
      url: "https://www.microsoft.com/de-de/microsoft-teams/log-in"
    },
    /*{
      title: "Sunshine Conversations",
      src: "bg-/integrations/sc.png",
      exp: "This integration allows your bot to interact with Sunshine Conversations.",
      category: "channels",
      url: "https://docs.smooch.io/guide/"
    },*/
    {
      title: "Slack",
      src: "bg-integrations-ch-slack",
      exp: "This integration allows your bot to interact with Slack.",
      category: "channels",
      url: "https://slack.com/intl/de-de/"
    },
    {
      title: "Messenger",
      src: "bg-integrations-ch-fb_msg",
      exp: "This integration allows your bot to interact with Messenger.",
      category: "channels",
      url: "https://www.messenger.com/"
    },
    /*{
      title: "Line",
      src: "bg-/integrations/line.png",
      exp: "This integration allows your bot to interact with Line.",
      category: "channels",
      url: "https://line.me/en/"
    },*/
    {
      title: "Intercom",
      src: "bg-integrations-ch-intercom",
      exp: "This integration allows your bot to interact with Intercom.",
      category: "channels",
      url: "https://www.intercom.com/"
    },
    {
      title: "Instagram",
      src: "bg-integrations-ch-instagram",
      exp: "This integration allows your bot to interact with Instagram.",
      category: "channels",
      url: "https://www.instagram.com/"
    },
    {
      title: "Webchat",
      src: "bg-integrations-ch-webchat",
      exp: "Webchat integration for BotWorld",
      category: "channels",
      url: ""
    }
  ];
  
  export const PRODUCTIVITY: IntegrationTypes[] = [
    /*{
      title: "Asana",
      src: "/integrations/asana.png",
      exp: "Asana integration for BotWorld",
      category: "productivity",
      url: "https://asana.com/de/"
    },
    {
      title: "Trello",
      src: "/integrations/trello.png",
      exp: "Trello integration for BotWorld",
      category: "productivity",
      url: "https://trello.com/de"
    },
    {
      title: "Jira actions",
      src: "/integrations/jira.png",
      exp: "This integration allows you to manipulate Jira issues and users.",
      category: "productivity",
      url: "https://www.atlassian.com/software/jira/guides/automation/overview#what-is-automation"
    },*/
    {
      title: "Calendly",
      src: "bg-integrations-cl",
      exp: "This integration allows you to schedule events with Calendly.",
      category: "productivity",
      url: "https://calendly.com/"
    },
    {
      title: "Notion",
      src: "bg-integrations-not",
      exp: "Supercharge your productivity with Notion integration. Add pages and comments, manage databases, and engage in discussions—all within your chatbot",
      category: "productivity",
      url: "https://www.notion.so/de-de"
    },
    {
      title: "Slack",
      src: "bg-integrations-slack",
      exp: "This integration allows your bot to interact with Slack.",
      category: "productivity",
      url: "https://slack.com/intl/de-de/"
    },
    {
      title: "Microsoft Teams",
      src: "bg-integrations-teams",
      exp: "This integration allows your bot to interact with Microsoft Teams.",
      category: "productivity",
      url: "https://www.microsoft.com/de-de/microsoft-teams/log-in"
    },
  
  ];
  export const AUTOMATION: IntegrationTypes[] = [
  
    /*{
      title: "Zapier",
      src: "/integrations/zapier.png",
      exp: "Trigger workflows from Zapier or let Zapier trigger your workflows to automate tasks and enhance your chatbot's capabilities.",
      category: "automation",
      url: "https://zapier.de"
    },*/
    {
      title: "SendGrid",
      src: "/integrations/sendg.svg",
      exp: "This integration allows you to send emails with SendGrid.",
      category: "automation",
      url: "https://www.sendgrid.com"
    },
    {
      title: "Calendly",
      src: "/integrations/cl.png",
      exp: "This integration allows you to schedule events with Calendly.",
      category: "automation",
      url: "https://calendly.com/"
    },
    /*{
      title: "Make.com",
      src: "/integrations/make.png",
      exp: "Seamlessly connect your BotWorld chatbot with Make.com to unlock a world of possibilities. Automate tasks, sync data across multiple applications, and enhance the capabilities of your chatbot like never before",
      category: "automation",
      url: "Make.com"
    },*/
    {
      title: "Webhook",
      src: "/integrations/webhook.svg",
      exp: "Connect your chatbot to your systems with webhooks. Send and receive data from external systems and trigger workflows effortlessly.",
      category: "automation",
      url: "https://de.wikipedia.org/wiki/Webhooks"
    }
  ];
  /*
  export const NEW: IntegrationTypes[] = [
    {
      title: "Salesforce",
      src: "/integrations/sf.svg",
      exp: "Salesforce integration allows you to create, search, update and delete a variety of Salesforce objects",
      category: "productivity",
      url: "https://login.salesforce.com/"
    }
  ];
  export const BUSINESS: IntegrationTypes[] = [
    // ... (All previous integrations from earlier responses)
  
    {
      title: "Stripe",
      src: "/integrations/stripe.svg",
      exp: "Enhance your chatbot with Stripe to manage payments, subscriptions, and customers seamlessly. Execute workflows on charge failures and subscription updates.",
      category: "payments",
      url: "https://www.stripe.com"
    }
  ];
  
  export const ANALYTICS: IntegrationTypes[] = [
    /*
      {
        title: "Google Analytics",
        src: "/integrations/googleAnalytics.png",
        exp: "Track BotWorld Analytics events in Google Analytics",
        category: "analytics",
        url:"https://marketingplatform.google.com/"
      },
      {
        title: "Mixpanel",
        src: "/integrations/mp.svg",
        exp: "Integrate Mixpanel with BotWorld",
        category: "analytics",
        url: "https://mixpanel.com/"
      },
      {
        title: "Segment",
        src: "/integrations/seg.svg",
        exp: "Track BotWorld Analytics events in Segment",
        category: "analytics",
        url: "https://segment.com/"
      }
  ];
  */
  
  /*
  export const SUPPORT: IntegrationTypes[] = [
    // ... (All previous integrations)
  
    {
      title: "Zendesk",
      src: "/integrations/zapier.png",
      exp: "Optimize your support workflow using Zendesk. Seamlessly integrate your chatbot into Zendesk chat, enabling you to trigger workflows from ticket updates. Easily manage tickets, access conversations, and engage with customers",
      category: "customer support",
      url: "https://www.zendesk.de/"
    },
    {
      title: "Intercom",
      src: "/integrations/icom.svg",
      exp: "This integration allows your bot to interact with Intercom.",
      category: "customer support",
      url: "https://www.intercom.com/"
    }
  ];
  */