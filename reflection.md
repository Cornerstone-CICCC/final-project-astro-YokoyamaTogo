# Hosted Link
https://dreamy-melba-6f19af.netlify.app/

# Reflection

I chose dynamic product pages with Astro's `[slug].astro` route and `getStaticPaths()`. The route can be generated from the data source instead of writing one page per product.

This approach keeps the site easy to maintain. If a product is added to `products.json`, the catalog class can load it and Astro can generate a matching detail page during the build.

The trade-off is that this project is fully static. Product data only changes when the site is rebuilt.
