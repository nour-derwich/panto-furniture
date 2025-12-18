export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
export const testimonialAvatars = {
  bangUpin: "/images/reviewer1.png",
  ibukSukijan: "/images/reviewer2.png",
  mpokIna: "/images/reviewer3.png",
} as const;
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Bang Upin",
    role: "Pedagang Asongan",
    avatar: testimonialAvatars.bangUpin,
    content: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.",
    rating: 4
  },
  {
    id: "2",
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    avatar: testimonialAvatars.ibukSukijan,
    content: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah.",
    rating: 4
  },
  {
    id: "3",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    avatar: testimonialAvatars.mpokIna,
    content: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.",
    rating: 4
  },
  
  {
    id: "4",
    name: "Bang Upin",
    role: "Pedagang Asongan",
    avatar: testimonialAvatars.bangUpin,
    content: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.",
    rating: 4
  },
  {
    id: "5",
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    avatar: testimonialAvatars.ibukSukijan,
    content: "Makasih Panto, aku sekarang berasa tinggal di apartment karena .",
    rating: 4
  },
  {
    id: "6",
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    avatar: testimonialAvatars.mpokIna,
    content: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.",
    rating: 4
  },
  

];
