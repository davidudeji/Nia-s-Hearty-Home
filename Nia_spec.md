# NIA’S HEARTY HOME

## Product, UI/UX Design & Website Development Specification

**Project:** Nia’s Hearty Home E-commerce Platform  
**Tagline:** Curated for the Modern Family.  
**Document Type:** Product Requirements, Design System & Technical Implementation Specification  
**Initial Market:** Lagos, Nigeria  
**Platform:** Responsive E-commerce Website  
**Primary Goal:** Build a trusted online destination where customers can discover, purchase, and receive quality home essentials conveniently.

---

# 1. PROJECT OVERVIEW

## 1.1 About the Business

Nia’s Hearty Home is an online home essentials store focused on helping people create comfortable, organized, and beautiful living spaces.

The business offers thoughtfully curated products that combine functionality, quality, affordability, and modern design.

Its mission is to make every house feel more like home through products that improve everyday family living.

The website must communicate:

- Comfort and warmth.
- Quality and affordability.
- Trust and reliability.
- Convenience and simplicity.
- A modern family-oriented lifestyle.

## 1.2 Project Vision

Build a professional, scalable e-commerce platform that allows customers to:

1. Discover home essentials through an attractive shopping experience.
2. Search, filter, and compare products.
3. View detailed product information and availability.
4. Add products to a shopping cart.
5. Complete orders through online checkout.
6. Pay securely using Paystack.
7. Choose delivery options and provide delivery information.
8. Track their orders.
9. Contact the business through WhatsApp.

The business owner must have an independent administration dashboard to manage the entire store without requiring developer assistance for routine operations.

## 1.3 Business Objectives

- Establish a professional online presence.
- Increase product visibility and sales.
- Simplify order processing and fulfilment.
- Reduce manual inventory management.
- Improve customer communication.
- Build customer trust and repeat purchases.
- Support future expansion across Nigeria.
- Prepare the architecture for future multi-vendor functionality.

---

# 2. PRODUCT CATEGORIES

The store should support the following initial categories:

1. Kitchen & Dining Essentials
2. Home Décor & Accessories
3. Home Organization & Storage
4. Bedroom & Bathroom Essentials
5. Cleaning & Household Accessories
6. Home Improvement & Lifestyle Products

Categories must be dynamically managed from the admin dashboard.

Do not hardcode product categories into the customer-facing interface.

The administrator must be able to create, edit, reorder, activate, deactivate, and delete categories where business rules permit.

---

# 3. TARGET USERS

## 3.1 Customers

People looking for practical, stylish, and affordable home essentials.

Their priorities include:

- Finding relevant products quickly.
- Understanding product prices and specifications.
- Knowing whether an item is available.
- Understanding delivery costs.
- Paying securely.
- Receiving reliable order updates.

## 3.2 Store Administrator

The business owner responsible for managing the store.

The administrator needs to:

- Manage products and categories.
- Monitor stock.
- Process orders.
- Manage payments.
- Configure delivery fees.
- View customer information.
- Review sales performance.
- Manage staff permissions.
- Update website content.

## 3.3 Store Staff

Authorized employees who may assist with:

- Order processing.
- Inventory updates.
- Customer support.
- Delivery management.

Staff permissions must be configurable.

---

# 4. BRAND IDENTITY & VISUAL DIRECTION

## 4.1 Design Concept

**Modern Comfort Living**

The website should feel like entering a thoughtfully curated home essentials store.

The visual experience should be:

- Warm without looking old-fashioned.
- Premium without feeling expensive or inaccessible.
- Minimal without feeling empty.
- Elegant without sacrificing usability.
- Family-oriented without appearing childish.
- Commercially effective without looking overly promotional.

Avoid generic e-commerce templates.

The website should feel like a distinctive retail brand rather than a generic online marketplace.

## 4.2 Brand Colour Palette

Use the following colour system consistently.

| Colour     | Hex     | Usage                                  |
| ---------- | ------- | -------------------------------------- |
| Warm Cream | #F8F5EF | Main background                        |
| Deep Brown | #3B3029 | Primary text                           |
| Terracotta | #B87559 | Primary accent and CTA                 |
| Warm Beige | #E9DFD2 | Secondary surfaces                     |
| White      | #FFFFFF | Product surfaces and contrast          |
| Muted Sage | #89917C | Secondary accent and subtle highlights |

### Colour Distribution

- 60% cream and white.
- 30% brown and beige.
- 10% terracotta and sage.

Do not use gradients as a default visual treatment.

Maintain strong text contrast and accessible button states.

## 4.3 Typography

Use:

- **Playfair Display:** Main headings and editorial brand statements.
- **Manrope:** Body text, navigation, forms, product information, and interface elements.

Suggested typography scale:

| Element         | Desktop | Mobile  |
| --------------- | ------- | ------- |
| Hero heading    | 64–76px | 38–46px |
| Section heading | 38–44px | 28–34px |
| Product name    | 16–19px | 14–17px |
| Body text       | 15–17px | 14–16px |
| Navigation      | 14–15px | 14–16px |

