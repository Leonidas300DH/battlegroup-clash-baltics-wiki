import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.Graph({ localGraph: { depth: 3 }, globalGraph: { depth: -1 } }),
      condition: (page) => page.fileData.slug === "graph",
    }),
    Component.Backlinks(),
  ],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/Leonidas300DH/battlegroup-clash-baltics-wiki",
      "Sapper Studio": "https://www.sapperstudio.com",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({ folderDefaultState: "collapsed" }),
  ],
  right: [],
}
