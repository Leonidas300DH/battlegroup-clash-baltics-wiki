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
        header: "Rajdhani",
        body: "Barlow",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#1b1e1b",
          lightgray: "#2a2e2a",
          gray: "#4a5249",
          darkgray: "#c4ccbf",
          dark: "#e2e8dd",
          secondary: "#6fa85c",
          tertiary: "#d4a520",
          highlight: "rgba(111, 168, 92, 0.10)",
          textHighlight: "#d4a52044",
        },
        darkMode: {
          light: "#111411",
          lightgray: "#1e221e",
          gray: "#3d443a",
          darkgray: "#b8c4b0",
          dark: "#dce4d6",
          secondary: "#6fa85c",
          tertiary: "#d4a520",
          highlight: "rgba(111, 168, 92, 0.10)",
          textHighlight: "#d4a52044",
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
