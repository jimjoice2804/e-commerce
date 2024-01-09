const data  = [
  {
    id: 1,
    name: "LG 1.5 Ton Inverter Split AC with Dual Inverter Technology",
    description:
      "Cool your space efficiently and quietly with this energy-saving inverter AC. Features dual inverter compressor for faster cooling, low noise operation, and smart Wi-Fi control.",
    tag: "Air Conditioners",
  },
  {
    id: 2,
    name: "Blue Star 1.2 Ton 5 Star Window AC with Anti-Viral Filter",
    description:
      "Keep your air clean and cool with this 5-star rated window AC featuring an anti-viral filter, copper condenser for long life, and high-efficiency cooling performance.",
    tag: "Air Conditioners",
  },
  {
    id: 3,
    name: "Voltas 1.5 Ton 3 Star Inverter Split AC with Turbo Cool Mode",
    description:
      "Enjoy rapid cooling with this 3-star inverter AC featuring a turbo cool mode for instant relief, eco mode for energy savings, and sleep mode for comfortable sleep.",
    tag: "Air Conditioners",
  },
  {
    id: 4,
    name: "Carrier 1 Ton 5 Star Inverter Split AC with 4-in-1 Filter",
    description:
      "Breathe clean and healthy air with this 5-star inverter AC featuring a 4-in-1 filter that removes dust, bacteria, allergens, and odor. Also includes intelligent motion sensors for energy efficiency.",
    tag: "Air Conditioners",
  },
  {
    id: 5,
    name: "Daikin 1.8 Ton Inverter Split AC with Coanda Airflow",
    description:
      "Experience wide and even cooling with this inverter AC featuring Coanda airflow technology that gently directs air along the ceiling for a comfortable breeze. Also includes multi-split capability for multiple rooms.",
    tag: "Air Conditioners",
  },
  {
    id: 6,
    name: "Ultra X Pro",
    description:
      "The pinnacle of performance. Experience blazing speeds with the latest processor, a breathtaking display, and a revolutionary camera system.",
    tag: "high-end",
  },
  {
    id: 7,
    name: "Nova G5 Plus",
    description:
      "Capture your world in stunning detail. This budget-friendly phone boasts a triple-lens camera system and a long-lasting battery, perfect for everyday life.",
    tag: "mid-range",
  },
  {
    id: 8,
    name: "Lite Z Play",
    description:
      "Sleek and stylish, this lightweight phone fits perfectly in your palm. Stay connected on the go with all-day battery life and seamless social media integration.",
    tag: "budget",
  },
  {
    id: 9,
    name: "Explorer X Rugged",
    description:
      "Built for adventure. This durable phone withstands the elements with its water-resistant design and robust construction. Perfect for outdoor enthusiasts.",
    tag: "rugged",
  },
  {
    id: 10,
    name: "Fold S Flex",
    description:
      "The future is foldable. Experience a revolutionary new way to interact with your phone with its stunning folding display and intuitive multitasking features.",
    tag: "cutting-edge",
  },
  {
    id: 11,
    name: "Crystal 4K UHD Smart TV",
    description:
      "Immerse yourself in stunning 4K visuals and vibrant colors with this Crystal UHD Smart TV. It features HDR10+ for enhanced contrast, a sleek design, and a smart platform for seamless streaming.",
    tag: "TV",
  },
  {
    id: 12,
    name: "OLED Evo Cinema Screen TV",
    description:
      "Experience the next level of home entertainment with this OLED Evo TV. It boasts self-lit pixels for perfect blacks, infinite contrast, and stunning picture quality. Enjoy immersive Dolby Atmos sound and a suite of smart features.",
    tag: "TV",
  },
  {
    id: 13,
    name: "QLED Quantum Dot Q80B TV",
    description:
      "Discover a world of vivid colors and breathtaking detail with this QLED Q80B TV. It features Quantum Dot technology for over a billion shades of color, AI-powered 4K upscaling, and immersive Object Tracking Sound for a cinematic experience.",
    tag: "TV",
  },
  {
    id: 14,
    name: "Full Array LED Mini-LED 4K UHD TV",
    description:
      "Unleash the power of Mini-LED technology with this Full Array LED TV. Enjoy incredibly bright and precise lighting for exceptional contrast and picture quality. Experience a smoother gaming experience with variable refresh rate and immersive sound with Dolby Atmos.",
    tag: "TV",
  },
  {
    id: 15,
    name: "Lifestyle Frame TV",
    description:
      "Elevate your home décor with this stunning Lifestyle Frame TV. It blends seamlessly into your space, displaying artwork or personal photos when not in use. Enjoy 4K resolution, smart features, and a customizable bezel for a unique look.",
    tag: "TV",
  },
  {
    id: 16,
    name: "Cozy Cashmere Sweater",
    description:
      "Luxuriously soft and warm cashmere sweater in a variety of colors, perfect for chilly days.",
    tag: "Sweaters",
  },
  {
    id: 17,
    name: "Flowy Floral Dress",
    description:
      "Elegant and airy floral dress with a flattering silhouette, ideal for summer evenings.",
    tag: "Dresses",
  },
  {
    id: 18,
    name: "Ripped Denim Jeans",
    description:
      "Classic and stylish ripped denim jeans in various washes, a wardrobe staple for any occasion.",
    tag: "Jeans",
  },
  {
    id: 19,
    name: "Timeless Leather Jacket",
    description:
      "Timeless and versatile leather jacket that adds a touch of edge to any outfit.",
    tag: "Jackets",
  },
  {
    id: 20,
    name: "Comfortable Sneakers",
    description:
      "Supportive and stylish sneakers for everyday wear, available in various colors and styles.",
    tag: "Shoes",
  },
  {
    id: 21,
    name: "Smart Voice Assistant Speaker",
    description:
      "Control your smart home with your voice, play music, set alarms, get news updates, and more.",
    tag: "Smart Home",
  },
  {
    id: 22,
    name: "Smart Thermostat",
    description:
      "Save energy and control your home's temperature remotely from your phone or voice commands.",
    tag: "Smart Home",
  },
  {
    id: 23,
    name: "Smart Lighting Kit",
    description:
      "Customize your lighting ambiance, create schedules, and control your lights remotely with this smart bulb kit.",
    tag: "Smart Home",
  },
  {
    id: 24,
    name: "Smart Security Camera",
    description:
      "Keep an eye on your home with 24/7 live video, motion detection alerts, and two-way audio.",
    tag: "Smart Home",
  },
  {
    id: 25,
    name: "Smart Plugs",
    description:
      "Turn any device into a smart device, control appliances remotely, and set schedules to save energy.",
    tag: "Smart Home",
  },
  {
    id: 26,
    name: "High-Performance Blender",
    description:
      "Blend smoothies, soups, and sauces with ease with this powerful blender featuring multiple speeds and pre-programmed settings.",
    tag: "Kitchen Appliances",
  },
  {
    id: 27,
    name: "Smart Air Fryer",
    description:
      "Enjoy crispy and healthy fried food with this air fryer that uses minimal oil and features smart cooking programs.",
    tag: "Kitchen Appliances",
  },
  {
    id: 28,
    name: "Multi-Cooker",
    description:
      "Simplify meal prep with this versatile multi-cooker that pressure cooks, slow cooks, steams, and more.",
    tag: "Kitchen Appliances",
  },
  {
    id: 29,
    name: "Coffee Maker with Built-in Grinder",
    description:
      "Start your day with fresh-brewed coffee from this coffee maker that grinds beans and brews automatically.",
    tag: "Kitchen Appliances",
  },
  {
    id: 30,
    name: "Robot Vacuum Cleaner",
    description:
      "Keep your floors clean effortlessly with this robot vacuum cleaner that navigates your home and automatically cleans.",
    tag: "Kitchen Appliances",
  },
  {
    id: 31,
    name: "Portable Smart Projector",
    description:
      "Enjoy movies and content on the go with this compact projector that connects to your smartphone or tablet for a cinematic experience anywhere.",
    tag: "Gadgets",
  },
  {
    id: 32,
    name: "Voice-Controlled Smart Light Bulbs",
    description:
      "Set the mood and create ambiance with these energy-efficient bulbs that can be controlled by voice commands or a smartphone app.",
    tag: "Gadgets",
  },
  {
    id: 33,
    name: "Wireless Charging Mouse Pad",
    description:
      "Keep your workspace clutter-free with this mouse pad that wirelessly charges your compatible devices while you work.",
    tag: "Gadgets",
  },
  {
    id: 34,
    name: "Smart Sleep Tracker",
    description:
      "Monitor your sleep patterns, heart rate, and breathing to understand your sleep quality and make improvements for better rest.",
    tag: "Gadgets",
  },
  {
    id: 35,
    name: "Pocket-Sized Photo Printer",
    description:
      "Print instant memories on the spot with this portable printer that connects to your phone for instant photo prints.",
    tag: "Gadgets",
  },
  {
    id: 36,
    name: "Immersive Nature Sounds: Forest Rain",
    description:
      "Escape to a tranquil forest with soothing sounds of rain falling on leaves, birds chirping, and gentle breezes. Perfect for relaxation, meditation, or sleep.",
    tag: "Audio",
  },
  {
    id: 37,
    name: "Upbeat Workout Mix: Power Your Exercise",
    description:
      "Get energized with this high-energy playlist featuring fast-paced beats and motivational anthems. Ideal for cardio, strength training, and pushing your limits.",
    tag: "Audio",
  },
  {
    id: 38,
    name: "Chill Lo-Fi Beats: Study and Focus",
    description:
      "Create a calm and focused atmosphere with mellow lo-fi beats and instrumentals. Ideal for studying, working, reading, or relaxing at home.",
    tag: "Audio",
  },
  {
    id: 39,
    name: "Epic Cinematic Trailer: Inspire Adventure",
    description:
      "Unleash your inner hero with this epic cinematic trailer featuring soaring music, heart-pounding action, and breathtaking visuals. Perfect for setting the mood for movies, games, or creative projects.",
    tag: "Video",
  },
  {
    id: 40,
    name: "Mesmerizing Nature Documentary: Explore the Wild",
    description:
      "Journey through the wonders of nature with stunning high-definition footage of animals, landscapes, and ecosystems. Learn about wildlife, conservation, and the beauty of our planet.",
    tag: "Video",
  },
];

export default data;