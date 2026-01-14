# wootvc
woot! VC

## Configuring drops

Add new products by editing `data/deals.json`. Each product is an object in the `deals` array. Images go in `/public` folder.

### Product Configuration Fields

Each product in `deals.json` requires the following fields:

#### Required Fields

**`date`** (string, required)
- The date when this product becomes available (format: `YYYY-MM-DD`)
- Only deals with dates in the past or today will be shown as the "current drop"
- Example: `"2026-01-13"`

**`title`** (string, required)
- The product name displayed on the main page
- Example: `"Simple Sabotage Field Manual"`

**`heroImageURL`** (string, required)
- Path to the main product image (stored in `/public` folder)
- Must start with `/`
- Example: `"/simple-sabotage.png"`

**`price`** (string, required)
- Product price in dollars (without the $ symbol)
- Example: `"10"` or `"25.99"`

**`shipping`** (string, required)
- Shipping cost. Use `"Free"` for free shipping, or a number for paid shipping
- Example: `"Free"` or `"5"` or `"12.50"`

**`condition`** (string, required)
- Product condition description
- Example: `"New"` or `"Used"` or `"Like New"`

**`products`** (string, required)
- Description of what's included in the purchase
- Example: `"1 Simple Sabotage Field Manual"` or `"1 Book + 1 Sticker"`

**`checkoutUrl`** (string, required)
- Stripe checkout link where customers purchase the product
- Example: `"https://buy.stripe.com/9B600lehRgch3ZAfSZ2ZO00"`

**`productInfoHeader`** (string, required)
- The headline text shown in the "Product Info" tab
- Example: `"Defend your organization against sabotage!"`

**`body1`** (string, required)
- First paragraph of product description (supports HTML)
- This appears before the tweet embed (if present)
- Example: `"The Simple Sabotage Field Manual, created in 1944 by the Office of Strategic Services..."`

**`body2`** (string, required)
- Second paragraph of product description (supports HTML)
- This appears after the tweet embed (if present)
- Example: `"This version has been manually re-typeset from the original..."`

**`productStats`** (string, required)
- Product specifications displayed in the "Product Stats" tab
- Must use HTML `<dl>`, `<dt>`, and `<dd>` tags
- Format: `<dl><dt>Label</dt><dd>Value</dd><dt>Label2</dt><dd>Value2</dd></dl>`
- Example: `"<dl><dt>Weight</dt><dd>56.6g</dd><dt>Dimensions</dt><dd>4.5\" x 7.5\"</dd></dl>"`

**`shareTitle`** (string, required)
- Title used when sharing the product on social media (Open Graph)
- Example: `"Simple Sabotage Manual - Woot! VC by Root VC"`

**`shareDescription`** (string, required)
- Description used when sharing the product on social media (Open Graph)
- Example: `"A professional guide to accomplishing absolutely nothing..."`

**`shareImageURL`** (string, required)
- Path to the image used when sharing on social media (stored in `/public` folder)
- Must start with `/`
- Recommended size: 1200x630px for best results
- Example: `"/simple-sabotage-share.png"`

#### Optional Fields

**`bodyTweetCode`** (string, optional)
- HTML code for a Twitter/X tweet embed
- If provided, the tweet will appear between `body1` and `body2`
- To get the embed code:
  1. Go to https://iframely.com/domains/x-formely-twitter
  2. Paste the tweet URL
  3. Copy the HTML code from the result
- Example: `"<p lang=\"en\" dir=\"ltr\">Tweet text here...</p>&mdash; Username (@handle) <a href=\"...\">Date</a>"`

**`donations`** (string, optional)
- Information about where proceeds are donated (supports HTML)
- If provided, appears after `body2`
- Example: `"All proceeds will be donated to the <a href='https://www.exploratorium.edu/'>Exploratorium</a> in San Francisco."`

### Example Product Configuration

