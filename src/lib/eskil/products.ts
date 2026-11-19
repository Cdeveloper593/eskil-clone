export type Product = {
  id: number; slug: string; name: string; price: number; regularPrice: number; salePrice: number | null;
  onSale: boolean; rating: number; reviewCount: number; shortDescription: string; description: string;
  images: string[]; categories: { slug: string; name: string }[]; tags: string[];
  attributes: { name: string; terms: string[] }[]; sku: string; inStock: boolean; type: string;
};

export const PRODUCTS: Product[] = [
 {
  "id": 11974,
  "slug": "steel-construction-fine-wood-retro-chair",
  "name": "Steel Construction & Fine Wood Retro Chair",
  "price": 37066,
  "regularPrice": 37066,
  "salePrice": 37066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/05/shop-65-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "design",
    "name": "Design"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "Color",
    "terms": [
     "Camel",
     "Cherry",
     "Green"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Golden steel"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oakwood, Steel"
    ]
   }
  ],
  "sku": "97",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 11965,
  "slug": "leather-limited-edition-chair-steel-legs-waxed-leather",
  "name": "Leather Limited Edition Chair, Steel legs & waxed leather",
  "price": 61099,
  "regularPrice": 61099,
  "salePrice": 61099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-10-img-1.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-4.jpg",
   "/sites/eskil/2022/03/sohp-10-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "About The Collection",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "2 years warranty",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Installation instructions",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Damage malfunction",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Color",
    "terms": [
     "Camel",
     "Green",
     "Ice Blue"
    ]
   }
  ],
  "sku": "96",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 11957,
  "slug": "vicenterey-lounge-chair",
  "name": "Vicenterey Lounge Chair",
  "price": 47065,
  "regularPrice": 47065,
  "salePrice": 47065,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-41-img-1.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "design",
    "name": "Design"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "About The Collection",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "2 years warranty",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Installation instructions",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Damage malfunction",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Color",
    "terms": [
     "Camel",
     "Cherry",
     "Ice Blue"
    ]
   }
  ],
  "sku": "95",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 11398,
  "slug": "wooden-wall-clock",
  "name": "Wooden Wall Clock",
  "price": 25066,
  "regularPrice": 25066,
  "salePrice": 25066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/05/shop-64-img-1.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "About The Collection",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "2 years warranty",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Installation instructions",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   },
   {
    "name": "Damage malfunction",
    "terms": [
     "Pharetra vel turpis nunc eget lorem dolor sed. Aliquet nec ullamcorper sit amet risus nullam eget felis. Enim tortor at auctor urna nunc id cursus metus. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tortor aliquam nulla facilisi cras. Viverra adipiscing at in tellus."
    ]
   }
  ],
  "sku": "94",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 8336,
  "slug": "andalusia-grey-minimal-statement-chair",
  "name": "Andalusia Grey Minimal Statement Chair",
  "price": 75096,
  "regularPrice": 75096,
  "salePrice": 75096,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-2-img-1.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Cotton"
    ]
   }
  ],
  "sku": "93",
  "inStock": true,
  "type": "external"
 },
 {
  "id": 8334,
  "slug": "rosale-de-ville-rattan-collectors-chair",
  "name": "Rosale De Ville Rattan Collector’s Chair",
  "price": 122066,
  "regularPrice": 122066,
  "salePrice": 122066,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-29-img-1.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Lacquer Wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Steel"
    ]
   }
  ],
  "sku": "92",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 8321,
  "slug": "bangkok-express-dark-rattan-handmade-armchair",
  "name": "Bangkok Express Dark Rattan Handmade Armchair",
  "price": 69089,
  "regularPrice": 69089,
  "salePrice": 69089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-28-img-1.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "White Wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Cotton"
    ]
   }
  ],
  "sku": "91",
  "inStock": false,
  "type": "simple"
 },
 {
  "id": 7591,
  "slug": "hygger-soft-cushion-armchair-grey-cotton-plywood-legs",
  "name": "Hygger Soft Cushion Armchair, grey cotton & plywood legs",
  "price": 76066,
  "regularPrice": 76066,
  "salePrice": 76066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-62-img-01.png",
   "/sites/eskil/2022/04/shop-62-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-62-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-62-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-62-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-62-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood"
    ]
   }
  ],
  "sku": "90",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7585,
  "slug": "steel-construction-fine-wood-retro-chair-black-lacquer",
  "name": "Steel Construction & Fine Wood Retro Chair, black lacquer",
  "price": 34066,
  "regularPrice": 34066,
  "salePrice": 34066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-61-img-01.png",
   "/sites/eskil/2022/04/shop-61-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-61-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Steel"
    ]
   }
  ],
  "sku": "89",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7573,
  "slug": "silha-coffee-table-plywood-tabletop-matte-lacquer-33",
  "name": "Silha Coffee Table, plywood tabletop &matte lacquer, 33″",
  "price": 22066,
  "regularPrice": 22066,
  "salePrice": 22066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-60-img-01.png",
   "/sites/eskil/2022/04/shop-60-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-60-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-60-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-60-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-60-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood"
    ]
   }
  ],
  "sku": "88",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7570,
  "slug": "soft-leather-gunsmoke-brown-statement-chair-steel-legs",
  "name": "Soft Leather Gunsmoke Brown Statement Chair, steel legs",
  "price": 65066,
  "regularPrice": 65066,
  "salePrice": 65066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-59-img-01.png",
   "/sites/eskil/2022/04/shop-59-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-59-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-59-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-59-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-59-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brushed Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather"
    ]
   }
  ],
  "sku": "87",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7547,
  "slug": "loratus-floor-lamp-with-led-light-bulb-solid-ash-acrylic",
  "name": "Loratus Floor Lamp with LED light bulb, solid ash & acrylic",
  "price": 35066,
  "regularPrice": 35066,
  "salePrice": 35066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-58-img-01.png",
   "/sites/eskil/2022/04/shop-58-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-58-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-58-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-58-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-58-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Cotton"
    ]
   }
  ],
  "sku": "86",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7543,
  "slug": "tvorhond-table-lamp-with-led-light-acrylic-painted-steel-gold",
  "name": "Tvorhond Table Lamp with LED light, acrylic painted steel & gold",
  "price": 18045,
  "regularPrice": 18045,
  "salePrice": 18045,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-57-img-01.png",
   "/sites/eskil/2022/04/shop-57-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-57-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-57-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-57-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-57-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel, Acryl"
    ]
   }
  ],
  "sku": "85",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7534,
  "slug": "vedio-chair-gunnared-green-solid-birch-frame-lacquer",
  "name": "Vedio Chair, Gunnared Green, solid birch frame & lacquer",
  "price": 25045,
  "regularPrice": 25045,
  "salePrice": 25045,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-56-img-01.png",
   "/sites/eskil/2022/04/shop-56-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-56-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-56-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-56-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-56-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Emerald"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Brushed cotton, Wood"
    ]
   }
  ],
  "sku": "84",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7522,
  "slug": "snaade-wall-clock-birch-wood-matte-lacquer-dry-finish-11",
  "name": "Snaade Wall Clock, Birch wood, matte lacquer & dry finish 11″",
  "price": 15066,
  "regularPrice": 15066,
  "salePrice": 15066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/shop-55-img-01.png",
   "/sites/eskil/2022/04/shop-55-gallery-1.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-2.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-3.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-4.jpg",
   "/sites/eskil/2022/04/shop-55-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "greysom",
    "name": "Greysom"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 clock"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "2kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Oakwood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood"
    ]
   }
  ],
  "sku": "83",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7513,
  "slug": "beige-gift-card",
  "name": "Beige Gift Card",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/gift-card-9.jpg",
   "/sites/eskil/2022/04/gift-09-gallery-1.jpg",
   "/sites/eskil/2022/04/gift-09-gallery-2.jpg",
   "/sites/eskil/2022/04/gift-09-gallery-3.jpg",
   "/sites/eskil/2022/04/gift-09-gallery-4.jpg",
   "/sites/eskil/2022/04/gift-09-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "82",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7510,
  "slug": "golden-gift-card",
  "name": "Golden Gift Card",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/gift-card-8.jpg",
   "/sites/eskil/2022/04/gift-08-gallery-1.jpg",
   "/sites/eskil/2022/04/gift-08-gallery-2.jpg",
   "/sites/eskil/2022/04/gift-08-gallery-3.jpg",
   "/sites/eskil/2022/04/gift-08-gallery-4.jpg",
   "/sites/eskil/2022/04/gift-08-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "81",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7503,
  "slug": "twin-gift-cards-set",
  "name": "Twin Gift Cards Set",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/gift-card-7.jpg",
   "/sites/eskil/2022/04/gift-07-gallery-1.jpg",
   "/sites/eskil/2022/04/gift-07-gallery-2.jpg",
   "/sites/eskil/2022/04/gift-07-gallery-3.jpg",
   "/sites/eskil/2022/04/gift-07-gallery-4.jpg",
   "/sites/eskil/2022/04/gift-07-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "80",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7498,
  "slug": "special-gift-card",
  "name": "Special Gift Card",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/gift-card-6.jpg",
   "/sites/eskil/2022/04/gift-06-gallery-1.jpg",
   "/sites/eskil/2022/04/gift-06-gallery-2.jpg",
   "/sites/eskil/2022/04/gift-06-gallery-3.jpg",
   "/sites/eskil/2022/04/gift-06-gallery-4.jpg",
   "/sites/eskil/2022/04/gift-06-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Laurtiz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "79",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7495,
  "slug": "multiple-gifts-cards",
  "name": "Multiple Gifts Cards",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/gift-card-5.jpg",
   "/sites/eskil/2022/04/gift-05-gallery-1.jpg",
   "/sites/eskil/2022/04/gift-05-gallery-2.jpg",
   "/sites/eskil/2022/04/gift-05-gallery-3.jpg",
   "/sites/eskil/2022/04/gift-05-gallery-4.jpg",
   "/sites/eskil/2022/04/gift-05-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "78",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 7492,
  "slug": "basic-gift-cards",
  "name": "Basic Gift cards",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/04/gift-card-4.jpg",
   "/sites/eskil/2022/04/gift-04-gallery-1.jpg",
   "/sites/eskil/2022/04/gift-04-gallery-2.jpg",
   "/sites/eskil/2022/04/gift-04-gallery-3.jpg",
   "/sites/eskil/2022/04/gift-04-gallery-4.jpg",
   "/sites/eskil/2022/04/gift-04-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "77",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6649,
  "slug": "basic-gift-card",
  "name": "Basic Gift card",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/gift-card-3.jpg",
   "/sites/eskil/2022/03/gift-03-gallery-1.jpg",
   "/sites/eskil/2022/03/gift-03-gallery-2.jpg",
   "/sites/eskil/2022/03/gift-03-gallery-3.jpg",
   "/sites/eskil/2022/03/gift-03-gallery-4.jpg",
   "/sites/eskil/2022/03/gift-03-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "76",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6644,
  "slug": "selected-items-gift-card",
  "name": "Selected items Gift card",
  "price": 1000,
  "regularPrice": 1000,
  "salePrice": 1000,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/gift-card-2.jpg",
   "/sites/eskil/2022/03/gift-02-gallery-1.jpg",
   "/sites/eskil/2022/03/gift-02-gallery-2.jpg",
   "/sites/eskil/2022/03/gift-02-gallery-3.jpg",
   "/sites/eskil/2022/03/gift-02-gallery-4.jpg",
   "/sites/eskil/2022/03/gift-02-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Acryl"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "75",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6640,
  "slug": "premium-gift-card-in-a-mini-black-envelope",
  "name": "Premium Gift Card In a mini black envelope",
  "price": 1600,
  "regularPrice": 1600,
  "salePrice": 1600,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/gift-card-01.jpg",
   "/sites/eskil/2022/03/gift-01-gallery-01.jpg",
   "/sites/eskil/2022/03/gift-01-gallery-03.jpg",
   "/sites/eskil/2022/03/gift-01-gallery-05.jpg",
   "/sites/eskil/2022/03/gift-01-gallery-02.jpg",
   "/sites/eskil/2022/03/gift-01-gallery-04.jpg"
  ],
  "categories": [
   {
    "slug": "gifts",
    "name": "Gifts"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Abstract"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "1 year"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Esmerus"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 card"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "500gr"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Paper"
    ]
   }
  ],
  "sku": "74",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6635,
  "slug": "desol-modern-cut-chair-leather-cushion-solid-wood",
  "name": "Desol Modern cut Chair, leather cushion & solid wood",
  "price": 66096,
  "regularPrice": 66096,
  "salePrice": 66096,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-6-img-1.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Solid Wood"
    ]
   }
  ],
  "sku": "73",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6633,
  "slug": "soft-grey-minimal-statement-chair-saten-cotton",
  "name": "Soft Grey Minimal Statement Chair, saten cotton",
  "price": 75096,
  "regularPrice": 75096,
  "salePrice": 75096,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-2-img-1.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Oakwood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Soft cotton"
    ]
   }
  ],
  "sku": "72",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6631,
  "slug": "amber-exotique-fine-leather-chair",
  "name": "Amber Exotique Fine Leather Chair",
  "price": 92066,
  "regularPrice": 92066,
  "salePrice": 92066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-10-img-1.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   },
   {
    "slug": "lightning",
    "name": "Lightning"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brushed Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather"
    ]
   }
  ],
  "sku": "71",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6629,
  "slug": "almatraz-de-ville-rattan-collectors-chair",
  "name": "Almatraz De Ville Rattan Collector’s Chair",
  "price": 122066,
  "regularPrice": 122066,
  "salePrice": 122066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-29-img-1.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Vintage"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Matte lacquer"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Rattan"
    ]
   }
  ],
  "sku": "70",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6626,
  "slug": "sonde-matte-nightstand-with-drawer",
  "name": "Sonde Matte Nightstand With Drawer",
  "price": 45066,
  "regularPrice": 45066,
  "salePrice": 45066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-5-img-1.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "lightning",
    "name": "Lightning"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 nightstands"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Oakwood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood"
    ]
   }
  ],
  "sku": "69",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6624,
  "slug": "fine-dark-tinted-leather-collectors-piece-chair",
  "name": "Fine Dark Tinted Leather Collector’s Piece Chair",
  "price": 75099,
  "regularPrice": 75099,
  "salePrice": 75099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-18-img-1.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   },
   {
    "slug": "lightning",
    "name": "Lightning"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brushed Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Tinted Leather"
    ]
   }
  ],
  "sku": "68",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6609,
  "slug": "asian-fusion-noir-rattan-unique-armchair",
  "name": "Asian Fusion Noir Rattan Unique Armchair",
  "price": 85066,
  "regularPrice": 85066,
  "salePrice": 85066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-28-img-1.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige rattan"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Rattan"
    ]
   }
  ],
  "sku": "67",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6607,
  "slug": "morgeby-coffee-table-with-concrete-top-plywood-birch",
  "name": "Morgeby Coffee table With Concrete top, plywood birch",
  "price": 52063,
  "regularPrice": 52063,
  "salePrice": 52063,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-8-img-1.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "lightning",
    "name": "Lightning"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "50kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood birch"
    ]
   }
  ],
  "sku": "66",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6601,
  "slug": "tisbo-dark-ash-sturdy-chair-solid-birch-clear-acrylic",
  "name": "Tisbo Dark Ash Sturdy Chair, solid birch & clear acrylic",
  "price": 42086,
  "regularPrice": 42086,
  "salePrice": 42086,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-1-img-1.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Solid birch"
    ]
   }
  ],
  "sku": "65",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6598,
  "slug": "insomnitus-floor-wooden-lamp-matte-tinted-lacquer",
  "name": "Insomnitus Floor Wooden Lamp, Matte tinted lacquer",
  "price": 28099,
  "regularPrice": 28099,
  "salePrice": 28099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/hover-lamp-02.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "lightning",
    "name": "Lightning"
   },
   {
    "slug": "lamps-pendants",
    "name": "Lamps &amp; Pendants"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Solid wood"
    ]
   }
  ],
  "sku": "64",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6596,
  "slug": "duktig-minimal-chair-solid-birch-tinted-lacquer",
  "name": "Duktig Minimal Chair, Solid birch & Tinted lacquer",
  "price": 26088,
  "regularPrice": 37099,
  "salePrice": 26088,
  "onSale": true,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-7-img-1.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-4.jpg"
  ],
  "categories": [
   {
    "slug": "chairs-stools",
    "name": "Chairs &amp; Stools"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood"
    ]
   }
  ],
  "sku": "63",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6594,
  "slug": "turuput-pendant-lamp-dark-epoxy-painted-chromatica",
  "name": "Turuput Pendant Lamp, Dark Epoxy & painted chromatica",
  "price": 29085,
  "regularPrice": 29085,
  "salePrice": 29085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-4-img-1.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "lightning",
    "name": "Lightning"
   },
   {
    "slug": "lamps-pendants",
    "name": "Lamps &amp; Pendants"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel epoxy"
    ]
   }
  ],
  "sku": "62",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6386,
  "slug": "tystnad-hinna-relaxing-wooden-stool",
  "name": "Tystnad Hinna Relaxing Wooden Stool",
  "price": 39085,
  "regularPrice": 39085,
  "salePrice": 39085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-54-img-1.jpg",
   "/sites/eskil/2022/03/shop-54-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-54-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-54-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-54-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-54-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 stool"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood"
    ]
   }
  ],
  "sku": "61",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6377,
  "slug": "orka-handamade-concrete-candle-holders",
  "name": "Orka Handamade Concrete Candle Holders",
  "price": 38000,
  "regularPrice": 46085,
  "salePrice": 38000,
  "onSale": true,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-53-img-1.jpg",
   "/sites/eskil/2022/03/shop-53-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-53-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-53-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-53-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-53-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "home-decor",
    "name": "Home decor"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "3 vases"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Metal"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Concrete"
    ]
   }
  ],
  "sku": "60",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6365,
  "slug": "plastic-wendy-chair-with-plywood-matte-lacquer",
  "name": "Plastic Wendy Chair with plywood, Matte lacquer",
  "price": 45085,
  "regularPrice": 45085,
  "salePrice": 45085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-52-img-1.jpg",
   "/sites/eskil/2022/03/shop-52-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-52-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-52-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-52-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-52-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "vincent",
    "name": "Vincent"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plastic, Wood"
    ]
   }
  ],
  "sku": "59",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6358,
  "slug": "gift-box-handmade-venus-candle-and-minimal-vase",
  "name": "Gift Box, Handmade venus Candle and Minimal Vase",
  "price": 35085,
  "regularPrice": 35085,
  "salePrice": 35085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-51-img-01.jpg",
   "/sites/eskil/2022/03/shop-51-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-51-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-51-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-51-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-51-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "vincent",
    "name": "Vincent"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 box"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Metal"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Ceramic, Wax"
    ]
   }
  ],
  "sku": "58",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6348,
  "slug": "soft-taupe-minimal-chair",
  "name": "Soft Taupe Minimal Chair",
  "price": 45085,
  "regularPrice": 45085,
  "salePrice": 45085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-50-img-01.jpg",
   "/sites/eskil/2022/03/shop-50-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-50-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-50-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-50-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-50-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "vincent",
    "name": "Vincent"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Grey cotton"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood"
    ]
   }
  ],
  "sku": "57",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 6345,
  "slug": "ceramic-animorph-soft-grey-vase",
  "name": "Ceramic Animorph Soft Grey Vase",
  "price": 23085,
  "regularPrice": 23085,
  "salePrice": 23085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-49-img-01.jpg",
   "/sites/eskil/2022/03/shop-49-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-49-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-49-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-49-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-49-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "vincent",
    "name": "Vincent"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 vase"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "2kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Dark grey"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Ceramic"
    ]
   }
  ],
  "sku": "56",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5077,
  "slug": "hygge-leather-armchair",
  "name": "Hygge Leather Armchair",
  "price": 83085,
  "regularPrice": 83085,
  "salePrice": 83085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-48-img-1.jpg",
   "/sites/eskil/2022/03/shop-48-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-48-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-48-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-48-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-48-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "vincent",
    "name": "Vincent"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Vintage"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Black"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather"
    ]
   }
  ],
  "sku": "55",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5074,
  "slug": "billa-modern-grey-armchair",
  "name": "Billa Modern Grey Armchair",
  "price": 77085,
  "regularPrice": 77085,
  "salePrice": 77085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-47-img-1.jpg",
   "/sites/eskil/2022/03/shop-47-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-47-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-47-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-47-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-47-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "vincent",
    "name": "Vincent"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "30kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Cotton, Wood"
    ]
   }
  ],
  "sku": "54",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5068,
  "slug": "mini-diamond-steel-pendant",
  "name": "Mini Diamond Steel Pendant",
  "price": 27085,
  "regularPrice": 27085,
  "salePrice": 27085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-46-img-1.jpg",
   "/sites/eskil/2022/03/shop-46-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-46-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-46-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-46-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-46-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gino",
    "name": "Gino"
   },
   {
    "slug": "pendants",
    "name": "Pendants"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "53",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5065,
  "slug": "gold-vibes-minimal-pendant",
  "name": "Gold Vibes Minimal Pendant",
  "price": 39085,
  "regularPrice": 39085,
  "salePrice": 39085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-45-img-1.jpg",
   "/sites/eskil/2022/03/shop-45-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-45-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-45-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-45-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-45-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gino",
    "name": "Gino"
   },
   {
    "slug": "pendants",
    "name": "Pendants"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "52",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5062,
  "slug": "steel-gunmetal-statement-pendant",
  "name": "Steel Gunmetal Statement Pendant",
  "price": 29085,
  "regularPrice": 29085,
  "salePrice": 29085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-44-img-1.jpg",
   "/sites/eskil/2022/03/shop-44-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-44-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-44-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-44-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-44-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gino",
    "name": "Gino"
   },
   {
    "slug": "pendants",
    "name": "Pendants"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 pendant"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "51",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5056,
  "slug": "honey-suckle-led-pendant-lamp",
  "name": "Honey Suckle LED Pendant Lamp",
  "price": 36085,
  "regularPrice": 36085,
  "salePrice": 36085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-43-img-1.jpg",
   "/sites/eskil/2022/03/shop-43-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-43-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-43-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-43-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-43-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "gino",
    "name": "Gino"
   },
   {
    "slug": "pendants",
    "name": "Pendants"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "50",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5016,
  "slug": "minimalistic-plywood-coffee-table",
  "name": "Minimalistic Plywood Coffee Table",
  "price": 26085,
  "regularPrice": 26085,
  "salePrice": 26085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-42-img-1.jpg",
   "/sites/eskil/2022/03/shop-42-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-42-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-42-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-42-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-42-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood"
    ]
   }
  ],
  "sku": "49",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5010,
  "slug": "mcenroy-lounge-armchair",
  "name": "McEnroy Lounge Armchair",
  "price": 37085,
  "regularPrice": 37085,
  "salePrice": 37085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-41-img-1.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-41-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Solid Wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather, Steel"
    ]
   }
  ],
  "sku": "48",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 5004,
  "slug": "serene-white-nightstand",
  "name": "Serene White Nightstand",
  "price": 28085,
  "regularPrice": 28085,
  "salePrice": 28085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-40-img-1.jpg",
   "/sites/eskil/2022/03/shop-40-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-40-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-40-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-40-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-40-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 nightstands"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Dark wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood"
    ]
   }
  ],
  "sku": "47",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4997,
  "slug": "stockhold-oakwood-table",
  "name": "Stockhold Oakwood Table",
  "price": 32085,
  "regularPrice": 32085,
  "salePrice": 32085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-39-img-1.jpg",
   "/sites/eskil/2022/03/shop-39-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-39-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-39-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-39-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-39-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oakwood"
    ]
   }
  ],
  "sku": "46",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4862,
  "slug": "art-deco-table-lamp",
  "name": "Art Deco Table Lamp",
  "price": 52085,
  "regularPrice": 52085,
  "salePrice": 52085,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-38-img-1.jpg",
   "/sites/eskil/2022/03/shop-38-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-38-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-38-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-38-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-38-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "45",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4858,
  "slug": "wooden-chair-with-leather-cushion",
  "name": "Wooden Chair With Leather Cushion",
  "price": 32089,
  "regularPrice": 32089,
  "salePrice": 32089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-37-img-1.jpg",
   "/sites/eskil/2022/03/shop-37-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-37-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-37-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-37-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-37-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Laurtiz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, leather"
    ]
   }
  ],
  "sku": "44",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4850,
  "slug": "sisel-comfy-sofa-with-wood",
  "name": "Sisel Comfy Sofa With Wood",
  "price": 142089,
  "regularPrice": 142089,
  "salePrice": 142089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-36-img-01.jpg",
   "/sites/eskil/2022/03/shop-36-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-36-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-36-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-36-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-36-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "johanna",
    "name": "Johanna"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 sofa"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "50kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Gunsmoke"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Cotton, Wood"
    ]
   }
  ],
  "sku": "43",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4773,
  "slug": "massive-full-oak-wood-table",
  "name": "Massive Full Oak Wood Table",
  "price": 170089,
  "regularPrice": 170089,
  "salePrice": 170089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-35-img-01.jpg",
   "/sites/eskil/2022/03/shop-35-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-35-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-35-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-35-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-35-gallery-4.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "home-decor",
    "name": "Home decor"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "50kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber finish"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Full Oak"
    ]
   }
  ],
  "sku": "42",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4770,
  "slug": "finn-loveseat-sofa",
  "name": "Finn Loveseat Sofa",
  "price": 112089,
  "regularPrice": 112089,
  "salePrice": 112089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-34-img-01.jpg",
   "/sites/eskil/2022/03/shop-34-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-34-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-34-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-34-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-34-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "sofas",
    "name": "Sofas"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 sofa"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "30kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Fibre, Wood"
    ]
   }
  ],
  "sku": "41",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4718,
  "slug": "puffed-ribbed-statement-chair",
  "name": "Puffed Ribbed Statement Chair",
  "price": 62089,
  "regularPrice": 62089,
  "salePrice": 62089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-33-img-1.jpg",
   "/sites/eskil/2022/03/shop-33-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-33-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-33-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-33-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-33-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "antonio",
    "name": "Antonio"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Vintage"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Laurtiz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Dark satin"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Satin, Metal"
    ]
   }
  ],
  "sku": "40",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4707,
  "slug": "leather-eclectic-chair",
  "name": "Leather Eclectic Chair",
  "price": 37089,
  "regularPrice": 37089,
  "salePrice": 37089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-32-img-1.jpg",
   "/sites/eskil/2022/03/shop-32-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-32-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-32-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-32-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-32-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "antonio",
    "name": "Antonio"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Laurtiz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brown"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather"
    ]
   }
  ],
  "sku": "39",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4692,
  "slug": "stjarna-wooden-lamp",
  "name": "Stjarna Wooden Lamp",
  "price": 18089,
  "regularPrice": 18089,
  "salePrice": 18089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-31-img-1.jpg",
   "/sites/eskil/2022/03/shop-31-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-31-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-31-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-31-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-31-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "antonio",
    "name": "Antonio"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "2kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oakwood"
    ]
   }
  ],
  "sku": "38",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4673,
  "slug": "koselig-armchair-hillared-emerald",
  "name": "Koselig Armchair Hillared emerald",
  "price": 45089,
  "regularPrice": 45089,
  "salePrice": 45089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-30-img-1.jpg",
   "/sites/eskil/2022/03/shop-30-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-30-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-30-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-30-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-30-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "antonio",
    "name": "Antonio"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Emerald cotton, Wood"
    ]
   }
  ],
  "sku": "37",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4582,
  "slug": "rattan-spider-work-armchair-matte-lacque-steel-legs",
  "name": "Rattan Spider work Armchair, matte lacque & steel legs",
  "price": 49089,
  "regularPrice": 49089,
  "salePrice": 49089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-29-img-1.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-29-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Vintage"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Rattan, Steel"
    ]
   }
  ],
  "sku": "36",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4574,
  "slug": "singapore-dark-rattan-handmade-armchair",
  "name": "Singapore Dark Rattan Handmade Armchair",
  "price": 69089,
  "regularPrice": 69089,
  "salePrice": 69089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-28-img-1.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-28-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Vintage"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Rattan"
    ]
   }
  ],
  "sku": "35",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4516,
  "slug": "statement-leather-retro-chair",
  "name": "Statement Leather Retro Chair",
  "price": 78099,
  "regularPrice": 78099,
  "salePrice": 78099,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-27-img-1.jpg",
   "/sites/eskil/2022/03/chair-two.png",
   "/sites/eskil/2022/03/chair-three.png",
   "/sites/eskil/2022/03/chair-one.png",
   "/sites/eskil/2022/03/shop-27-img-1.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "Color",
    "terms": [
     "Brown",
     "Gray",
     "Green"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brushed Satin"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Powdered Steel, Leather"
    ]
   }
  ],
  "sku": "34-1",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 4503,
  "slug": "cult-70s-armchair-matte-lacquer-fabric",
  "name": "Cult 70’s Armchair, matte lacquer & fabric",
  "price": 61099,
  "regularPrice": 61099,
  "salePrice": 61099,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-26-img-1.jpg",
   "/sites/eskil/2022/03/shop-26-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-26-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-26-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-26-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-26-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "Color",
    "terms": [
     "Gray",
     "Green",
     "Off-white"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oak Wood, Leather"
    ]
   }
  ],
  "sku": "34",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 4493,
  "slug": "exilot-solid-wood-nightstand-modern-bedside-table",
  "name": "Exilot Solid Wood Nightstand, Modern Bedside Table",
  "price": 22099,
  "regularPrice": 22099,
  "salePrice": 22099,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"338\" height=\"317\" src=\"/sites/eskil/2022/03/prikaz-05.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"338\" height=\"317\" src=\"/sites/eskil/2022/03/prikaz-05.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-big-3.jpg",
   "/sites/eskil/2022/03/shop-big-1.jpg",
   "/sites/eskil/2022/03/shop-big-2.jpg",
   "/sites/eskil/2022/03/shop-big-3.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "nightstand",
    "name": "Nightstand"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "5 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Oakwood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood, Oakwood"
    ]
   },
   {
    "name": "Choose material",
    "terms": [
     "Mochagony",
     "Olive Green",
     "Silver Lining"
    ]
   }
  ],
  "sku": "32",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 4468,
  "slug": "mid-century-modern-dsw-side-chair",
  "name": "Mid Century Modern DSW Side Chair",
  "price": 75066,
  "regularPrice": 75066,
  "salePrice": 75066,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-gallery-4.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "steel"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "Variant",
    "terms": [
     "Swing",
     "Thick",
     "Thin"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oak Wood, Plastic"
    ]
   }
  ],
  "sku": "31",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 4351,
  "slug": "vonanda-mid-century-modern-sofa",
  "name": "Vonanda Mid-Century Modern Sofa",
  "price": 142000,
  "regularPrice": 142000,
  "salePrice": 142000,
  "onSale": false,
  "rating": 4.5,
  "reviewCount": 2,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"500\" height=\"292\" src=\"/sites/eskil/2022/03/prikaz-04.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"500\" height=\"292\" src=\"/sites/eskil/2022/03/prikaz-04.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-slider-img-01.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "sofas",
    "name": "Sofas"
   }
  ],
  "tags": [
   "leather",
   "modern"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "Choose material",
    "terms": [
     "Mochagony",
     "Olive Green",
     "Silver Lining"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brushed Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather, Satin"
    ]
   }
  ],
  "sku": "30",
  "inStock": true,
  "type": "variable"
 },
 {
  "id": 4324,
  "slug": "fibre-lounge-chair",
  "name": "Fibre Lounge Chair",
  "price": 42099,
  "regularPrice": 42099,
  "salePrice": 42099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-25-img-1.jpg",
   "/sites/eskil/2022/03/shop-25-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-25-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-25-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-25-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-25-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "steel"
  ],
  "attributes": [
   {
    "name": "STYLE",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "30kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Fibre cotton, Wood"
    ]
   }
  ],
  "sku": "29",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4321,
  "slug": "lanros-farmhouse-vintage-pendant-lighting",
  "name": "Lanros Farmhouse Vintage Pendant Lighting",
  "price": 21589,
  "regularPrice": 26099,
  "salePrice": 21589,
  "onSale": true,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-4-img-1.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "pendants",
    "name": "Pendants"
   }
  ],
  "tags": [
   "modern",
   "steel"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 pendant"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "8kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Lacquer"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Matte Steel"
    ]
   }
  ],
  "sku": "28",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4290,
  "slug": "modern-coffee-table",
  "name": "Modern Coffee Table",
  "price": 19089,
  "regularPrice": 19089,
  "salePrice": 19089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-24-img-1.jpg",
   "/sites/eskil/2022/03/shop-24-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-24-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-24-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-24-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-24-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "flashlight",
    "name": "Flashlight"
   },
   {
    "slug": "pendants",
    "name": "Pendants"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Amber"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oakwood"
    ]
   }
  ],
  "sku": "27",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4282,
  "slug": "vintage-pendant-lamp",
  "name": "Vintage Pendant Lamp",
  "price": 17089,
  "regularPrice": 17089,
  "salePrice": 17089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-23-img-1.jpg",
   "/sites/eskil/2022/03/shop-23-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-23-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-23-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-23-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-23-gallery-4.jpg"
  ],
  "categories": [
   {
    "slug": "pendants",
    "name": "Pendants"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 lamps"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "26",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4257,
  "slug": "living-room-set-of-chair-table-pendant",
  "name": "Living Room Set of Chair, Table & Pendant",
  "price": 17089,
  "regularPrice": 17089,
  "salePrice": 17089,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"483\" height=\"387\" src=\"/sites/eskil/2022/03/prikaz-03.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"483\" height=\"387\" src=\"/sites/eskil/2022/03/prikaz-03.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-22-img-1.jpg",
   "/sites/eskil/2022/03/shop-22-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-22-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-22-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-22-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-22-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Plain Wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Cotton, Steel"
    ]
   }
  ],
  "sku": "25",
  "inStock": true,
  "type": "grouped"
 },
 {
  "id": 4209,
  "slug": "morgon-table-lamp-oak-wood-natural-matte-finish",
  "name": "Morgon Table Lamp, Oak Wood natural matte finish",
  "price": 25089,
  "regularPrice": 25089,
  "salePrice": 25089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-21-img-1.jpg",
   "/sites/eskil/2022/03/shop-21-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-21-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-21-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-21-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-21-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes1"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Gray cotton"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Beige cotton, Wood"
    ]
   }
  ],
  "sku": "21",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4201,
  "slug": "geometric-statement-piece-steel-chair-noir-powder-coating",
  "name": "Geometric Statement Piece Steel Chair, Noir powder coating",
  "price": 65089,
  "regularPrice": 65089,
  "salePrice": 65089,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-20-img-1.jpg",
   "/sites/eskil/2022/03/shop-20-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-20-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-20-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-20-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-20-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "20",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4152,
  "slug": "olive-green-fine-leather-chair-gunmetal-powder-coated-legs",
  "name": "Olive Green Fine Leather chair, Gunmetal powder coated Legs",
  "price": 72099,
  "regularPrice": 72099,
  "salePrice": 72099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-19-img-1.jpg",
   "/sites/eskil/2022/03/shop-19-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-19-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-19-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-19-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-19-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "30kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather, Steel"
    ]
   }
  ],
  "sku": "19",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4139,
  "slug": "noir-butterfly-leather-chair-solid-oak-legs-matte-lacquer",
  "name": "Noir Butterfly leather Chair, Solid Oak legs & matte lacquer",
  "price": 62099,
  "regularPrice": 62099,
  "salePrice": 62099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-18-img-1.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-18-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brown Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Soft Leather, Wood"
    ]
   }
  ],
  "sku": "18",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4125,
  "slug": "mangata-pendant-lamp-dark-grey-9-steel-powder-coating",
  "name": "Mangata Pendant Lamp, dark grey 9″ Steel & powder coating",
  "price": 12099,
  "regularPrice": 12099,
  "salePrice": 12099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-17-img-1.jpg",
   "/sites/eskil/2022/03/shop-17-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-17-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-17-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-17-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-17-gallery-2.jpg"
  ],
  "categories": [
   {
    "slug": "pendants",
    "name": "Pendants"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 lamps"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "17",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4115,
  "slug": "leende-chair-gunnared-light-green-solid-birch-acrylic-lacquer",
  "name": "Leende Chair, Gunnared Light green, solid birch & acrylic lacquer",
  "price": 35099,
  "regularPrice": 35099,
  "salePrice": 35099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-16-img-1.jpg",
   "/sites/eskil/2022/03/shop-16-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-16-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-16-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-16-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-16-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "225kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Solid Birch"
    ]
   }
  ],
  "sku": "16",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4066,
  "slug": "mysa-cozy-armchair-hillared-anthracite-solid-birch-tinted-lacquer",
  "name": "Mysa Cozy Armchair Hillared anthracite, Solid Birch & tinted lacquer",
  "price": 55099,
  "regularPrice": 55099,
  "salePrice": 55099,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-15-img-1.jpg",
   "/sites/eskil/2022/03/shop-15-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-15-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-15-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-15-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-15-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "30kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Beige"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Birch, Anthracite"
    ]
   }
  ],
  "sku": "15",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4058,
  "slug": "grey-oval-bamboo-wood-coffee-table-20-matte-lacquer-steel-details",
  "name": "Grey Oval Bamboo Wood Coffee Table, 20″ matte lacquer & steel details",
  "price": 24599,
  "regularPrice": 24599,
  "salePrice": 24599,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-14-img-1.jpg",
   "/sites/eskil/2022/03/shop-14-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-14-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-14-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-14-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-14-gallery-1.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Dark Amber"
    ]
   }
  ],
  "sku": "14",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4050,
  "slug": "lagom-matte-wall-led-lamp-aluminium-steel-powder-coating",
  "name": "Lagom Matte Wall LED Lamp, Aluminium & Steel powder coating",
  "price": 44599,
  "regularPrice": 44599,
  "salePrice": 44599,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-13-img-1.jpg",
   "/sites/eskil/2022/03/shop-13-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-13-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-13-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-13-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-13-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 lamps"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "5kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Silver"
    ]
   },
   {
    "name": "MATERIAL;",
    "terms": [
     "Steel, Glass"
    ]
   }
  ],
  "sku": "13",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 4013,
  "slug": "wall-clock-moneskine-birch-plywood-11-clear-acrylic-lacquer",
  "name": "Wall Clock Moneskine, birch plywood 11″ clear acrylic lacquer",
  "price": 14899,
  "regularPrice": 14899,
  "salePrice": 14899,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-12-img-1.jpg",
   "/sites/eskil/2022/03/shop-12-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-12-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-12-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-12-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-12-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "home-decor",
    "name": "Home decor"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 clock"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Matte Lacquer"
    ]
   },
   {
    "name": "MATERIAL;",
    "terms": [
     "Plywood, Satin finish"
    ]
   }
  ],
  "sku": "12",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3613,
  "slug": "ultima-table-lamp-brass-structure-oval-base-with-leather-fragments",
  "name": "Ultima Table Lamp, Brass structure & Oval base with leather fragments",
  "price": 37066,
  "regularPrice": 37066,
  "salePrice": 37066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" width=\"352\" height=\"386\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" width=\"352\" height=\"386\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-11-img-1.jpg",
   "/sites/eskil/2022/03/shop-11-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-11-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-11-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-11-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-11-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "steel"
  ],
  "attributes": [
   {
    "name": "SRYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "10kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Gunsmoke"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel, Gold"
    ]
   }
  ],
  "sku": "11",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3605,
  "slug": "ginger-leather-limited-edition-chair-steel-legs-waxed-leather",
  "name": "Ginger Leather Limited Edition Chair, Steel legs & waxed leather",
  "price": 45066,
  "regularPrice": 45066,
  "salePrice": 45066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-10-img-1.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-10-gallery-4.jpg",
   "/sites/eskil/2022/03/sohp-10-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Oak Wood, Refined"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Waxed Leather"
    ]
   }
  ],
  "sku": "10",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3551,
  "slug": "normani-designers-piece-chair-dark-charcoal-satin-cotton-cushion",
  "name": "Normani Designers Piece Chair, Dark Charcoal Satin cotton cushion",
  "price": 55066,
  "regularPrice": 55066,
  "salePrice": 55066,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-9-img-1.jpg",
   "/sites/eskil/2022/03/shop-9-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-9-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-9-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-9-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-9-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "White Material"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Steel"
    ]
   }
  ],
  "sku": "09",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3530,
  "slug": "concrete-top-wooden-coffee-table-fine-brushed-oak-28-1w",
  "name": "Concrete Top Wooden Coffee Table, Fine brushed oak 28.1W",
  "price": 37066,
  "regularPrice": 43789,
  "salePrice": 37066,
  "onSale": true,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-8-img-1.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-8-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 table"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "20kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Plywood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Pure Oakwood"
    ]
   }
  ],
  "sku": "08",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3521,
  "slug": "stockholm-minimal-chair-oak-wood-with-fine-finish",
  "name": "Stockholm Minimal Chair, Oak Wood with Fine finish",
  "price": 23789,
  "regularPrice": 23789,
  "salePrice": 23789,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-7-img-1.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-5.jpg",
   "/sites/eskil/2022/03/shop-7-gallery-3.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oak Wood, Leather"
    ]
   }
  ],
  "sku": "07",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3504,
  "slug": "ella-chair-with-armrests-solid-birch-and-leather-cushion",
  "name": "Ella Chair With Armrests, Solid Birch and Leather Cushion",
  "price": 35889,
  "regularPrice": 35889,
  "salePrice": 35889,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-6-img-1.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-6-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "4 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "15kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Dark Wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Matte Wood"
    ]
   }
  ],
  "sku": "06",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3489,
  "slug": "tilde-pine-nightstand-with-drawer-untreated-solid-wood",
  "name": "Tilde Pine Nightstand with Drawer, Untreated Solid Wood",
  "price": 10889,
  "regularPrice": 10889,
  "salePrice": 10889,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"352\" height=\"386\" src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-5-img-1.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-5-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "nightstand",
    "name": "Nightstand"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "2 nightsands"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "White Wood"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oakwood"
    ]
   }
  ],
  "sku": "05",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3471,
  "slug": "oslo-svart-pendant-lamp-powder-coated-epoxy-painted-steel",
  "name": "Oslo Svart Pendant Lamp, Powder coated Epoxy & painted Steel",
  "price": 19889,
  "regularPrice": 19889,
  "salePrice": 19889,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" width=\"352\" height=\"386\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz-02.png\" alt=\"t\" width=\"352\" height=\"386\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-4-img-1.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-4-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "pendants",
    "name": "Pendants"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "steel"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 lamp"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Lacquer"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Metal"
    ]
   }
  ],
  "sku": "04",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3461,
  "slug": "haydes-handmade-floor-wooden-lamp-matte-natural-finish",
  "name": "Haydes Handmade Floor Wooden Lamp, Matte natural finish",
  "price": 20889,
  "regularPrice": 20889,
  "salePrice": 20889,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p><img src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" width=\"475\" height=\"316\" /></p>",
  "images": [
   "/sites/eskil/2022/03/hover-lamp-02.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-3-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "furniture",
    "name": "Furniture"
   },
   {
    "slug": "lamps",
    "name": "Lamps"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Plywood Matte"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Cotton"
    ]
   }
  ],
  "sku": "03",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3452,
  "slug": "sauder-boulevard-cafe-lounge-chair-camel-finish",
  "name": "Sauder Boulevard Cafe Lounge Chair, Camel finish",
  "price": 16899,
  "regularPrice": 16899,
  "salePrice": 16899,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-2-img-1.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-2-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Wood, Saten"
    ]
   }
  ],
  "sku": "02",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3265,
  "slug": "butterfly-leather-chair",
  "name": "Butterfly Leather Chair",
  "price": 17699,
  "regularPrice": 17699,
  "salePrice": 17699,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/designer-product-01.jpg",
   "/sites/eskil/2022/03/designer-1-gallery-1.jpg",
   "/sites/eskil/2022/03/designer-1-gallery-2.jpg",
   "/sites/eskil/2022/03/designer-1-gallery-3.jpg",
   "/sites/eskil/2022/03/designer-1-gallery-4.jpg",
   "/sites/eskil/2022/03/designer-1-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "SET",
    "terms": [
     "2 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Leather, Steel"
    ]
   }
  ],
  "sku": "22",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3268,
  "slug": "swedish-lounge-armchair",
  "name": "Swedish Lounge Armchair",
  "price": 27699,
  "regularPrice": 27699,
  "salePrice": 27699,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/designer-product-02.jpg",
   "/sites/eskil/2022/03/designer-2-gallery-1.jpg",
   "/sites/eskil/2022/03/designer-2-gallery-2.jpg",
   "/sites/eskil/2022/03/designer-2-gallery-3.jpg",
   "/sites/eskil/2022/03/designer-2-gallery-4.jpg",
   "/sites/eskil/2022/03/designer-2-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Modern"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "1 chair"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "50kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Brushed Cotton"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Plywood, Leather"
    ]
   }
  ],
  "sku": "23",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3271,
  "slug": "gray-cotton-fit-chair",
  "name": "Gray Cotton Fit Chair",
  "price": 14899,
  "regularPrice": 14899,
  "salePrice": 14899,
  "onSale": false,
  "rating": 0.0,
  "reviewCount": 0,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/designer-product-03.jpg",
   "/sites/eskil/2022/03/designer-3-gallery-1.jpg",
   "/sites/eskil/2022/03/designer-3-gallery-2.jpg",
   "/sites/eskil/2022/03/designer-3-gallery-3.jpg",
   "/sites/eskil/2022/03/designer-3-gallery-4.jpg",
   "/sites/eskil/2022/03/designer-3-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "trendy",
   "vibe"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oak Wood, Leather"
    ]
   }
  ],
  "sku": "24",
  "inStock": true,
  "type": "simple"
 },
 {
  "id": 3055,
  "slug": "poliframe-tuffed-accnet-chair-29-1w-jet-black",
  "name": "Poliframe tuffed accnet chair 29.1″W, jet black",
  "price": 25899,
  "regularPrice": 25899,
  "salePrice": 25899,
  "onSale": false,
  "rating": 4.33,
  "reviewCount": 3,
  "shortDescription": "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" />\t\t\t\t\t\t\t</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Variant: Refined Polished Leather/Oak</p>\n<p>Base color:  Oak</p>\n<p>Base material:  Lacquered Oak</p>\n<p>Base type:  Wood Base</p>\n<p>Seat finish:  Full Upholstery</p>\n<p>Seat material:  Leather</p>\n<p>Height:  74,4cm</p>\n<p>Width:  60cm</p>\n<p>Depth:  69cm</p>\n<p>Seat height:  38cm</p>\n<p>\t\t\t\t\t\t\t\t<img width=\"475\" height=\"316\" src=\"/sites/eskil/2022/03/prikaz.png\" alt=\"t\" loading=\"lazy\" /></p>",
  "images": [
   "/sites/eskil/2022/03/shop-1-img-1.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-1.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-2.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-3.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-4.jpg",
   "/sites/eskil/2022/03/shop-1-gallery-5.jpg"
  ],
  "categories": [
   {
    "slug": "chairs",
    "name": "Chairs"
   },
   {
    "slug": "furniture",
    "name": "Furniture"
   }
  ],
  "tags": [
   "modern",
   "wood"
  ],
  "attributes": [
   {
    "name": "STYLE:",
    "terms": [
     "Contemporary"
    ]
   },
   {
    "name": "WARRANTY:",
    "terms": [
     "2 years"
    ]
   },
   {
    "name": "BRAND:",
    "terms": [
     "Ingrid Lauritz"
    ]
   },
   {
    "name": "SET:",
    "terms": [
     "6 chairs"
    ]
   },
   {
    "name": "WEIGHT:",
    "terms": [
     "25kg"
    ]
   },
   {
    "name": "DELIVERY:",
    "terms": [
     "Yes"
    ]
   },
   {
    "name": "VARIANT:",
    "terms": [
     "Polished Leather"
    ]
   },
   {
    "name": "MATERIAL:",
    "terms": [
     "Oak Wood, Leather"
    ]
   }
  ],
  "sku": "01",
  "inStock": true,
  "type": "simple"
 }
];

export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const formatPrice = (cents: number) => {
  const v = cents / 100;
  return Number.isInteger(v) ? `$${v}` : `$${v.toFixed(2)}`;
};
