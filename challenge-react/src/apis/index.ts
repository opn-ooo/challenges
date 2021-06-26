import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (path: string): Promise<any> => {
  try {
    const response = await instance.get(path)
    if (response) {
      return response.data
    }
  } catch (e) {
    return null
  }
}