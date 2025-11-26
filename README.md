# BOATMON enterprises Website

Professional agriculture services website for soil and tissue sampling, amendment recommendations, fertilizer scripts, and agriculture seed sales.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark olive green color scheme
- ✅ All requested pages: Home, Services, Store, Media, About, Calendar, Contact
- ✅ PayPal payment integration (needs configuration)
- ✅ Appointment booking calendar
- ✅ Shopping cart functionality
- ✅ Contact forms
- ✅ Modern, professional UI

## Pages

1. **index.html** - Home page with hero section, services overview, and call-to-action
2. **services.html** - Detailed service offerings (soil sampling, amendments, fertilizer scripts)
3. **store.html** - Seed store with shopping cart and PayPal checkout
4. **media.html** - Photo gallery, videos, resources, and testimonials
5. **about.html** - Company story, mission, values, and why choose us
6. **calendar.html** - Interactive appointment booking calendar
7. **contact.html** - Contact form, business information, and FAQ

## Setup Instructions

### 1. PayPal Integration

To enable PayPal payments, you need to:

1. Create a PayPal Business account at https://www.paypal.com/business
2. Get your PayPal Client ID from the PayPal Developer Dashboard
3. Replace `YOUR_PAYPAL_CLIENT_ID` in `store.html` (line with PayPal SDK script)

```html
<!-- Find this line in store.html and replace YOUR_PAYPAL_CLIENT_ID -->
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>
```

### 2. Update Contact Information

Update the following in `contact.html`:
- Phone number
- Email address
- Physical address
- Business hours

### 3. Customize Content

- Replace placeholder text with your actual business information
- Add real product images to the store
- Add actual photos to the media gallery
- Update service pricing as needed

### 4. Form Backend Integration

Currently, forms show alerts. To make them functional:

- Set up a backend service (PHP, Node.js, etc.)
- Update form submission handlers in:
  - `contact.html` (contact form)
  - `calendar.html` (appointment booking)
  - `store.html` (order processing)

### 5. Map Integration

In `contact.html`, replace the placeholder map div with:
- Google Maps embed
- Mapbox integration
- Or another mapping service

## File Structure

```
Boatmon Website/
├── index.html              # Home page
├── services.html           # Services page
├── store.html              # Store with PayPal
├── media.html              # Media gallery
├── about.html              # About page
├── calendar.html           # Appointment booking
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── Logo.png                # Logo with background
├── Logo No Background.png   # Logo without background
└── README.md               # This file
```

## Color Scheme

- **Dark Olive**: `#3d4a2f` (primary dark)
- **Medium Olive**: `#556b2f` (primary)
- **Light Olive**: `#6b7f4a` (accent)
- **Olive Accent**: `#8b9a6b` (highlights)
- **Cream**: `#f5f5dc` (backgrounds)
- **Cream Light**: `#fafafa` (main background)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development

To run locally:

1. Open `index.html` in a web browser, or
2. Use a local server:
   ```bash
   # Python
   python3 -m http.server 8000
   
   # Node.js
   npx serve
   ```

3. Navigate to `http://localhost:8000`

## Notes

- All forms currently show success alerts. Connect to a backend for actual processing.
- PayPal integration requires a PayPal Business account and Client ID.
- Calendar appointments are stored locally. Connect to a backend for persistence.
- Shopping cart is stored in browser memory. Consider adding backend cart management.

## License

© 2024 BOATMON enterprises. All rights reserved.
