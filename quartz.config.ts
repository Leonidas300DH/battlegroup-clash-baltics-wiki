import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "BC:B WIKI",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "bcb-wiki.vercel.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#090A0C",
          lightgray: "#1A1D21",
          gray: "#525964",
          darkgray: "#A1A9B3",
          dark: "#E6EDF3",
          secondary: "#FFB800",
          tertiary: "#30D158",
          highlight: "rgba(255, 184, 0, 0.15)",
          textHighlight: "rgba(255, 184, 0, 0.5)",
        },
        darkMode: {
          light: "#090A0C",
          lightgray: "#1A1D21",
          gray: "#525964",
          darkgray: "#A1A9B3",
          dark: "#E6EDF3",
          secondary: "#FFB800",
          tertiary: "#30D158",
          highlight: "rgba(255, 184, 0, 0.15)",
          textHighlight: "rgba(255, 184, 0, 0.5)",
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
          light: "vitesse-dark",
          dark: "vitesse-dark",
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
