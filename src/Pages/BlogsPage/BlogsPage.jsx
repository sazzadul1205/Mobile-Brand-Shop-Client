import { useState } from "react";

// Extended Blog data with more detailed content
const blogData = [
  {
    id: 1,
    title: "The Future of Smart Home Technology: What’s Coming in 2024",
    content:
      "Smart homes are no longer a thing of the future. As we step into 2024, the integration of AI, IoT, and smart appliances is revolutionizing the way we interact with our living spaces. Devices are becoming more connected, intelligent, and seamless to use. In the coming years, we can expect advancements such as voice-controlled systems, self-regulating appliances, and home automation features that make our lives easier. From energy management to enhanced security, the future holds limitless possibilities for smart home tech.",
    imageUrl:
      "https://i.ibb.co.com/8g7kGy2/The-Future-of-Smart-Home-Technology.png",
    author: "Jane Doe",
    publishedDate: "January 10, 2024",
    category: "Smart Technology",
  },
  {
    id: 2,
    title: "Top 5 Must-Have Gadgets for Every Tech Lover in 2024",
    content:
      "Looking for the latest tech to add to your collection? From cutting-edge smartphones to innovative gaming consoles, here’s a list of the top gadgets you can’t miss in 2024. The market is brimming with new gadgets designed to enhance productivity, entertainment, and even health. Whether you’re a gamer, a fitness enthusiast, or someone looking for the latest phone, these gadgets promise to bring convenience and excitement into your life. Get ready to discover the tech that will shape the year!",
    imageUrl:
      "https://i.ibb.co.com/30RNF3p/Top-5-Must-Have-Gadgets-for-Every-Tech-Lover-in-2024.jpg",
    author: "John Smith",
    publishedDate: "January 12, 2024",
    category: "Gadgets",
  },
  {
    id: 3,
    title: "How to Choose the Right Laptop for Your Needs in 2024",
    content:
      "With so many options on the market, choosing the perfect laptop can be overwhelming. In this guide, we break down the key factors to consider—from performance to portability. Laptops are evolving to meet the needs of students, professionals, and gamers alike. Whether you're looking for a machine to handle intensive tasks like video editing or just need a lightweight option for on-the-go work, we’ve got you covered with tips on specs, budget considerations, and brand recommendations.",
    imageUrl:
      "https://i.ibb.co.com/wpWPJxq/How-to-Choose-the-Right-Laptop-for-Your-Needs-in-2024.jpg",
    author: "Emily Johnson",
    publishedDate: "January 15, 2024",
    category: "Laptops",
  },
  {
    id: 4,
    title: "Understanding the Benefits of OLED vs. QLED for TV Shopping",
    content:
      "If you’re in the market for a new TV, you’ve probably heard of OLED and QLED. But what’s the difference, and which one is right for you? OLED panels provide deep blacks and excellent contrast, making them ideal for cinematic experiences. QLED, on the other hand, offers better brightness and is perfect for well-lit rooms. Both technologies have their pros and cons, and this guide will help you choose the one that best fits your viewing habits.",
    imageUrl:
      "https://i.ibb.co.com/2qRXcYd/Understanding-the-Benefits-of-OLED-vs-QLED-for-TV-Shopping.jpg",
    author: "Alice Brown",
    publishedDate: "January 18, 2024",
    category: "TV",
  },
  {
    id: 5,
    title: "The Rise of Wearable Tech: What’s Next?",
    content:
      "Smartwatches, fitness trackers, and even smart clothing—wearable tech is becoming a staple in our daily lives. Discover what’s next in this growing market. The rise of wearables has made health and fitness tracking easier and more accessible. With the integration of AI and predictive analytics, the next generation of wearables will not just monitor your health but also provide insights into your future well-being. We’ll also explore emerging innovations such as smart glasses and wearable AI assistants.",
    imageUrl:
      "https://i.ibb.co.com/vw7Mm7g/The-Rise-of-Wearable-Tech-What-s-Next.jpg",
    author: "Bob Green",
    publishedDate: "January 20, 2024",
    category: "Wearable Tech",
  },
  {
    id: 6,
    title: "The Best Drones to Buy in 2024",
    content:
      "Drones have revolutionized industries from filmmaking to agriculture. In 2024, drones are smarter, faster, and more capable than ever before. Whether you’re a hobbyist looking for a fun gadget or a professional in need of advanced features like GPS tracking and 4K cameras, there’s a drone out there for you. This guide will introduce you to the top models of the year, comparing features, pricing, and overall performance to help you make the right choice.",
    imageUrl:
      " https://i.ibb.co.com/R7DXF2T/The-Best-Drones-to-Buy-in-2024.jpg",
    author: "Chris Martin",
    publishedDate: "January 25, 2024",
    category: "Drones",
  },
  {
    id: 7,
    title: "How 5G Technology is Transforming Mobile Communication in 2024",
    content:
      "5G is no longer a futuristic concept—it’s here and transforming how we communicate. With faster speeds, lower latency, and broader connectivity, 5G is set to revolutionize mobile communication in 2024. This article explores the benefits of 5G, its impact on industries such as healthcare and education, and what consumers can expect as more devices become 5G-compatible. From augmented reality experiences to autonomous vehicles, the potential of 5G is just beginning to unfold.",
    imageUrl:
      "https://i.ibb.co.com/kg4L0pw/How-5-G-Technology-is-Transforming-Mobile-Communication-in-2024.jpg",
    author: "Sarah Lee",
    publishedDate: "January 28, 2024",
    category: "5G Technology",
  },
  {
    id: 8,
    title: "Exploring the World of Electric Vehicles: 2024 Edition",
    content:
      "The electric vehicle (EV) market continues to grow, with 2024 introducing even more eco-friendly options for drivers. This article covers the latest models, features, and innovations in the EV world. Whether you’re considering switching to an EV for environmental reasons or to save on fuel costs, this guide will help you navigate the world of electric cars. From Tesla’s newest release to more affordable options from established automakers, the future of transportation is electric.",
    imageUrl:
      "https://i.ibb.co.com/V2f6GpP/Exploring-the-World-of-Electric-Vehicles-2024-Edition.jpg",
    author: "David Wright",
    publishedDate: "February 1, 2024",
    category: "Electric Vehicles",
  },
  {
    id: 9,
    title: "The Best Noise-Canceling Headphones for 2024",
    content:
      "With so many noise-canceling headphones on the market, it can be tough to choose the right pair. In this article, we compare the best models available in 2024, considering factors such as sound quality, battery life, and price. Whether you're a frequent traveler, a music lover, or just looking for a way to block out the noise while working, this guide will help you find the perfect headphones for your needs.",
    imageUrl:
      "https://i.ibb.co.com/SwqGZ73/The-Best-Noise-Canceling-Headphones-for-2024.jpg",
    author: "Michael Harris",
    publishedDate: "February 5, 2024",
    category: "Audio",
  },
];

