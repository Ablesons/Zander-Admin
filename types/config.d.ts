/**
 * @Description: 配置声明
 * @Author: Zander
 * @Date: 2022/4/29 17:35
 * @LastEditors: Zander
 * @LastEditTime: 2022/4/29 17:35
 */

export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}
