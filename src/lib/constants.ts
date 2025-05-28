// lib/constants.ts
export type Bundle = {
  id: string;
  title: string;
  price: number;
  description: string;
  image?: string;
  imageUrl: string;        
  imageHint?: string;      
  downloadUrl: string;     
  images?: string[];       
  features?: string[];     
  platform?: ('instagram' | 'youtube')[]; 
  tags?: string[];         
};

export const bundles: Bundle[] = [
  {
    id: 'viral-2d-animation-funny',
    title: '500+ VIRAL 2D Animation Funny Reels Bundle 🎬',
    description: 'Skyrocket your engagement with 500+ hilarious 2D animated reels! Perfect for content creators, meme pages, and viral marketing. Ready-to-post animations that guarantee laughs and shares.',
    price: 0,
    imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: '2d animation funny memes',
    downloadUrl: 'https://drive.google.com/drive/folders/1sJmwRYH5l4fyGQaUPJ1MfvwwJT5PkL4h?usp=drive_link',
    features: ['500+ High-Quality 2D Animated Reels', 'Instant Download', 'Commercial Use Rights', 'Trending Formats', 'Viral-Ready Content'],
    platform: ['instagram', 'youtube'],
    tags: ['2D Animation', 'Funny', 'Viral', 'Memes', 'Comedy', 'Engagement']
  },
  {
    id: 'viral-ai-hindu-reels',
    title: '500+ VIRAL AI Hindu Reels Bundle 🕉️',
    description: 'Connect with millions through spiritual content! 500+ AI-generated Hindu devotional reels featuring mantras, festivals, and spiritual wisdom. Perfect for religious content creators and devotional pages.',
    price: 0,
     imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'hindu spiritual devotional',
    downloadUrl: 'https://drive.google.com/drive/folders/1ng42fi28u6N8MoNgAIndMD77TcrRhD2j',
    features: ['500+ AI Hindu Devotional Reels', 'Festival Special Content', 'Mantra & Prayer Videos', 'High Engagement Guaranteed', 'Cultural Authenticity'],
    platform: ['instagram', 'youtube'],
    tags: ['Hindu', 'Spiritual', 'Devotional', 'AI Generated', 'Religious', 'Cultural']
  },
  {
    id: 'viral-ai-motivational-bonus',
    title: '600+ VIRAL AI Motivational Reels Bundle 💪 (BONUS)',
    description: 'Transform lives with powerful motivation! 600+ AI-crafted inspirational reels featuring success quotes, mindset shifts, and life-changing wisdom. Boost your audience engagement by 300%!',
    price: 0,
    imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'motivation success mindset',
    downloadUrl: 'https://drive.google.com/drive/folders/1kj3D8LqbD-hMOVOD8i0yroA6o3HTdtpp?usp=sharing',
    features: ['600+ Premium Motivational Reels', 'Success Mindset Content', 'Daily Inspiration Videos', 'Proven Engagement Boosters', 'Life Coach Approved'],
    platform: ['instagram', 'youtube'],
    tags: ['Motivation', 'Success', 'Mindset', 'Inspiration', 'Self-Help', 'Personal Growth']
  },
  {
    id: 'viral-ai-fitness-reels',
    title: '500+ VIRAL AI Fitness Reels Bundle 🏋️‍♂️',
    description: 'Build your fitness empire! 500+ AI-powered workout reels featuring exercise routines, nutrition tips, and transformation stories. Perfect for trainers, gyms, and fitness influencers.',
    price: 0,
    imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'fitness workout gym',
    downloadUrl: 'https://drive.google.com/drive/folders/17TZxcANBRfCZQL0G0ZUnIeQ2FyVElq6A?usp=drive_link',
    features: ['500+ Professional Fitness Reels', 'Workout Routines', 'Nutrition Tips', 'Transformation Stories', 'Gym-Ready Content'],
    platform: ['instagram', 'youtube'],
    tags: ['Fitness', 'Workout', 'Gym', 'Health', 'Exercise', 'Transformation']
  },
  {
    id: 'viral-ai-tech-reels',
    title: '500+ VIRAL AI Tech Reels Bundle 💻',
    description: 'Dominate the tech space! 500+ cutting-edge technology reels covering AI, gadgets, coding tips, and tech reviews. Perfect for tech YouTubers and digital creators.',
    price: 0,
    imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'technology ai gadgets',
    downloadUrl: 'https://drive.google.com/drive/folders/1YKqZJe120qfeXoGIflkgjRC8z4-pdVks',
    features: ['500+ Tech-Focused Reels', 'AI & Gadget Reviews', 'Coding Tips & Tricks', 'Tech News Updates', 'Future-Ready Content'],
    platform: ['instagram', 'youtube'],
    tags: ['Technology', 'AI', 'Gadgets', 'Coding', 'Tech Reviews', 'Innovation']
  },
  {
    id: 'viral-health-reels',
    title: '500+ VIRAL Health Reels Bundle 🏥',
    description: 'Promote wellness and save lives! 500+ health-focused reels covering medical tips, wellness advice, and healthy living. Ideal for healthcare professionals and wellness coaches.',
    price: 219,
   imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'health wellness medical',
    downloadUrl: 'https://drive.google.com/drive/folders/10YYPs43_ODxP9XCbywP-dVedyzA0Icn6?usp=drive_link',
    features: ['500+ Health & Wellness Reels', 'Medical Tips & Advice', 'Healthy Living Content', 'Professional Quality', 'Educational Value'],
    platform: ['instagram', 'youtube'],
    tags: ['Health', 'Wellness', 'Medical', 'Healthcare', 'Healthy Living', 'Prevention']
  },
  {
    id: 'instagram-growth-mastery',
    title: 'Instagram Growth Mastery Course 2022 📈',
    description: 'Master Instagram like a pro! Complete growth course with proven strategies, algorithm secrets, and monetization techniques. From 0 to 100K followers guaranteed!',
    price: 499,
    imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'instagram growth course',
    downloadUrl: 'https://drive.google.com/drive/folders/1q9rx8dKGhmYWBdVTbjDz7PuC3u6PXuEF?usp=drive_link',
    features: ['Complete Growth Strategy', 'Algorithm Secrets Revealed', 'Monetization Techniques', 'Case Studies Included', 'Lifetime Access'],
    platform: ['instagram'],
    tags: ['Instagram', 'Growth', 'Course', 'Marketing', 'Social Media', 'Monetization']
  },
  {
    id: 'art-craft-reel-bundle',
    title: 'Art 🎨 and Craft Reel Bundle',
    description: 'Unleash creativity! Premium art and craft reels featuring DIY projects, painting tutorials, and creative inspiration. Perfect for artists, crafters, and creative entrepreneurs.',
    price: 179,
     imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'art craft diy creative',
    downloadUrl: 'https://drive.google.com/drive/folders/1mwN5iMJZMCg7yKtCBXupUoeyu3yEQadn',
    features: ['Premium Art & Craft Content', 'DIY Project Tutorials', 'Creative Inspiration', 'Step-by-Step Guides', 'Artist-Approved'],
    platform: ['instagram', 'youtube'],
    tags: ['Art', 'Craft', 'DIY', 'Creative', 'Painting', 'Handmade']
  },
  {
    id: 'mega-instagram-reels-bundle',
    title: '8200+ MEGA Instagram Reels Bundle 🚀',
    description: 'The ultimate content goldmine! 8200+ premium reels across all niches. Never run out of content again! Lifetime value for serious content creators and agencies.',
    price: 999,
 imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'mega bundle instagram reels',
    downloadUrl: 'https://drive.google.com/drive/folders/12mlzZqUhMeSvpO_HcfpSOGShZs2YUXit?usp=sharing',
    features: ['8200+ Premium Reels', 'All Niches Covered', 'Lifetime Content Supply', 'Commercial Rights', 'Agency-Ready Package'],
    platform: ['instagram', 'youtube'],
    tags: ['Mega Bundle', 'Instagram', 'All Niches', 'Premium', 'Lifetime', 'Agency']
  },
  {
    id: 'landing-page-templates',
    title: '500+ Ready-Made Landing Page Templates 🌐',
    description: 'Convert visitors into customers! 500+ high-converting landing page templates for every industry. Boost your sales by 400% with proven designs!',
    price: 399,
     imageUrl: '/images/reelmojo-bundle-cover.png',
    imageHint: 'landing page templates conversion',
    downloadUrl: 'https://drive.google.com/file/d/11LMeLG3F-Sdk6a28tnDSfq3apm_x-igd/view?usp=drive_link',
    features: ['500+ Professional Templates', 'High-Conversion Designs', 'Mobile Responsive', 'Easy Customization', 'Industry-Specific'],
    platform: ['instagram', 'youtube'],
    tags: ['Landing Pages', 'Templates', 'Conversion', 'Web Design', 'Marketing', 'Sales']
  }
];