const BlogsPage = () => {
    // State to track the currently selected blog (default to the first blog)
    const [selectedBlog, setSelectedBlog] = useState(blogData[0]);
  
    // State to manage which set of blogs are visible in the vertical slider
    const [startIndex, setStartIndex] = useState(0);
  
    // The number of blogs to show at once
    const blogsToShow = 3;
  
    // Function to handle blog selection
    const handleBlogClick = (blog) => {
      setSelectedBlog(blog);
    };
  
    // Function to handle moving up the slider
    const handleSlideUp = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  
    // Function to handle moving down the slider
    const handleSlideDown = () => {
      if (startIndex + blogsToShow < blogData.length) {
        setStartIndex(startIndex + 1);
      }
    };
  
    return (
      <div className="bg-gradient-to-b from-green-500 to-white py-24 text-black">
        {/* Page Header */}
        <div className="text-center my-5">
          <p className="font-bold text-3xl">Our Blogs</p>
          <p className="text-xl">
            Read Our Blogs and know more about Electronics
          </p>
        </div>
  
        {/* Blog Content */}
        <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto gap-6">
          {/* Big Feature Blog */}
          <div className="lg:w-2/3  bg-white shadow-lg rounded-lg p-6">
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-3">{selectedBlog.title}</h2>
              <p className="mb-2 text-gray-500">
                By {selectedBlog.author} | {selectedBlog.publishedDate}
              </p>
              <p className="mb-5 text-gray-600">{selectedBlog.content}</p>
              <p className="italic text-gray-400">
                Category: {selectedBlog.category}
              </p>
              <button className="text-green-500 font-bold">Read More</button>
            </div>
          </div>
  
          {/* Smaller Blog Articles with Slider */}
          <div className="lg:w-1/3 space-y-4">
            {/* Slider Up Button */}
            <button
              onClick={handleSlideUp}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
              disabled={startIndex === 0} // Disable button at the top
            >
              ▲
            </button>
  
            {/* Displaying the visible blogs */}
            {blogData.slice(startIndex, startIndex + blogsToShow).map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
                className="cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p className="text-sm text-gray-500">
                  By {blog.author} | {blog.publishedDate}
                </p>
                <img
                  className="w-full h-40 object-cover mt-2 rounded-lg"
                  src={blog.imageUrl}
                  alt={blog.title}
                />
              </div>
            ))}
  
            {/* Slider Down Button */}
            <button
              onClick={handleSlideDown}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
              disabled={startIndex + blogsToShow >= blogData.length} // Disable button at the bottom
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogsPage;