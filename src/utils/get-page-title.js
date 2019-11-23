/* 设置当前页标题 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Work Flow System'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