Use appropriate line height, letter spacing, and font weights.

Avoid excessive font variations.

## 4.4 Logo Requirements

Use the approved Nia’s Hearty Home logo.

The logo concept should communicate:

- The letter N.
- A house structure.
- A heart representing warmth and family.

Prepare the following variations:

- Primary logo.
- Horizontal logo.
- Icon-only logo.
- Favicon.
- Light-background version.
- Dark-background version.

Do not distort the logo or introduce alternative symbols without approval.

---

# 5. INFORMATION ARCHITECTURE

## 5.1 Customer-Facing Pages

Build the following pages:

1. Home
2. Shop
3. Category Listing
4. Product Details
5. Search Results
6. Shopping Cart
7. Checkout
8. Order Confirmation
9. Order Tracking
10. About Us
11. Contact Us
12. Frequently Asked Questions
13. Customer Account
14. Login and Registration
15. Privacy Policy
16. Terms and Conditions
17. Shipping and Returns Policy

## 5.2 Admin Dashboard

Build the following administration modules:

1. Dashboard Overview
2. Products
3. Categories
4. Inventory
5. Orders
6. Customers
7. Payments
8. Deliveries
9. Discounts and Coupons
10. Reviews
11. Analytics and Reports
12. Chatbot Management
13. Website Content Management
14. Staff and Permissions
15. Store Settings

Design the architecture to support a future Vendors module, but do not build a full marketplace in the initial release.

---

# 6. WEBSITE DESIGN SPECIFICATION

## 6.1 Global Navigation

Create a clean and elegant navigation system.

### Announcement Bar

A slim announcement bar above the main navigation.

It should support configurable messages such as:

- Welcome to Nia’s Hearty Home.
- Shop quality home essentials with ease.
- Delivery information and promotional announcements.

The administrator must be able to update the message.

### Main Navigation

Desktop layout:

- Logo on the left.
- Home.
- Shop.
- Categories.
- About.
- Contact.
- Search icon.
- Account icon.
- Shopping cart icon.

The Shop and Categories items should support dropdown or mega-menu navigation.

The cart icon must display a live item count.

### Mobile Navigation

Implement:

- Compact header.
- Logo.
- Cart icon.
- Menu button.
- Slide-in navigation drawer.

Ensure navigation is usable on small screens.

---

# 7. HOMEPAGE DESIGN

The homepage must communicate the brand, showcase products, and guide customers towards purchasing.

## 7.1 Hero Section

### Main Heading

**Make Every House Feel More Like Home.**

Supporting text:

Discover thoughtfully selected essentials that bring comfort, beauty, and convenience into your everyday living.

Primary CTA: **Shop Collection**

Secondary CTA: **Discover Our Story**

### Layout

Desktop:

- Text content on the left.
- Large lifestyle or interior product image on the right.
- Balanced whitespace.
- Warm neutral background.

Mobile:

- Heading and supporting text first.
- CTA buttons below.
- Lifestyle image underneath.

Use high-quality, authentic home lifestyle photography.

The image should communicate comfort, organization, and contemporary family living.

Do not use generic corporate stock photography.

## 7.2 Hero Animation

Use Framer Motion.

Implement a subtle entrance sequence:

1. Main headline slides into position with a smooth reveal.
2. Supporting text appears shortly afterward.
3. CTA buttons fade and move into view.
4. Hero image slides in from the right.

Animation should feel elegant and controlled.

Avoid exaggerated movement, excessive bounce, or distracting effects.

## 7.3 Category Discovery

Section heading:

**Explore Our Collections**

Supporting text:

Everything you need to make your space more comfortable, organized, and beautiful.

Display the six product categories using attractive imagery.

Each category item should contain:

- Category image.
- Category name.
- Optional short description.
- Link to the relevant category page.

Use a balanced editorial image grid.

Do not force every category into identical cards if a more attractive image layout is possible.

## 7.4 Featured Products

Section heading:

**Thoughtfully Chosen for Your Home**

Display selected products.

Each product item must support:

- Product image.
- Product name.
- Current price in NGN.
- Original price where applicable.
- Discount label where applicable.
- Stock availability.
- Wishlist action.
- Add-to-cart action.
- Product details link.

Use real product information from the database.

Do not invent prices, discounts, stock counts, or product reviews.

Include a CTA to explore the full collection.

## 7.5 Brand Story Section

Heading:

**A Little More Comfort. A Lot More Home.**

Supporting content:

At Nia’s Hearty Home, we believe the little things make a house feel special. From practical everyday essentials to thoughtful finishing touches, we bring together products that make your space more comfortable, organized, and welcoming.

CTA: **Our Story**

Use an editorial layout with lifestyle photography.

## 7.6 Promotional Section

Create a flexible promotional area for:

- Seasonal collections.
- New arrivals.
- Special offers.
- Featured categories.
- Limited-time campaigns.

