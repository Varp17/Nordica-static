import dirtLockBlue from '@/assets/dirt lock car wash blue.jpg';
import dirtLockBlack from '@/assets/dirt lock car wash black.jpg';
import dirtLockRed from '@/assets/dirt lock car wash red.jpg';
import dirtLockYellow from '@/assets/dirt lock car wash yellow.jpg';
import dirtLockBlackWhite from '@/assets/dirt lock car wash black white.jpg';

import scrubWallWhite from '@/assets/Bucket Filter – Vertical Cleaning Tool for Brushes, Mitts (White).jpg';
import scrubWallBlack from '@/assets/Bucket Filter – Vertical Cleaning Tool for Brushes, Mitts (Black).jpg';
import scrubWallRed from '@/assets/Bucket Filter – Vertical Cleaning Tool for Brushes, Mitts (Red).jpg';

import dirtLockScrubPumpBlack from '@/assets/The Dirt Lock Scrub and Pump black.jpg';
import dirtLockScrubPumpWhite from '@/assets/The Dirt Lock Scrub and Pump white.jpg';

import padWasherBlackWithCleaner from '@/assets/Dirt Lock Pad Washer System Attachment with Spray Cleaner (Black).jpg';
import padWasherWhiteWithCleaner from '@/assets/The Dirt Lock Pad Washer System Attachment with Spray Cleaner (White).jpg';
import padWasherBlack from '@/assets/Dirt Lock Pad Washer System Attachment (Black).jpg';
import padWasherWhite from '@/assets/The Dirt Lock Pad Washer System Attachment (White).jpg';

import hoseRollerYellow from '@/assets/4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Yellow).jpg';
import hoseRollerBlack from '@/assets/4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Black).jpg';
import hoseRollerBlackOld from '@/assets/Car Hose Guides (4 PACK BLACK).jpg';
import hoseRollerBlue from '@/assets/4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Blue).jpg';
import hoseRollerNeon from '@/assets/4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Neon).jpg';
import hoseRollerRed from '@/assets/4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Red).jpg';

export interface Video {
  url: string;
  title: string;
  description?: string;
  subtitle?: string;
}

export interface Review {
  name: string;
  rating: number;
  title: string;
  date: string;
  verified: boolean;
  comment: string;
  images?: string[];
  helpfulCount: number;
}

export interface Specifications {
  brand: string;
  material: string;
  weight: string;
  dimensions: string;
  capacity?: string;
  manufacturer: string;
}

export interface RatingBreakdown {
  stars: number;
  percentage: number;
  count: number;
}

export interface ColorOption {
  name: string;
  value: string;
  image: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number | null;
  category: string;
  image: string;
  images: string[];
  features: string[];
  compatibility: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: string;
  url?: string;
  brand: string;
  specifications: Specifications;
  colorOptions?: ColorOption[];
  videos?: {
    main: Video;
    additional: Video[];
  };
  reviews: Review[];
  ratingBreakdown: RatingBreakdown[];
  country: 'USA' | 'CAD' | null;
}

export const DEFAULT_REVIEWS: Review[] = [
  {
    name: "John Doe",
    rating: 5,
    title: "Perfect Product!",
    date: "2 days ago",
    verified: true,
    comment: "This is hands down the best car care product I've ever purchased. The quality is exceptional and it works exactly as advertised. Installation was super easy and it's made such a difference in my detailing routine. Highly recommend to anyone serious about car care!",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&h=200&fit=crop"
    ],
    helpfulCount: 24
  },
  {
    name: "Sarah Miller",
    rating: 4,
    title: "Great value for money",
    date: "1 week ago",
    verified: true,
    comment: "Really impressed with the quality. Works great and is very durable. The only reason I'm giving 4 stars instead of 5 is that shipping took a bit longer than expected, but the product itself is fantastic. Would definitely buy again.",
    helpfulCount: 12
  },
  {
    name: "Mike Rodriguez",
    rating: 5,
    title: "Professional Quality",
    date: "2 weeks ago",
    verified: true,
    comment: "As a professional detailer, I'm always skeptical of new products. But this exceeded my expectations. The build quality is solid, it performs consistently, and my clients have noticed the difference. Already ordered 3 more for my team. A must-have tool!",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=200&fit=crop"
    ],
    helpfulCount: 45
  },
  {
    name: "Emily Kim",
    rating: 5,
    title: "Exceeded expectations!",
    date: "3 weeks ago",
    verified: true,
    comment: "I was hesitant to spend this much on a car care product, but I'm so glad I did. It's made my weekly car washing so much easier and more effective. The results speak for themselves - my car looks showroom fresh every time. Worth every penny!",
    helpfulCount: 18
  }
];

