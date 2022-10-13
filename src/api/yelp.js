import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 12feMD3xAaHl49EjPn7-p5pNA9byJZwoJ_sNmneXOJArmE-zRHI5SpAuhX76PteyXrzuij-eDi88XWYN1yVHAAvp2F7Vdfi6hELx_xnldCAhhBbGsYOLF6jMzyA_Y3Yx',
  },
})