// Add this to your constants file where testimonials are defined

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
  avatarHint?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Instagram Influencer",
    quote: "ReelMojo ke premium bundles ne meri Instagram growth ko next level pe pahuncha diya! Engagement 3x badh gaya hai aur followers bhi. Best investment for content creators!",
    avatarUrl: "/images/avatars/priya.jpg",
    avatarHint: "young indian woman with long hair"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "YouTube Creator",
    quote: "Main 6 mahine se struggle kar raha tha apne YouTube channel ke liye. ReelMojo ke Shorts bundles use karne ke baad, mere views 5 guna badh gaye! Quality ekdum zabardast hai.",
    avatarUrl: "/images/avatars/arjun.jpg",
    avatarHint: "indian man with beard"
  },
  {
    id: 3,
    name: "Neha Gupta",
    role: "Fashion Blogger",
    quote: "Meri fashion reels ko ReelMojo ne totally transform kar diya hai! Templates itne unique hain ki mere followers puchte hain ki maine kaise banaya. Worth every penny!",
    avatarUrl: "/images/avatars/neha.jpg",
    avatarHint: "stylish indian woman with glasses"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Fitness Influencer",
    quote: "Fitness content ke liye perfect templates! Maine ReelMojo ke bundles se apne workout reels banaye aur clients 40% badh gaye. Editing time bhi kam ho gaya hai.",
    avatarUrl: "/images/avatars/vikram.jpg",
    avatarHint: "muscular indian man"
  },
  {
    id: 5,
    name: "Ananya Desai",
    role: "Travel Vlogger",
    quote: "Travel content create karne mein ReelMojo ka koi mukabla nahi! Maine Thailand trip ke liye inke templates use kiye aur ek reel viral ho gayi 2M+ views ke saath!",
    avatarUrl: "/images/avatars/ananya.jpg",
    avatarHint: "indian woman with curly hair"
  },
  {
    id: 6,
    name: "Rohit Verma",
    role: "Food Blogger",
    quote: "Food blogging mein presentation sabse important hai. ReelMojo ke templates ne mere food content ko professional look de diya hai. Ab brands bhi approach kar rahe hain!",
    avatarUrl: "/images/avatars/rohit.jpg",
    avatarHint: "indian man with glasses"
  }
];


export const SERVICE_TERMS_PLACEHOLDER = `
ReelMojo Service Terms (Summary):
1. License: Upon purchase, you receive a non-exclusive, worldwide, perpetual license to use the digital reel/short bundles for personal and commercial projects on social media platforms.
2. Restrictions: You may not resell, redistribute, or sublicense the bundles or individual assets. You may not use the assets in a way that is defamatory, illegal, or infringes on third-party rights.
3. Payment: All payments are processed via our designated payment gateway. Prices are as listed on the website and are subject to change.
4. Delivery: Download links are provided immediately after successful payment. Links are typically to Google Drive or Dropbox. We strive to ensure links are active, but if you encounter issues, please contact support.
5. Refunds: Due to the digital nature of our products, all sales are final. Refunds are only issued in cases of non-delivery or if the product is significantly not as described, at our sole discretion.
6. Support: We offer customer support for issues related to download access and product inquiries.
7. AI-Generated Content: Some creative elements or ideas within bundles might be inspired or assisted by AI tools, but are curated and packaged by human creators.
8. Updates: We may update these terms from time to time. Continued use of our service implies acceptance of the revised terms.
For full terms and conditions, please visit [Your Full Terms Page URL - Placeholder].
`;
