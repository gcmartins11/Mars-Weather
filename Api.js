import Axios from 'axios'

const apiKey = 'ZRXP2i3wLAk2BVlNBaoOPgfUEhMCscJyPrtGB8Tz'

const api = Axios.create({baseURL: `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`})
// const demoapi = Axios.create({baseURL: 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'})

export default api