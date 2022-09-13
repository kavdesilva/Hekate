import { openDb } from 'idb'

const dbPromise = _ => {
    if (!('indexedDB' in window)) {
      throw new Error('browser does not support indexeddb')
    }
    // if installed from npm use 'openDB'
    return openDb('hekateRecordsDB', 1, upgradeDb => {
      if (!upgradeDb.objectStoreNames.contains('records')) {
        upgradeDb.createObjectStore('records')
      }
    })
  }

  const saveToStorage = async (storeName, record) => {
    try {
        const db = await dbPromise()
        const tx = db.transaction(storeName, 'readwrite')
        const store = tx.objectStore(storeName)
        store.put(record, storeName)
        return tx.complete
    } catch (error) {
        return error
    }
  }

  const checkStorage = async (storeName, record) => {
    try {
        const db = await dbPromise()
        const tx = db.transaction(storeName, 'readonly')
        const store = tx.objectStore(storeName)
        return store.get(record, storeName)
    } catch (error) {
        return error
    }
  }

  export default {
    checkStorage,
    saveToStorage
  }