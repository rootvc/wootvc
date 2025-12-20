export interface Product {
  title: string;
  price: number;
  shipping: number;
  condition: string;
  sku: string;
  description: string;
  features: string[];
  warranty?: string;
  image: string;
}

export const currentProduct: Product = {
  title: "Uniden 5.8Ghz 4 Handset Digital Expandable Phone w/Answering Machine",
  price: 49.99,
  shipping: 5,
  condition: "Refurbished",
  sku: "TRU9480-4",
  description: `It's amazing what phones can do these days. Surf the web! Play video! Store 80 kajillion songs! Hit a major-league curveball! Make a bed with perfect hospital corners! Skin a fugu puffer fish without leaving any residual poison in the flesh! But of all the incredible feats of cellphone strength, here's the one we like best: lowering the prices of older, still-perfectly-good cordless landline phones!

The Uniden 5.8Ghz 4 Handset Digital Expandable Phone w/Answering Machine can't accomplish any of the wonders elucidated above. But get this: if you type a certain sequence of numbers on its keypad and hold the handset to your head, you can talk to someone far away.

Not to say it lacks what the paperboys call "extrees". It can also function as an intercom, or as a 2-way radio between handsets. You can choose from a healthy array of ringtones, melodies, or ring types. The 5.8GHz signal won't meddle with your home wireless network. And if four handsets aren't enough, you can add up to six more (not included). This comes in particularly handy if one of your roommates is a Hindu deity.

You know, because of all the extra arms.

Sorry. They can't all be gems.`,
  features: [
    "5.8 Digital Expandable System",
    "10 Handset Expandability (Maximum)",
    "Caller ID/Call Waiting Deluxe",
    "Digital Answering System with Handset Access",
    "Banner Display",
    "Name Each Handset",
    "Handset Speakerphone",
    "Base Duplex Speakerphone",
    "Programmable CID or Memory Locations at Handset/Base",
    "Do Not Disturb (DND)",
    "Conference Calling",
    "DirectLink Technology",
    "2-way Radio Communication",
    "Mute & Hold Features",
    "Store up to 100 Names, Store Up to 2 Numbers per Name, Alphabetical Search, Personalized Ringers, Transfer Single Listing or Entire Phonebook",
    "New Message Waiting Indicator with Alert Tone Option",
    "Intercom or Call Transfer Between Handsets",
    "20 Ringer Options",
    "10 melodies + 10 tones",
    "10 Speed Dial Locations at Base",
    "Trilingual Menu Displays",
    "English / French / Spanish",
    "Room Monitoring",
    "Battery Level and Clock Display",
    "Earpiece and Ringer Volume Control",
    "Ringer Off Option",
    "Find Lost Handset / Paging Key",
    "Headset Compatible",
    "Allows for an optional headset to be connected for convenient hands-free operation.",
    "Wall Mountable",
    "Belt Clip Included",
    "Handset Battery Type: BT-446 NiMH"
  ],
  warranty: "90 days",
  image: "/product-image.jpg" // Place your product image in the public folder
};

