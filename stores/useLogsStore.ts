import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface Log {
  type?: 'info' | 'success' | 'error' | 'warning' | 'debug'
  data?: any
  message?: string
  source?: 'console' | 'api' | 'system' | string
  timestamp?: number
  [key: string]: any
}

export const useLogsStore = defineStore('logs', () => {
  const logs = ref<Log[]>([])

  function getLogs() {
    return logs.value
  }

  function addLog(log: Log) {
    logs.value.push({
      timestamp: Date.now(),
      ...log,
    })
  }

  function clearLogs() {
    logs.value = []
  }

  return {
    logs,
    getLogs,
    addLog,
    clearLogs
  }

})