/*
 * @Author: zhangzheng
 * @Date: 2020-09-03 18:10:16
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-09-09 16:28:07
 * @Descripttion:
 */
import fetchs from "../utils/fetch";

export function addActivelist(params: any): Promise<any> {
  return fetchs.post("/default/addActivelist", params);
}
export function addArticlesCollection(params: any): Promise<any> {
  return fetchs.post("/default/addArticlesCollection", params);
}
export function getActivelist(params?: any): Promise<any> {
  return fetchs.post("/default/getArticleList", params);
}
export function getActiveDetail(params: any): Promise<any> {
  return fetchs.post("/default/getArticlesDetail", params);
}
export function getArticlesCollection(params?: any): Promise<any> {
  return fetchs.post("/default/getArticlesCollection", params);
}
export function deleteArticles(params?: any): Promise<any> {
  return fetchs.post("/default/deleteArticles", params);
}
