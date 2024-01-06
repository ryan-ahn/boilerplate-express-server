import axios from 'axios';

export const getServerIp = async () => {
  try {
    const response = await axios.get('https://api64.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    return '0.0.0.0';
  }
};
