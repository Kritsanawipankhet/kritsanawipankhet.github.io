import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Armer Cyber",
  description: "A VitePress Site",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    th: {
      label: "Thai",
      lang: "th",
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Backend Development",
        items: [
          {
            text: "Authentication & Authorization",
            items: [
              {
                text: "Authentication",
                collapsed: true,
                items: [
                  { text: "Basic Authentication", 
                    link: "/backend-development/authentication-and-authorization/authentication/basic-authentication"
                  },
                  { text: "Token-Based Authentication",
                    link: "/backend-development/authentication-and-authorization/authentication/token-based-authentication"
                   },
                  { text: "OAuth 2.0 Authentication" },
                  { text: "SSO (Single Sign-On)" },
                  { text: "Multi-Factor Authentication (MFA)" },
                  { text: "Biometric Authentication" },
                  { text: "Session Management" },
                  { text: "Authentication Security Best Practices" },
                ],
              },
              {
                text: "Authorization",
                collapsed: true,
                items: [
                  { text: "OAuth 2.0 Scopes & Permission" },
                  { text: "Access Token vs Refresh Token" },
                  { text: "Role-Based Access Control (RBAC)" },
                  { text: "Attribute-Based Access Control (ABAC)" },
                  { text: "Permission-Based Access Control (PBAC)" },
                  { text: "Policy-Based Access Control (PoBAC)" },
                  { text: "Rule-Based Access Control (RuBAC)" },
                  { text: "API Security & Access Control" },
                ],
              },
              {
                text: "Identity & Access Management (IAM)",
                collapsed: true,
                items: [
                  { text: "Overview of IAM" },
                  { text: "Identity Federation" },
                  { text: "Cloud IAM (AWS, Google, Azure)" },
                ],
              },
            ],
          },
        ],
      },
    ],
    

    socialLinks: [
      { icon: "github", link: "https://github.com/Kritsanawipankhet" },
    ],
  },
});