The administrator must be able to update the content, image, CTA, and visibility.

Do not hardcode promotional campaigns.

## 7.7 Why Choose Us

Heading:

**The Little Things That Make Shopping Better**

Display four benefits:

1. Quality Selection
2. Affordable Living
3. Convenient Delivery
4. Customer Care

Use simple typography and subtle visual elements.

Avoid unnecessary decorative icons.

## 7.8 Testimonials

Display customer reviews only when genuine and approved.

Each testimonial may include:

- Customer name or approved display name.
- Review content.
- Rating.
- Product reference where applicable.

Do not create fake testimonials.

## 7.9 Newsletter

Heading:

**A Little More Home in Your Inbox**

Allow customers to subscribe to store updates, product launches, and promotions.

Include:

- Email input.
- Subscribe button.
- Validation.
- Success and error states.
- Consent and privacy information.

## 7.10 Footer

Organize the footer into:

**Brand**

- Logo.
- Short brand statement.
- Social media links.

**Shop**

- All Products.
- Kitchen & Dining.
- Home Décor.
- Organization & Storage.
- Bedroom & Bathroom.

**Customer Care**

- Contact Us.
- FAQs.
- Delivery Information.
- Returns Policy.
- Track Order.

**Connect**

- WhatsApp.
- Instagram.
- Facebook.
- Email, if configured.

Include copyright information and legal links.

All contact information and social links must be configurable from the admin dashboard.

---

# 8. SHOP PAGE

Build a professional product discovery experience.

## 8.1 Page Header

Display:

- Breadcrumb navigation.
- Page title.
- Short description.
- Number of available products.

## 8.2 Product Filters

Support:

- Category.
- Minimum and maximum price.
- Availability.
- Product attributes where applicable.

Filters must work with real backend data.

## 8.3 Sorting

Provide:

- Featured.
- Newest.
- Price: Low to High.
- Price: High to Low.

## 8.4 Product Grid

Desktop:

- Four columns where screen width permits.

Tablet:

- Two or three columns depending on available width.

Mobile:

- Two columns.

Each product item should have consistent image proportions, clear product names, readable prices, and accessible actions.

## 8.5 Empty and Loading States

Implement:

- Product loading skeletons.
- No products found.
- No matching filter results.
- Product image fallback.
- API error state.

Do not leave empty white spaces when a request fails.

---

# 9. PRODUCT DETAILS PAGE

Every product must have a dedicated URL.

Example:

`/products/product-slug`

The product page must include:

- Product image gallery.
- Product name.
- Current price.
- Original price, if discounted.
- Product description.
- Product specifications.
- Product variants where applicable.
- Stock availability.
- Quantity selector.
- Add-to-cart button.
- Wishlist action.
- WhatsApp enquiry button.
- Delivery information.
- Returns information.
- Customer reviews.
- Related products.

## 9.1 Product Images

Support:

- Multiple images.
- Main image selection.
- Thumbnail navigation.
- Image zoom.
- Responsive image sizing.

## 9.2 Stock Availability

Display accurate stock states:

- In Stock.
- Low Stock.
- Out of Stock.

Stock indicators must be generated from backend inventory.

Never allow customers to purchase quantities exceeding available stock.

## 9.3 WhatsApp Product Enquiry

Allow customers to enquire about a specific product through WhatsApp.

The generated message should include:

- Product name.
- Product URL.
- Product variant, if applicable.
- Customer enquiry prompt.

Use the configured official business WhatsApp number.

---

# 10. SHOPPING CART

Create a functional cart experience.

Customers must be able to:

- Add products.
- Remove products.
- Increase quantities.
- Decrease quantities.
- View product images.
- View selected variants.
- See item prices.
- View subtotal.
- Apply valid coupons.
- View estimated delivery charges where available.
- View total amount.

The cart must update immediately after changes.

Validate stock and product prices again on the server during checkout.

Persist the cart for authenticated customers.

For guest customers, use an appropriate secure persistence mechanism and avoid trusting client-provided prices.

## 10.1 Empty Cart

Display a helpful empty-cart state with a CTA to continue shopping.

---

# 11. CHECKOUT EXPERIENCE

Checkout must be simple, clear, and mobile-friendly.

Avoid unnecessary steps.

## 11.1 Customer Information

Collect:

- Full name.
- Email address.
- Phone number.

## 11.2 Delivery Information

Collect:

- State.
- City or LGA.
- Street address.
- Landmark.
- Additional delivery instructions.

Support Lagos delivery zones initially.

Prepare the delivery configuration to support additional Nigerian states later.

## 11.3 Delivery Options

Display available delivery options based on the customer's location.

Show:

- Delivery method.
- Delivery fee.
- Estimated delivery time, where configured.

Do not invent delivery fees or estimated delivery times.

## 11.4 Payment Methods

Support:

1. Paystack online payment.
2. WhatsApp-assisted ordering.

Paystack must be the primary online payment integration.

## 11.5 Order Summary

