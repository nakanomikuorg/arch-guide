import type { DefaultTheme } from "vitepress";
import { API_KEY as apiKey, APP_ID as appId, INDEX_NAME as indexName } from "./info";

const algoliaConfig: DefaultTheme.AlgoliaSearchOptions = {
  apiKey,
  appId,
  indexName,
  translations: {
    button: {
      buttonAriaLabel: "搜索文档",
      buttonText: "搜索文档"
    },
    modal: {
      errorScreen: {
        helpText: "你可能需要检查你的网络连接",
        titleText: "无法获取结果"
      },
      footer: {
        closeText: "关闭",
        navigateText: "切换",
        searchByText: "搜索提供者",
        selectText: "选择"
      },
      noResultsScreen: {
        noResultsText: "无法找到相关结果",
        reportMissingResultsLinkText: "点击反馈",
        reportMissingResultsText: "你认为该查询应该有结果？",
        suggestedQueryText: "你可以尝试查询"
      },
      searchBox: {
        cancelButtonAriaLabel: "取消",
        cancelButtonText: "取消",
        resetButtonAriaLabel: "清除查询条件",
        resetButtonTitle: "清除查询条件"
      },
      startScreen: {
        favoriteSearchesTitle: "收藏",
        noRecentSearchesText: "没有搜索历史",
        recentSearchesTitle: "搜索历史",
        removeFavoriteSearchButtonTitle: "从收藏中移除",
        removeRecentSearchButtonTitle: "从搜索历史中移除",
        saveRecentSearchButtonTitle: "保存至搜索历史"
      }
    }
  }
};

export default algoliaConfig;