```json
{
  "deals": [
    {
      "date": "2026-01-13",
      "title": "Simple Sabotage Field Manual",
      "heroImageURL": "/simple-sabotage.png",
      "price": "10",
      "shipping": "Free",
      "condition": "New",
      "products": "1 Simple Sabotage Field Manual",
      "checkoutUrl": "https://buy.stripe.com/9B600lehRgch3ZAfSZ2ZO00",
      "productInfoHeader": "Defend your organization against sabotage!",
      "body1": "The Simple Sabotage Field Manual, created in 1944...",
      "body2": "This version has been manually re-typeset...",
      "bodyTweetCode": "<p lang=\"en\" dir=\"ltr\">Tweet content...</p>&mdash; User (@handle) <a href=\"...\">Date</a>",
      "donations": "All proceeds will be donated to the <a href='https://example.com'>Organization</a>.",
      "productStats": "<dl><dt>Weight</dt><dd>56.6g</dd><dt>Dimensions</dt><dd>4.5\" x 7.5\"</dd></dl>",
      "shareTitle": "Simple Sabotage Manual - Woot! VC by Root VC",
      "shareDescription": "A professional guide to accomplishing absolutely nothing...",
      "shareImageURL": "/simple-sabotage-share.png"
    }
  ]
}
```

### Required Image Files

For each product, you'll need to add **2 image files** to the `/public` folder:

1. **Hero Image** (`heroImageURL`)
   - The main product image displayed on the homepage
   - Recommended size: 700x700px or larger (square format works best)
   - File location: `/public/your-product-name.png`
   - Example: `/public/simple-sabotage.png`

2. **Share Image** (`shareImageURL`)
   - The image shown when the product is shared on social media (Twitter, Facebook, etc.)
   - Recommended size: 1200x630px (Open Graph standard)
   - File location: `/public/your-product-name-share.png`
   - Example: `/public/simple-sabotage-share.png`

**How to add images:**
1. Create or download your image files
2. Name them appropriately (e.g., `my-product.png` and `my-product-share.png`)
3. Place both files in the `/public` folder at the root of the project
4. Reference them in your JSON config with paths starting with `/` (e.g., `"/my-product.png"`)

### Setting Up Stripe Checkout

Before adding a product, you need to create a checkout link in Stripe:

1. **Log into Stripe Dashboard**
   - Go to https://dashboard.stripe.com
   - Sign in to your account

2. **Create a Payment Link**
   - Navigate to **Products** in the left sidebar
   - Click **+ Add product** (or select an existing product)
   - Fill in product details:
     - Name: Your product name
     - Description: Optional product description
     - Pricing: Set your price
   - Click **Save product**

3. **Get the Checkout URL**
   - After creating/selecting the product, click **...** (three dots) next to the product
   - Select **Create payment link** or **View payment links**
   - Copy the **Checkout URL** (it will look like: `https://buy.stripe.com/...`)
   - This is what you'll use for the `checkoutUrl` field in your JSON config

**Alternative: Create a Payment Link directly**
- Go to **Payment Links** in the left sidebar
- Click **+ Create payment link**
- Configure your product and pricing
- Copy the generated checkout URL

**Important:** Make sure the price in Stripe matches the `price` field in your JSON config!

### Helpful Tools

* **Twitter/X embed code generator**: https://iframely.com/domains/x-formely-twitter
* **Social share image generator**: https://www.opengraph.xyz

### Important Notes

1. **JSON Formatting**: Make sure your JSON is valid (no trailing commas, proper quotes, etc.)
2. **Image Paths**: All image paths must start with `/` and reference files in the `/public` folder
3. **HTML in Text Fields**: Fields like `body1`, `body2`, `donations`, and `productStats` support HTML. Use single quotes for attributes: `<a href='https://example.com'>link</a>`
4. **Date Logic**: Only deals with dates in the past or today will appear as the "current drop". Future dates won't show until that date arrives.
5. **Multiple Products**: If you have more than 1 product, the "past drops" tab will automatically appear in the navigation.

## Running the app

`npm run dev`
