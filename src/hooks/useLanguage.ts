import { computed } from 'vue'
import { enUS } from 'naive-ui'
import { useAppStore } from '@/store'
import { setLocale } from '@/locales'

export function useLanguage() {
  const appStore = useAppStore()

  const language = computed(() => {
    switch (appStore.language) {
      case 'en-US':
        setLocale('en-US')
        return enUS
      case 'fa-IR':
        setLocale('fa-IR')
        return enUS
      default:
        setLocale('fa-IR')
        return enUS
    }
  })

  return { language }
}