Show:

- Products.
- Quantities.
- Item totals.
- Subtotal.
- Discounts.
- Delivery fee.
- Final total.

All totals must be recalculated and validated by the backend.

## 11.6 Checkout States

Implement:

- Initial state.
- Validation errors.
- Processing state.
- Payment redirect or authorization.
- Payment success.
- Payment failure.
- Cancelled payment.
- Retry payment.

Prevent duplicate submissions and duplicate orders.

---

# 12. PAYSTACK INTEGRATION

Implement Paystack securely.

### Payment Flow

1. Customer submits checkout.
2. Backend validates products, prices, stock, and delivery fee.
3. Backend creates a pending order.
4. Backend initializes Paystack payment.
5. Customer completes payment through Paystack.
6. Paystack redirects the customer.
7. Backend verifies the transaction independently.
8. Paystack webhook is validated.
9. Order payment status is updated.
10. Inventory and fulfilment workflows are updated safely.
11. Customer receives confirmation.

### Security Requirements

- Never expose Paystack secret keys in frontend code.
- Initialize payments on the backend.
- Verify payment references server-side.
- Verify webhook signatures.
- Use idempotency controls.
- Prevent duplicate payment processing.
- Record transaction references.
- Handle failed, abandoned, reversed, and successful payments.

A redirect to a success page must never be treated as proof of payment.

### Payment Statuses

Support:

- Pending.
- Processing.
- Successful.
- Failed.
- Cancelled.
- Refunded.
- Partially Refunded.

---

# 13. ORDER MANAGEMENT & TRACKING

Customers should receive an order confirmation after successful order placement.

Each order must have a unique order reference.

## 13.1 Order Statuses

Support the following operational statuses:

1. Order Placed.
2. Payment Confirmed.
3. Processing.
4. Ready for Dispatch.
5. Out for Delivery.
6. Delivered.
7. Cancelled.

Payment status and fulfilment status must be stored separately.

Do not treat an unpaid order as paid simply because its fulfilment status changes.

## 13.2 Customer Order Tracking

Provide a tracking page.

Customers should be able to track orders using an authenticated account or a secure order-tracking mechanism.

Display:

- Order reference.
- Order date.
- Products ordered.
- Payment status.
- Fulfilment status.
- Delivery information.
- Timeline of status changes.

Only display tracking information authorized for that customer.

## 13.3 Admin Order Processing

Administrators should be able to:

- View all orders.
- Search orders.
- Filter by date.
- Filter by payment status.
- Filter by fulfilment status.
- View order details.
- Update fulfilment status.
- Add internal notes.
- Record cancellation and refund information.

Record important order status changes in an audit trail.

---

# 14. DELIVERY MANAGEMENT

Create a configurable delivery management module.

## 14.1 Delivery Zones

The administrator should be able to:

- Create delivery zones.
- Assign supported locations.
- Configure delivery fees.
- Configure delivery methods.
- Set estimated delivery windows.
- Activate or deactivate zones.

Start with Lagos.

The architecture should support expansion to other Nigerian states without rewriting checkout.

## 14.2 Delivery Operations

Allow staff to:

- View orders awaiting dispatch.
- Assign delivery information.
- Update delivery status.
- Record dispatch dates.
- Record delivery completion.
- Add delivery notes.

Only display estimated delivery information when it has been configured and is reliable.

---

# 15. ADMIN DASHBOARD

Build a separate, secure admin application area.

Suggested route:

`/admin`

Use a clean dashboard layout with:

- Sidebar navigation.
- Top navigation.
- Page title.
- Search where relevant.
- User profile menu.
- Responsive mobile navigation.

## 15.1 Dashboard Overview

Display real business data:

- Total revenue.
- Total orders.
- Pending orders.
- Completed orders.
- Products in stock.
- Low-stock products.
- Out-of-stock products.
- New customers.
- Recent orders.
- Best-selling products.
- Sales trends.

Revenue must be calculated from verified successful payments, with refunds and reporting rules clearly accounted for.

Do not label revenue as profit.

Profit must only be displayed when cost data and the calculation methodology are available.

## 15.2 Product Management

Administrators must be able to:

- Add products.
- Edit products.
- Delete or archive products.
- Upload multiple images.
- Set product prices.
- Set discounted prices.
- Set product descriptions.
- Assign categories.
- Add product specifications.
- Configure variants.
- Set stock quantities.
- Mark products as featured.
- Publish or unpublish products.

## 15.3 Inventory Management

Provide:

- Current stock.
- Stock adjustment.
- Low-stock alerts.
- Out-of-stock alerts.
- Stock movement history.
- Inventory search.
- Inventory filters.

Every stock adjustment must record:

- Product.
- Quantity change.
- Reason.
- User responsible.
- Timestamp.

Use atomic database transactions for inventory updates.

## 15.4 Customer Management

Display:

- Customer name.
- Email.
- Phone number.
- Registration date.
- Order history.
- Total orders.
- Total verified purchase value.

Protect customer information with appropriate access controls.

## 15.5 Discounts and Coupons

Allow administrators to create:

- Percentage discounts.
- Fixed-amount discounts.
- Product-specific discounts.
- Category-specific discounts.
- Minimum order requirements.
- Start and expiry dates.
- Usage limits.

Validate all coupon rules on the backend.

## 15.6 Content Management

Allow administrators to manage:

- Announcement bar.
- Homepage hero content.
- Hero images.
- Promotional sections.
- Featured products.
- Homepage categories.
- About content.
- Contact details.
- Social links.
- Store policies.

Routine website content changes should not require code changes.

## 15.7 Staff & Permissions

Support roles such as:

- Owner.
- Administrator.
- Inventory Manager.
- Order Manager.
- Customer Support.

Implement role-based access control on the backend.

Hiding a button in the frontend is not sufficient authorization.

---

# 16. CHATBOT & CUSTOMER SUPPORT

Implement a customer support chatbot.

The chatbot should help customers with:

- Product discovery.
- Product prices.
- Product availability.
- Product information.
- Delivery information.
- Payment methods.
- Order tracking.
- Returns and refunds.
- Frequently asked questions.

## 16.1 Data Accuracy

The chatbot must use approved store information and actual backend data.

It must never invent:

- Product prices.
- Stock availability.
- Delivery fees.
- Delivery dates.
- Payment confirmation.
- Order status.
- Refund approval.

When information is unavailable, the chatbot should clearly say so and offer human support.

## 16.2 Product Discovery

Customers should be able to ask questions such as:

- Do you have kitchen organizers?
- What storage products are available?
- Show me products below ₦20,000.
- Is this product available?
- What is the price of this item?

The chatbot should return actual matching products from the catalogue.

## 16.3 Order Tracking

Require an appropriate secure verification process before showing private order information.

Never expose another customer's order details.

## 16.4 WhatsApp Handoff

Provide a clear option to continue the conversation through WhatsApp.

Include the relevant context in the generated message where appropriate, without exposing sensitive information.

## 16.5 Admin Chatbot Management

Allow administrators to:

- Add and edit FAQs.
- Manage approved answers.
- Update business policies.
- Review chatbot conversations where permitted.
- Configure human support contact details.

---

# 17. WHATSAPP INTEGRATION

WhatsApp should be available throughout the customer experience.

Implement:

- Floating WhatsApp contact button.
- Product-specific enquiries.
- General customer support.
- WhatsApp-assisted ordering.
- Order enquiry links.

Use the official business number configured by the administrator.

Generate properly encoded WhatsApp messages.

Do not hardcode different WhatsApp numbers across components.

---

# 18. DATABASE & DOMAIN MODEL

Use PostgreSQL with Prisma ORM.

Design a normalized relational database.

Recommended entities:

### Identity and Access

- User
- Role
- Permission
- UserRole

### Customer

- Customer
- Address

### Catalogue

- Product
- ProductImage
- Category
- ProductCategory
- ProductVariant
- ProductAttribute

### Inventory

- Inventory
- StockMovement
- InventoryReservation

### Shopping

- Cart
- CartItem
- Wishlist
- WishlistItem

### Orders

- Order
- OrderItem
- OrderStatusHistory

### Payments

- Payment
- PaymentEvent
- Refund

### Delivery

- DeliveryZone
- DeliveryOption
- Shipment

### Marketing

- Coupon
- CouponUsage
- Review
- NewsletterSubscriber

### Content and Support

- StoreSettings
- HomepageSection
- ChatbotFAQ
- ChatConversation
- Notification

### Administration

- AuditLog

### Future Marketplace Readiness

- Vendor

The Vendor model may be prepared for future use, but full vendor onboarding, commissions, settlements, and marketplace order splitting are outside the MVP scope.

## 18.1 Important Data Rules

- Store money using integer minor units or a consistent decimal monetary representation. Never use floating-point arithmetic for financial calculations.
- Store currency explicitly as NGN.
- Preserve product name, SKU, variant, and unit price snapshots in order items.
- Preserve delivery fee and address snapshots on orders.
- Maintain payment transaction references.
- Use database constraints and transactions for critical operations.
- Use timestamps consistently.
- Define appropriate indexes for common searches and reporting.
- Use soft deletion or archival where historical records must remain available.

---

# 19. BUSINESS LOGIC & CRITICAL WORKFLOWS

## 19.1 Inventory Integrity

Prevent overselling.

Inventory must be validated and reserved or deducted through safe transactional operations.

Define reservation expiry and release rules.

If payment fails or expires, release reserved inventory according to the configured policy.

Do not decrement inventory twice when payment callbacks and webhooks both arrive.

## 19.2 Order Integrity

An order must preserve the exact product and price information agreed upon at checkout.

Later product price changes must not alter historical orders.

## 19.3 Payment Integrity

Payment processing must be idempotent.

Repeated webhook delivery must not create duplicate payments, stock deductions, or fulfilment actions.

## 19.4 Cancellation and Refunds

Define what happens when:

- A customer cancels before payment.
- A customer cancels after payment.
- An administrator cancels an order.
- A payment succeeds but fulfilment cannot proceed.
- A refund is requested.
- A partial refund is approved.

Record all important financial events.

## 19.5 Operational Failure Recovery

Handle the situation where:

- Payment succeeds but the website cannot update the order immediately.
- A webhook arrives before the customer returns from Paystack.
- The customer closes the browser during checkout.
- An API request times out.
- Stock changes while checkout is in progress.

Use persistent payment events, retryable background processing where necessary, and reconciliation procedures.

---

# 20. TECHNICAL ARCHITECTURE

## 20.1 Recommended Stack

### Frontend

- Next.js.
- TypeScript.
- Tailwind CSS.
- shadcn/ui.
- Framer Motion.
- Lucide icons.

### Backend

- Next.js server-side application and API endpoints, or a separately deployable Node.js API where justified.
- TypeScript.
- Zod validation.
- Prisma ORM.

### Database

- PostgreSQL.

### Authentication

Use a secure authentication solution appropriate for the selected Next.js architecture.

Support customer authentication and administrative roles.

### Payment

- Paystack.

### AI and Chatbot

Use an AI provider through secure backend endpoints.

The AI must retrieve current product and order information through controlled application services.

### Media Storage

Use reliable cloud image storage.

Optimize product images and generate responsive image sizes.

### Deployment

- Vercel or an equivalent production hosting platform.
- Managed PostgreSQL.
- Secure environment variable management.

Choose services based on cost, reliability, maintainability, and expected traffic.

## 20.2 Architecture Principles

- Separation of concerns.
- Reusable components.
- Strong TypeScript types.
- Server-side validation.
- Clear domain boundaries.
- Secure API design.
- Consistent error handling.
- Testable business logic.
- Maintainable folder structure.
- Avoid unnecessary abstraction.
- Avoid duplicating business rules across frontend and backend.

Do not place payment, stock, pricing, or authorization rules exclusively in client-side code.

## 20.3 Suggested Application Structure

Organize the project by feature or domain.

Example:

```text
src/
  app/
    (store)/
      page.tsx
      shop/
      categories/
      products/
      cart/
      checkout/
      orders/
      about/
      contact/

    admin/
      dashboard/
      products/
      categories/
      inventory/
      orders/
      customers/
      payments/
      deliveries/
      analytics/
      settings/

    api/

  components/
    ui/
    layout/
    navigation/
    products/
    cart/
    checkout/
    admin/

  features/
    authentication/
    catalogue/
    inventory/
    shopping/
    orders/
    payments/
    delivery/
    chatbot/
    analytics/

  lib/
    auth/
    database/
    payments/
    validation/
    security/
    utilities/

  server/
    services/
    repositories/

  types/
  config/
  styles/

prisma/
  schema.prisma

tests/
  unit/
  integration/
  e2e/
```

Adapt the structure to the actual framework conventions without creating unnecessary layers.

---

# 21. API REQUIREMENTS

Create well-structured endpoints or server actions for:

### Authentication

- Register.
- Login.
- Logout.
- Current user.
- Password recovery.

### Catalogue

- List products.
- Get product details.
- Search products.
- Filter products.
- List categories.
- Get category products.

### Cart

- Get cart.
- Add item.
- Update quantity.
- Remove item.

### Checkout and Orders

- Validate checkout.
- Create order.
- Get order details.
- List customer orders.
- Track order.
- Cancel order where permitted.

### Payments

- Initialize payment.
- Verify payment.
- Handle Paystack webhook.
- Request or record refund.

### Admin

- Manage products.
- Manage categories.
- Manage stock.
- Manage orders.
- Manage delivery zones.
- Manage customers.
- View analytics.
- Manage staff.
- Manage content.

### Chatbot

- Submit customer question.
- Retrieve relevant products.
- Retrieve approved FAQs.
- Retrieve authorized order status.

Validate every incoming request and enforce authorization on the server.

Document API contracts using OpenAPI where practical.

---

# 22. SECURITY REQUIREMENTS

Implement security from the beginning.

Requirements:

- HTTPS.
- Secure authentication.
- Role-based authorization.
- Server-side input validation.
- Secure password handling.
- Rate limiting.
- Protection against SQL injection.
- Protection against cross-site scripting.
- CSRF protection where applicable.
- Secure cookie configuration.
- Secure file uploads.
- File type and size validation.
- Paystack webhook signature verification.
- Environment variable protection.
- Audit logs.
- Database backups.
- Appropriate personal data access controls.

Follow OWASP guidance.

Do not store raw card details.

Do not expose secret keys or internal customer information in client responses or logs.

---

# 23. RESPONSIVE DESIGN

The website must work across:

- 360px mobile.
- 390px mobile.
- 430px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.
- 1920px large desktop.

Mobile is a priority.

Ensure:

- No horizontal overflow.
- Comfortable touch targets.
- Readable typography.
- Proper image cropping.
- Responsive navigation.
- Usable filters.
- Simple checkout.
- Accessible forms.
- Appropriate spacing.

Do not simply shrink the desktop layout.

Design mobile layouts intentionally.

---

# 24. ANIMATION & INTERACTION

Use Framer Motion selectively.

Recommended animations:

- Hero content reveal.
- Scroll-triggered section entrances.
- Subtle image transitions.
- Navigation dropdown transitions.
- Mobile menu transitions.
- Cart drawer.
- Add-to-cart feedback.
- Chatbot open and close.
- Product image transitions.

Animation principles:

- Smooth and natural.
- Short and purposeful.
- Consistent easing.
- No unnecessary bouncing.
- No animation that blocks checkout.
- Respect `prefers-reduced-motion`.

Use CSS for simple transitions when Framer Motion is unnecessary.

---

# 25. ACCESSIBILITY

Target WCAG 2.2 AA.

Implement:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Appropriate form labels.
- Accessible buttons.
- Meaningful image alt text.
- Sufficient contrast.
- Screen-reader-friendly feedback.
- Accessible modal and drawer behavior.
- Reduced-motion support.

Do not use colour as the only indicator of product status or form errors.

---

# 26. SEO & PERFORMANCE

## SEO

Implement:

- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- XML sitemap.
- Robots.txt.
- Open Graph metadata.
- Product structured data.
- Organization structured data.
- Breadcrumb structured data where appropriate.
- Clean product URLs.

Products should have shareable URLs.

## Performance

Implement:

- Optimized image formats.
- Responsive image sizes.
- Lazy loading below the fold.
- Appropriate caching.
- Efficient database queries.
- Pagination for large catalogues.
- Minimal unnecessary JavaScript.
- Loading skeletons.
- Avoidance of layout shifts.

Use Lighthouse to measure performance, accessibility, SEO, and best practices.

---

# 27. ANALYTICS & REPORTING

The admin dashboard should provide actionable business insights.

Track:

- Total orders.
- Verified sales revenue.
- Average order value.
- Best-selling products.
- Low-stock products.
- Category performance.
- New customers.
- Returning customers.
- Order cancellation rate.
- Payment failure rate.
- Delivery completion rate.

Provide date filters.

Distinguish clearly between:

- Orders placed.
- Paid orders.
- Refunded orders.
- Delivered orders.
- Revenue.
- Profit.

Never present estimated or incomplete data as verified financial results.

---

# 28. TESTING & QUALITY ASSURANCE

Use automated and manual testing.

Recommended tools:

- Vitest or Jest for unit tests.
- Playwright for end-to-end tests.
- Postman for API testing.
- Paystack test environment.
- Lighthouse for performance and accessibility.
- OWASP ZAP or equivalent security testing where appropriate.

## Critical Test Scenarios

### Catalogue

- Products load correctly.
- Search returns relevant results.
- Filters work.
- Sorting works.
- Unpublished products are not publicly accessible.

### Cart

- Items can be added and removed.
- Quantity updates correctly.
- Invalid quantities are rejected.
- Price changes are recalculated.
- Out-of-stock products cannot be purchased.

### Checkout

- Required fields are validated.
- Delivery fee is calculated correctly.
- Total is calculated on the server.
- Duplicate submissions are prevented.

### Payments

- Successful payments are verified.
- Failed payments are handled.
- Duplicate webhooks do not duplicate processing.
- Invalid webhook signatures are rejected.
- Abandoned payments can be reconciled.

### Inventory

- Stock cannot become negative.
- Concurrent purchases cannot oversell stock.
- Failed or expired reservations are released correctly.

### Admin

- Unauthorized users cannot access admin endpoints.
- Staff permissions are enforced.
- Product and stock updates are recorded.
- Historical orders remain accurate.

### Chatbot

- Answers reflect current catalogue data.
- It does not invent prices or availability.
- It cannot expose unauthorized order information.
- It can hand off to WhatsApp.

---

# 29. BUSINESS DISCOVERY & VALIDATION

Before finalizing implementation, collect and validate real business information.

Required source materials:

- Product catalogue.
- Product images.
- Supplier prices.
- Retail prices.
- Stock records.
- Product variants.
- Delivery price list.
- Supported delivery locations.
- Payment and refund policies.
- Returns policy.
- Customer enquiries.
- Existing order records, if available.
- Official contact information.
- Social media accounts.

Do not invent missing business details.

Document unresolved questions as explicit assumptions requiring owner approval.

Validate operational workflows with the business owner before implementing them as fixed business rules.

---

# 30. IMPLEMENTATION PHASES

## Phase 1 — Discovery & Foundation

- Confirm business requirements.
- Validate products and delivery operations.
- Define business rules.
- Establish architecture.
- Create database schema.
- Configure authentication.
- Establish design tokens and reusable components.