export const DEFAULT_VIDEOS = {
  main: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1",
    title: "Product Video",
    description: "Watch this detailed demonstration to see how the Detail Guardz product works and learn professional installation tips. See the innovative design features that make this the top choice for car care enthusiasts and professional detailers."
  },
  additional: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1",
      title: "Installation Guide",
      subtitle: "Step-by-step setup instructions"
    },
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1",
      title: "Customer Review",
      subtitle: "Real users share their experience"
    },
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1",
      title: "Pro Tips & Tricks",
      subtitle: "Expert advice for best results"
    }
  ]
};

export const DEFAULT_RATING_BREAKDOWN: RatingBreakdown[] = [
  { stars: 5, percentage: 75, count: 423 },
  { stars: 4, percentage: 15, count: 85 },
  { stars: 3, percentage: 6, count: 34 },
  { stars: 2, percentage: 3, count: 17 },
  { stars: 1, percentage: 1, count: 5 },
];

export const DEFAULT_SPECIFICATIONS: Specifications = {
  brand: "DETAIL GUARDZ",
  material: "High-Grade Plastic Resin",
  weight: "525 Grams",
  dimensions: "10.43\"L x 10.43\"W x 2.56\"H",
  capacity: "5 Gallons",
  manufacturer: "DETAIL GUARDZ Canada"
};

export const categories = [
  { id: 'Detailing-Accessories', name: 'Detailing Accessories', slug: 'Detailing-Accessories' },
];

