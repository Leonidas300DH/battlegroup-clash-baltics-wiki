import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "BC:B Wiki",
    pageTitleSuffix: " — Battlegroup Clash: Baltics",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "fr-FR",
    baseUrl: "battlegroup-clash-baltics-wiki.vercel.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f5f0",
          lightgray: "#d4d4c8",
          gray: "#8a8a7a",
          darkgray: "#3d3d35",
          dark: "#1a1a16",
          secondary: "#4a6741",
          tertiary: "#6b8f5e",
          highlight: "rgba(74, 103, 65, 0.12)",
          textHighlight: "#c4d4a0aa",
        },
        darkMode: {
          light: "#1a1c1a",
          lightgray: "#2d302d",
          gray: "#5a5e5a",
          darkgray: "#c8ccc8",
          dark: "#e8ece8",
          secondary: "#7fa876",
          tertiary: "#5c8a52",
          highlight: "rgba(74, 103, 65, 0.18)",
          textHighlight: "#4a674188",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
