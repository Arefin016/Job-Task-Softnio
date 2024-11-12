import About from "../About/About"
import Banner from "../Banner/Banner"
import BookTable from "../BookTable/BookTable"
import Carosel from "../Carosel/Carosel"
import Testimonial from "../Testimonial/Testimonial"

const Home = () => {
  const profileCardData = [
    {
      title: "Vegetables Burger",
      dis: "Barbecue Italian cuisine burger",
      img: "ber.jpeg",
    },
    {
      title: "Special Pizza",
      dis: "Barbecue Italian cuisine pizza",
      img: "pizza.png",
    },
    {
      title: "Cuisine Chicken",
      dis: "Japanese Cuisine Chicken",
      img: "alu.jpeg",
    },
    {
      title: "Special French Fries",
      dis: "Barbecue Italian cuisine",
      img: "fry.jpeg",
    },
    {
      title: "Vegetables Burger",
      dis: "Barbecue Italian cuisine burger",
      img: "ber.jpeg",
    },
    {
      title: "Special Pizza",
      dis: "Barbecue Italian cuisine pizza",
      img: "pizza.png",
    },
    {
      title: "Cuisine Chicken",
      dis: "Japanese Cuisine Chicken",
      img: "alu.jpeg",
    },
    {
      title: "Special French Fries",
      dis: "Barbecue Italian cuisine",
      img: "fry.jpeg",
    },
  ]
  const videoData = [{ url: "ri.mp4" }, { url: "ri2.mp4" }, { url: "ri3.mp4" }]
  return (
    <div>
      <Banner />
      <About />
      <Carosel
        title="Crispy, Every Bite Taste"
        dis="POPULAR FOOD ITEMS"
        profileCardData={profileCardData}
      ></Carosel>
      <BookTable />
      <Testimonial
        title="Crispy, Every Bite Taste"
        dis="What Some of my Customers Say"
        videoData={videoData}
      />
    </div>
  )
}

export default Home