export const products: Product[] = [
  {
    id: 'Dirt-Lock-Insert',
    name: 'DETAIL GUARDZ Dirt Lock Car Wash Insert – Bucket Filter for 3–8 Gallon Round Pails – Traps Debris, Prevents Swirl Marks – Self-Locking Rubber Grips, Venturi Flow, Cleaning Tool (Blue)',
    slug: 'dirt-lock-car-wash-insert',
    description: 'Patented Venturi bucket filter that traps grit and debris at the bottom of your wash bucket — keeping your mitt in cleaner water to prevent swirl marks and scratches on your vehicle\'s paint.',
    longDescription: `DETAIL GUARDZ DIRT LOCK CAR WASH BUCKET INSERT

Our patented design utilizes the motion of your hand to pump and trap debris underneath the screen. The Dirt Lock has a complex Venturi filtering system that manipulates the flow of water in a downward direction. This allows dirt particles to collect underneath the screen without a way for it to re-enter into the clean water. In short, every time you pump your hand in the bucket you are cycling the dirt underneath the screen and replenishing clean water above to help prevent swirl-marks and scratches on the painted surface.

ONE Dirt Lock will filter your wash water like you have never seen before. Protect your car and eliminate the main cause of swirl marks on your paintwork! Proudly Made In Canada.

Fits inside nearly any 3, 4, 5, 6, 7 or 8 gallon standard round wash pail with its flexible, self-adjusting, rubber locking grips.

VENTURI EFFECT: The Dirt Lock manipulates the flow of water by creating a high pressure underneath the filter and a low pressure above. This results in a tunneling effect and pushes the debris safely underneath the screen and provides much cleaner water above to reuse on your vehicle's paintwork.

AUTOMATIC SELF-LOCKING: Simply push the Dirt Lock inside almost any 3–8 gallon round wash bucket and it will automatically adjust itself for the perfect fit. The Dirt Lock is molded from a special plastic resin that sinks like an anchor in the bucket.

THE ULTIMATE SCRATCH-PROTECTION: It's locked and loaded with every detail possible to ensure your vehicle's finish is maintained to the highest standards.`,
    price: 24.99,
    originalPrice: null,
    category: 'Detailing-Accessories',
    image: dirtLockBlackWhite,
    images: [
      dirtLockBlackWhite,
      dirtLockBlack,
      dirtLockBlue,
      dirtLockRed,
      dirtLockYellow,
    ],
    features: [
      'KEEPS DIRT AT THE BOTTOM: Directional channels trap grit and debris below the insert so your wash mitt stays in cleaner water, reducing swirl marks and scratches during car washing.',
      'UNIVERSAL BUCKET FIT: Fits most standard 3–8 gallon round buckets (10.2–10.72" base). Flexible rubber tabs create a snug, secure fit for home users and professional detailers.',
      'SELF-LOCKING, STAYS PUT: Simply press into place, no tools needed. Weighted, durable construction keeps the insert locked at the bottom, even during aggressive washing.',
      'ADVANCED DEBRIS FILTRATION: Venturi-style flow pulls dirt underneath the screen with each dunk, continuously filtering wash water without power or accessories.',
      'BUILT FOR PRO DETAILING: Made from premium, high-strength resin for long-term durability. Designed and manufactured in Canada by DETAIL GUARDZ, trusted by detailing professionals worldwide.',
    ],
    compatibility: ['3–8 Gallon Round Pails', 'Standard Wash Buckets', 'Cars', 'Trucks', 'Motorcycles'],
    rating: 4.7,
    reviewCount: 2195,
    inStock: true,
    badge: 'Premium',
    url: "https://www.amazon.com/dp/B07CKLPJZR",
    brand: "DETAIL GUARDZ",
    specifications: {
      brand: "DETAIL GUARDZ",
      material: "Plastic (High-Strength Resin)",
      weight: "490 Grams (1.08 lbs)",
      dimensions: '10.43"L x 10.43"W x 2.56"H',
      capacity: "5 Gallons",
      manufacturer: "DETAIL GUARDZ Canada",
    },
    colorOptions: [
      { name: 'White', value: 'white', image: dirtLockBlackWhite, price: 24.99 },
      { name: 'Blue', value: 'blue', image: dirtLockBlue, price: 24.99 },
      { name: 'Black', value: 'black', image: dirtLockBlack, price: 24.99 },
      { name: 'Red', value: 'red', image: dirtLockRed, price: 24.99 },
      { name: 'Gold', value: 'gold', image: dirtLockYellow, price: 24.99 },
    ],
    videos: {
      main: {
        url: "https://www.youtube.com/embed/jmm-ahVrq4g",
        title: "Dirt Lock: The Ultimate Bucket Filter",
        description: "The original Dirt Lock is the ultimate tool for a swirl-free wash. See how the patented Venturi system traps grit and debris effectively, keeping your wash water clean."
      },
      additional: [
        {
          url: "https://www.youtube.com/embed/M3idQDVaTUY",
          title: "Mastering the 2-Bucket Wash",
          subtitle: "Professional car washing tips"
        }
      ]
    },
    reviews: DEFAULT_REVIEWS,
    ratingBreakdown: [
      { stars: 5, percentage: 74, count: 1624 },
      { stars: 4, percentage: 13, count: 285 },
      { stars: 3, percentage: 6, count: 132 },
      { stars: 2, percentage: 3, count: 66 },
      { stars: 1, percentage: 4, count: 88 },
    ],
    country: null
  },
  {
    id: 'Dirt-Lock-Scrub-Wall',
    name: 'DETAIL GUARDZ Dirt Lock Scrub Wall 180/360 – Washboard Attachment Dirt Lock - Bucket Filter – Vertical Cleaning Tool for Brushes, Mitts (White)',
    slug: 'dirt-lock-scrub-wall',
    description: 'Vertical cleaning extension for the Dirt Lock bucket filter — snaps in instantly, isolates debris behind the screen, and gives mitts & brushes a full 3D scrubbing surface without sacrificing bucket space.',
    longDescription: `DETAIL GUARDZ DIRT LOCK SCRUB WALL 180/360 SYSTEM ATTACHMENT

The Dirt Lock Scrub Wall attachment is a vertical extension of the Dirt Lock's pressurized cleaning power. Simply snap the attachment into your Dirt Lock bucket filter to easily clean your wheel brushes, wash mitts and more without having to sacrifice hardly any bucket space. Simply scrub your wash media on the side of the Scrub Wall. The debris is now behind the scrub wall screen and is pumped and trapped below the filter to provide cleaner, filtered water for reuse. Whether you move your wash media forward, backward, left, right, up or down in the bucket, debris is quickly trapped behind the screen and pumped out of harms way with the Dirt Lock Scrub Wall 180/360 system.

VERTICAL EXTENSION OF THE DIRT LOCK'S PRESSURIZED CLEANING POWER: Simply snap the attachment into your Dirt Lock bucket filter to easily clean your wheel brushes, wash mitts and more without having to sacrifice hardly any bucket space.

ATTACHES INTO DIRT LOCK BUCKET FILTER: The Dirt Lock bucket filter allows you to attach the Scrub Wall 180/360 or any of our other detailing tools when needed. When you're finished, simply detach it!

Each Scrub Wall kit contains 180 degrees of coverage, simply connect two 180 kits together for full 360 degree bucket coverage.

OUR MOST ADVANCED BUCKET FILTERING SYSTEM: With the addition of our scrub wall 180/360 attachment, it takes the product to another level by flushing out your wash mitt and tools more thoroughly, resulting in even cleaner wash media and the ability to cycle the debris even quicker underneath the screen. Proudly Made In Canada.`,
    price: 20.99,
    originalPrice: null,
    category: 'Detailing-Accessories',
    image: scrubWallWhite,
    images: [
      scrubWallWhite,
      scrubWallBlack,
      scrubWallRed,
    ],
    features: [
      'VERTICAL CLEANING BOOST FOR DIRT LOCK FILTERS: Transforms your bucket into a 3D cleaning station. The Scrub Wall extends the Dirt Lock system upward, giving wash mitts and brushes more surface to agitate grime while reducing debris recirculation.',
      'KEEPS WASH WATER CLEANER: Using directional water flow, the Scrub Wall helps isolate contaminants. Dirt is pulled behind the screen and sent below the filter, preventing grime from returning to your mitt or paintwork.',
      '180° EXPANDABLE DESIGN, 360° UPGRADEABLE: Includes one 180-degree wall; connect a second Scrub Wall for full 360-degree wraparound. Maximizes cleaning contact without taking up extra space.',
      'FITS ALL STANDARD ROUND PAILS: Compatible with most 3–8 gallon wash buckets with a base diameter between 10.2–10.72 inches. Maintains full water capacity while improving wash quality.',
      'SNAPS SECURELY INTO BUCKET FILTER BASE: Quickly attaches to the existing Dirt Lock insert without tools. Modular design lets you add or remove the wall as needed.',
    ],
    compatibility: ['Dirt Lock Bucket Filter', '3–8 Gallon Round Pails', 'Wash Mitts', 'Wheel Brushes'],
    rating: 4.5,
    reviewCount: 823,
    inStock: true,
    badge: 'Premium',
    url: "https://www.amazon.com/dp/B09CRX2D31",
    brand: "DETAIL GUARDZ",
    specifications: {
      brand: "DETAIL GUARDZ",
      material: "Plastic (High-Strength Resin)",
      weight: "12.3 ounces",
      dimensions: '12.75"L x 7.5"W x 3"H',
      manufacturer: "DETAIL GUARDZ Canada",
    },
    colorOptions: [
      { name: 'White', value: 'white', image: scrubWallWhite, price: 20.99 },
      { name: 'Black', value: 'black', image: scrubWallBlack, price: 20.99 },
      { name: 'Red', value: 'red', image: scrubWallRed, price: 20.99 },
    ],
    videos: {
      main: {
        url: "https://www.youtube.com/embed/wgR1NE6h6Zk",
        title: "Scrub Wall Insert Guide",
        description: "Maximize your cleaning power with the Scrub Wall. This video shows how to install and use the 180/360 configurations."
      },
      additional: [
        {
          url: "https://www.youtube.com/embed/dgeAFI_K6sI",
          title: "Scrub Wall Teaser",
          subtitle: "Product highlights"
        }
      ]
    },
    reviews: DEFAULT_REVIEWS,
    ratingBreakdown: [
      { stars: 5, percentage: 65, count: 535 },
      { stars: 4, percentage: 17, count: 140 },
      { stars: 3, percentage: 8, count: 66 },
      { stars: 2, percentage: 4, count: 33 },
      { stars: 1, percentage: 6, count: 49 },
    ],
    country: null
  },
  {
    id: 'Dirt-Lock-Scrub-Pump',
    name: 'DETAIL GUARDZ The Dirt Lock Scrub and Pump Attachment for Car Wash Bucket Filter (Black)',
    slug: 'dirt-lock-scrub-pump',
    description: 'Spring-loaded scrub and pump attachment for the Dirt Lock bucket filter — scrubs your mitt while pumping clean water up and cycling debris safely under the screen.',
    longDescription: `DETAIL GUARDZ DIRT LOCK SCRUB AND PUMP SYSTEM

Use the Scrub And Pump attachment for added cleaning power with your Dirt Lock bucket filter. Simply push the attachment into place and use it to scrub wash mitts, brushes, hand applicator pads and more! The Dirt Lock scrub and pump attachment works on a spring loaded system to pump cleaner water up and cycle dirty debris safely underneath the screen and out of harms way. The soft rounded scrubbing ridges allow you to scrub and pump away dirt and grime safely under the screen. This is the ultimate bucket filtering system to further enhance the Dirt Locks cleaning power and help ensure your vehicle is safe from swirl-marks and scratches! Proudly Made In Canada.

PUSH ACTIVATED PUMP: Simply push down on the pump and a heavy stream of cleaner water will blast upward. This allows you to scrub and pump away the debris safely under the Dirt Lock bucket filter.

ATTACHES INTO DIRT LOCK BUCKET FILTER: The Dirt Lock bucket filter allows you to attach the scrub and pump or any of our other detailing tools when needed. When you're finished, simply detach it!

OUR MOST ADVANCED BUCKET FILTERING SYSTEM: The Dirt Lock bucket filter is extremely powerful on its own. With the addition of our scrub and pump attachment, it takes the product to another level by flushing out your wash mitt and tools more thoroughly, resulting in even cleaner wash media and the ability to cycle the debris even quicker underneath the screen with the added pump system.`,
    price: 16.99,
    category: 'Detailing-Accessories',
    image: dirtLockScrubPumpBlack,
    images: [
      dirtLockScrubPumpBlack,
      dirtLockScrubPumpWhite,
    ],
    features: [
      'Use in your wash bucket to clean your mitt as you dunk!',
      'Soft rounded scrubbing ridges allow you to scrub and pump away debris!',
      'Works perfectly with wash mitts, brushes, hand applicators and more!',
      'The ultimate scratch-protection system for your vehicle!',
      'Patented venturi spring design pumps clean water into your wash mitt, brushes, hand applicators and more, then traps the unwanted debris!',
    ],
    compatibility: ['Dirt Lock Bucket Filter', 'Wash Mitts', 'Brushes', 'Hand Applicators'],
    rating: 4.5,
    reviewCount: 235,
    badge: 'Premium',
    inStock: true,
    url: "https://www.amazon.com/DETAIL-GUARDZ-Attachment-Bucket-Filter/dp/B08FTK9PJJ",
    brand: "DETAIL GUARDZ",
    specifications: {
      brand: "DETAIL GUARDZ",
      material: "Plastic (High-Strength Resin)",
      weight: "9.2 ounces",
      dimensions: '7.28"L x 6.5"W x 4.33"H',
      manufacturer: "DETAIL GUARDZ Canada",
    },
    colorOptions: [
      { name: 'White', value: 'white', image: dirtLockScrubPumpWhite, price: 16.99 },
      { name: 'Black', value: 'black', image: dirtLockScrubPumpBlack, price: 16.99 },

    ],
    videos: {
      main: {
        url: "https://www.youtube.com/embed/2S1_ebwMuZs",
        title: "Scrub and Pump Technology",
        description: "Experience the power of filtered water. The Scrub and Pump attachment ensures you are always using the cleanest possible water on your vehicle."
      },
      additional: []
    },
    reviews: DEFAULT_REVIEWS,
    ratingBreakdown: [
      { stars: 5, percentage: 65, count: 153 },
      { stars: 4, percentage: 17, count: 40 },
      { stars: 3, percentage: 9, count: 21 },
      { stars: 2, percentage: 5, count: 12 },
      { stars: 1, percentage: 4, count: 9 },
    ],
    country: null
  },
  {
    id: 'Pad-Washer-System',
    name: 'The Detail Guardz - Dirt Lock Pad Washer System Attachment with Spray Cleaner (Black)',
    slug: 'dirt-lock-pad-washer-attachment',
    description: 'SEMA Award-winning pad washer system that clicks into your Dirt Lock bucket filter — cleans all polishing pads from 1" to 10" safely and gently within seconds using the patented Venturi spring design.',
    longDescription: `DETAIL GUARDZ DIRT LOCK PAD WASHER SYSTEM ATTACHMENT

The Dirt Lock pad washer attachment clicks into your Dirt Lock bucket filter to clean any polishing pads safely and gently within seconds! Clean your foam, wool, microfiber, buffing bonnets and more within the blink of an eye.

HOW TO USE: Simply insert the pad washer attachment into your Dirt Lock bucket filter and place into a bucket with clean water. Attach your dirty pads onto the supplied hook and loop handle and pump up and down on the attachment for about 15-20 seconds. Clean water will blast inside the pad and flush out any unwanted chemicals to create a perfectly clean polishing pad!

WORKS WITH ANY 1" TO 10" PADS: The Dirt Lock pad washer system will quickly and gently clean any polishing pad from 1 inch all the way to 10 inches. This system replicates a gentle hand wash, so it does not tear or damage your polishing pad.

SEMA AWARD WINNING: The Dirt Lock pad washer system works so well it won the SEMA global media awards! Feel confident knowing you are receiving a rigorously tested and proven pad washer system that will last for years!

The Dirt Lock pad washer attachment is made from industrial grade plastic and metal for extreme durability. Proudly Made In Canada.`,
    price: 58.99,
    originalPrice: null,
    category: 'Detailing-Accessories',
    image: padWasherBlackWithCleaner,
    images: [
      padWasherBlackWithCleaner,
      padWasherWhiteWithCleaner,
      padWasherBlack,
      padWasherWhite,
    ],
    features: [
      'Patented venturi spring design pumps clean water into your buffing pads and squeezes out the dirty chemicals several times per second. Dramatically extends the pad life!',
      'Gently cleans polishing pads within 10-15 seconds. Attaches into your Dirt Lock bucket filter (Sold separately).',
      'Includes a storage bracket to neatly hang the kit when finished!',
      'Cleans polishing pads gently and extremely quick! Good for ALL microfiber, foam, wool and other polishing pads from 1-10 inches!',
      'Includes a 650ML bottle of our pad cleaner solution!',
    ],
    compatibility: ['Dirt Lock Bucket Filter', 'All Polishing Pads 1"–10"', 'Foam Pads', 'Wool Pads', 'Microfiber Pads'],
    rating: 3.9,
    reviewCount: 68,
    badge: 'Popular',
    inStock: true,
    url: "https://www.amazon.com/dp/B07VGMKW7S",
    brand: "DETAIL GUARDZ",
    specifications: {
      brand: "DETAIL GUARDZ",
      material: "Industrial Grade Plastic & Metal",
      weight: "3.31 pounds",
      dimensions: '8"L x 8"W x 15"H',
      manufacturer: "DETAIL GUARDZ Canada",
    },
    colorOptions: [
      { name: 'Black + Cleaner', value: 'black-cleaner', image: padWasherBlackWithCleaner, price: 58.99 },
      { name: 'White + Cleaner', value: 'white-cleaner', image: padWasherWhiteWithCleaner, price: 58.99 },
      { name: 'Black', value: 'black', image: padWasherBlack, price: 49.99 },
      { name: 'White', value: 'white', image: padWasherWhite, price: 49.99 },
    ],
    videos: {
      main: {
        url: "https://www.youtube.com/embed/rmmq1jVdY40",
        title: "Detail Guardz Dirt Lock Pad Washer",
        description: "See how the SEMA Award-winning Dirt Lock Pad Washer System cleans your polishing pads safely and gently in seconds."
      },
      additional: []
    },
    reviews: DEFAULT_REVIEWS,
    ratingBreakdown: [
      { stars: 5, percentage: 44, count: 30 },
      { stars: 4, percentage: 16, count: 11 },
      { stars: 3, percentage: 10, count: 7 },
      { stars: 2, percentage: 10, count: 7 },
      { stars: 1, percentage: 20, count: 13 },
    ],
    country: null
  },
  {
    id: 'Hose-Roller-4pk',
    name: 'DETAIL GUARDZ Hose Guide – 4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Yellow)',
    slug: 'hose-roller-4-pack',
    description: 'Tire-mounted hose rollers that slide under your vehicle to prevent hose & cord snags while detailing — universal fit with secure locking grip, 4-pack, made in Canada.',
    longDescription: `DETAIL GUARDZ CAR HOSE GUIDES

Using a set of Detail Guardz is the most efficient way to work around your vehicle without being interrupted by stubborn hose & cord jams. The roller system allows for effortless movements without the need to tug and adjust your equipment. This unique tool has a locking mechanism to instantly grip onto the tire to keep it firmly in place. Quickly slide the Detail Guardz underneath your tires and forget about your hoses and cords getting caught!

LINE GUIDANCE: If a hose or cable slides above the Detail Guardz, it is guided down the rounded tip and back onto the roller. This ensures you are never interrupted!

UNIVERSAL FIT: The Detail Guardz car hose guides will fit just about any size tire!

MADE IN CANADA: Detail Guardz are manufactured in Canada from industrial grade plastic and metal. Each unit is hand checked for the highest standards of quality!

ANTI-JAM: You can have several cables or hoses running at the same time and it will still work perfectly! The 2 rollers are independently spinning and therefore never jam-up!`,
    price: 19.99,
    originalPrice: null,
    category: 'Detailing-Accessories',
    image: hoseRollerBlack,
    images: [
      hoseRollerBlack,
      hoseRollerBlackOld,
      hoseRollerBlue,
      hoseRollerNeon,
      hoseRollerRed,
      hoseRollerYellow,
    ],
    features: [
      'PREVENT HOSE & CORD SNAGS: Slide these tire-mounted rollers under your vehicle and avoid tangled hoses or cords while detailing. The locking mechanism grips tires firmly, allowing smooth movement around wheels.',
      'UNIVERSAL FIT FOR ALL TIRES: Engineered to fit every car, truck, and motorcycle tire, these hose guides ensure full vehicle coverage — ideal for driveways, workshops, and mobile detailing.',
      'FAST SETUP WITH TIRE-LOCK GRIPS: Equipped with secure tire-locking tabs and angled entry design for quick, slip-free placement. Stays firmly under the tire during heavy use.',
      'SPACE-SAVING SNAP STORAGE: Each pack includes four pieces that interlock for neat storage and quick deployment — effortless and organized.',
      'INDUSTRIAL-GRADE DURABILITY: Constructed from robust, high-quality industrial plastic, built to withstand repeated use, outdoor conditions, and heavy equipment without cracking or fading.',
    ],
    compatibility: ['All Cars', 'Trucks', 'Motorcycles', 'All Tire Sizes'],
    rating: 4.6,
    reviewCount: 2777,
    badge: 'Premium',
    inStock: true,
    url: "https://www.amazon.com/dp/B0FHKV4JZT",
    brand: "DETAIL GUARDZ",
    specifications: {
      brand: "DETAIL GUARDZ",
      material: "Industrial Grade Plastic",
      weight: "7.8 ounces",
      dimensions: '13.39"L x 4.53"W x 2.95"H',
      manufacturer: "DETAIL GUARDZ Canada",
    },
    colorOptions: [
      { name: 'Black', value: 'black', image: hoseRollerBlack, price: 19.99 },
      { name: 'Black (Old)', value: 'black-old', image: hoseRollerBlackOld, price: 19.99 },
      { name: 'Blue', value: 'blue', image: hoseRollerBlue, price: 19.99 },
      { name: 'Neon', value: 'neon', image: hoseRollerNeon, price: 19.99 },
      { name: 'Red', value: 'red', image: hoseRollerRed, price: 19.99 },
      { name: 'Yellow', value: 'yellow', image: hoseRollerYellow, price: 19.99 },
    ],
    videos: {
      main: {
        url: "https://www.youtube.com/embed/2S1_ebwMuZs",
        title: "Snag-Free Detailing with Detail Guardz",
        description: "Stop fighting your hose! See how the Detail Guardz Hose Guide keeps your wash flowing smoothly with its anti-jam roller system."
      },
      additional: []
    },
    reviews: DEFAULT_REVIEWS,
    ratingBreakdown: [
      { stars: 5, percentage: 72, count: 2000 },
      { stars: 4, percentage: 14, count: 389 },
      { stars: 3, percentage: 6, count: 167 },
      { stars: 2, percentage: 3, count: 83 },
      { stars: 1, percentage: 5, count: 138 },
    ],
    country: null
  },
  {
    id: 'Dirt-Lock-Pad-Washer-Bundle-Kit',
    name: 'DETAIL GUARDZ The Dirt Lock Pad Washer Bundle Complete Kit (Black) Includes Dirt Lock Bucket Filter',
    slug: 'dirt-lock-pad-washer-bundle-kit',
    description: 'Complete kit including the Dirt Lock bucket filter and the Pad Washer attachment for professional results.',
    longDescription: 'The Detail Guardz Dirt Lock Pad Washer Bundle is the ultimate solution for cleaning your polishing pads. This complete kit includes the world-famous Dirt Lock bucket filter and the specialized Pad Washer attachment. The system uses the pulse technology of the Dirt Lock to deep clean your pads without damage, ensuring they are ready for their next use.',
    price: 45.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/61jDCK8t-1S._AC_SX466_.jpg',
    images: ['https://m.media-amazon.com/images/I/61jDCK8t-1S._AC_SX466_.jpg'],
    features: [
      'Includes Dirt Lock Filter',
      'Deep Cleans Polishing Pads',
      'Pulse Technology',
      'Prevents Pad Damage',
      'Fits Standard 5 Gallon Buckets'
    ],
    compatibility: ['3-8 Gallon Round Pails'],
    rating: 4.6,
    reviewCount: 234,
    badge: 'Premium',
    inStock: true,
    url: "https://www.amazon.com/DETAIL-GUARDZ-Washer-Bundle-Complete/dp/B088WZ9STB?ref_=ast_sto_dp",
    brand: "DETAIL GUARDZ",
    specifications: DEFAULT_SPECIFICATIONS,
    videos: {
      main: {
        url: "https://www.youtube.com/embed/rmmq1jVdY40",
        title: "How To PROPERLY Clean Pads",
        description: "The complete guide to using the Pad Washer system with the Dirt Lock filter."
      },
      additional: []
    },
    reviews: DEFAULT_REVIEWS,
    ratingBreakdown: DEFAULT_RATING_BREAKDOWN,
    country: null
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