**Deliverable:** Approved product and technical foundation.

## Phase 2 — Customer Storefront

- Navigation.
- Homepage.
- Shop page.
- Categories.
- Product details.
- Search and filters.
- Responsive layouts.

**Deliverable:** Functional product discovery experience.

## Phase 3 — Shopping & Checkout

- Cart.
- Checkout.
- Delivery calculation.
- Order creation.
- Paystack integration.
- Order confirmation.

**Deliverable:** End-to-end purchasing workflow.

## Phase 4 — Administration

- Dashboard overview.
- Product management.
- Category management.
- Inventory.
- Orders.
- Customers.
- Delivery management.
- Content management.

**Deliverable:** Independently manageable store.

## Phase 5 — Customer Support

- WhatsApp integration.
- Chatbot.
- FAQs.
- Order tracking.
- Notifications.

**Deliverable:** Integrated customer support experience.

## Phase 6 — Quality & Launch

- Automated testing.
- Security review.
- Performance optimization.
- SEO.
- Production deployment.
- Backup and recovery setup.
- Owner training.

**Deliverable:** Production-ready e-commerce platform.

---

# 31. MVP SCOPE & FUTURE EXPANSION

## MVP — Must Have

- Responsive storefront.
- Product catalogue.
- Categories.
- Search and filtering.
- Product details.
- Shopping cart.
- Checkout.
- Paystack payments.
- WhatsApp ordering and enquiries.
- Order management.
- Inventory management.
- Delivery zones and fees.
- Admin dashboard.
- Customer management.
- Basic analytics.
- Secure authentication.

## Secondary Release

- AI chatbot.
- Customer accounts and order history.
- Reviews and ratings.
- Wishlist.
- Coupons.
- Newsletter.
- Advanced reporting.
- Automated notifications.

## Future Expansion

- Multi-vendor marketplace.
- Vendor dashboards.
- Supplier management.
- Vendor commissions.
- Automated settlements.
- Advanced logistics integrations.
- Nationwide delivery expansion.
- Customer loyalty programme.
- Personalized recommendations.
- Mobile application.

Do not allow future features to complicate the MVP unnecessarily.

---

# 32. ACCEPTANCE CRITERIA

The project is ready for launch when all the following conditions are satisfied:

1. Customers can browse products on mobile and desktop.
2. Products, prices, and availability come from the database.
3. Search, categories, filters, and sorting work correctly.
4. Customers can add products to their cart.
5. Checkout validates customer and delivery information.
6. Delivery fees are calculated using approved business rules.
7. Paystack payments are securely initialized and verified.
8. Duplicate payment events do not duplicate order processing.
9. Inventory remains accurate during concurrent purchases.
10. Customers receive accurate order confirmation.
11. Administrators can manage products without developer assistance.
12. Administrators can update stock and process orders.
13. Delivery statuses can be managed.
14. Administrative permissions are enforced on the backend.
15. The chatbot does not invent business information.
16. WhatsApp links work correctly.
17. The website is responsive and accessible.
18. Critical workflows pass automated tests.
19. Security and production configuration have been reviewed.
20. Backups and recovery procedures are documented.

---

# 33. FINAL INSTRUCTIONS TO THE DEVELOPMENT TEAM / AI BUILDER

Build Nia’s Hearty Home as a distinctive, professional, scalable e-commerce brand.

Do not treat this as a generic online shop template.

The design should combine the warmth of a home lifestyle brand with the clarity and usability of a modern retail platform.

Prioritize:

1. Customer trust.
2. Product discovery.
3. Clear product information.
4. Simple checkout.
5. Reliable payments.
6. Accurate inventory.
7. Efficient store administration.
8. Mobile usability.
9. Maintainable architecture.
10. Future scalability.

### Non-Negotiable Rules

- Do not invent products, prices, discounts, stock, reviews, contact details, or delivery fees.
- Do not hardcode business information that should be editable.
- Do not trust client-side prices or inventory values.
- Do not treat payment redirects as verified payments.
- Do not expose private customer information.
- Do not implement full marketplace functionality in the MVP.
- Do not sacrifice usability for animation.
- Do not add unnecessary cards, gradients, icons, or visual effects.
- Do not create non-functional interface elements.
- Every interactive control must perform its intended action.
- Every important workflow must include loading, success, empty, and error states.
- Keep the visual identity consistent across all pages.

### Expected Final Deliverables

1. Complete responsive e-commerce website.
2. Customer-facing storefront.
3. Secure administration dashboard.
4. Database schema and migrations.
5. Paystack integration.
6. Delivery and order management.
7. WhatsApp integration.
8. Chatbot integration where included in the release scope.
9. Automated tests.
10. Deployment configuration.
11. Environment variable documentation.
12. Setup and installation guide.
13. Admin user guide.
14. Technical documentation.

**The final product should make Nia’s Hearty Home feel like a trusted, established home essentials brand—not simply a website displaying products.**

**END OF SPECIFICATION**
