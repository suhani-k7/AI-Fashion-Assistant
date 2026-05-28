const products=[
    {
        id:1,
        name:"Black Hoodie",
        price:1499,
        category:"Hoodie",
        image:"https://imgs.search.brave.com/JGZgTVXCiAvR97VytfwAfAY-YWJDX9JXhbOnNzSqeBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/NjY3LzA3OC9zbWFs/bC9ibGFjay1ob29k/aWUtc2V0LW1vY2t1/cC1pc29sYXRlZC1v/dmVyLXdoaXRlLWJh/Y2tncm91bmQtcGhv/dG8uanBn"
    },
    {
        id: 2,
        name: "Blue Denim Jeans",
        category: "Jeans",
        price: 999,
        image:
        "https://imgs.search.brave.com/iADU6c5RofW_go1thWGfGVhT6vuJzCXMx4olLf0MKPc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2VhcnZpZXcuY28v/X25leHQvaW1hZ2U_/dXJsPS9pbWFnZXMv/Y2F0YWxvZy9hcHBh/cmVsLWJvdHRvbXMv/amVhbnMvamVhbnMt/Zml0LXNpbGhvdWV0/dGUtYm9keS1wcm9w/b3J0aW9uLmF2aWYm/dz0zODQwJnE9NzU",
    },

    {
        id: 3,
        name: "White Sneakers",
        category: "Sneakers",
        price: 2499,
        image:
        "https://imgs.search.brave.com/UujOc2n6iZuZGqkp5SC1CxqkaISGtu2on54ogEZys_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFZZVNvTmEtUkwu/anBn",
    },
    {
        id: 4,
        name: "Red T-Shirt",
        category: "T-Shirt",
        price: 599,
        image:
    "https://imgs.search.brave.com/3mG3uiakrnGeroe3vRtMUDTdiq_2y3mwGyNYpj2By60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/MDg2LzI1MS9zbWFs/bC92aWJyYW50LXJl/ZC10c2hpcnQtYXBw/YXJlbC1jYXN1YWwt/ZmFzaGlvbi13YXJk/cm9iZS1lc3NlbnRp/YWwtc3R5bGVkLXBs/YWluLXRlZS1zdHVk/aW8tc2hvdC10cmFu/c3BhcmVudC1iYWNr/Z3JvdW5kLXBuZy5w/bmc"
    },

  {
    id: 5,
    name: "Grey Oversized Hoodie",
    category: "Hoodie",
    price: 1799,
    image: "https://imgs.search.brave.com/j69ntEgheNewyu8JRpugLEpsTJdaKq7aese-75P2Prk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvaGliaXRlZC5z/aG9wL2Nkbi9zaG9w/L2ZpbGVzL092ZXJz/aXplZEhvb2RpZUdy/ZXlNZWxhbmdlXzA5/LmpwZz92PTE3NzIx/MDI0OTYmd2lkdGg9/MzAwMA"
  },

  {
    id: 6,
    name: "Black Cargo Pants",
    category: "Cargo Pants",
    price: 1399,
    image: "https://imgs.search.brave.com/MKjWBqSGyS6X7kehd8E2i12F4EhQCEXVsLN1o6M_TOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b25seS5pbi9jZG4v/c2hvcC9maWxlcy8y/MTA2MjAzMDFfZzEu/anBnP3Y9MTc0NTg4/NTg0MyZ3aWR0aD0x/MDgw"
  },

  {
    id: 7,
    name: "White Crop Top",
    category: "Crop Top",
    price: 749,
    image: "https://imgs.search.brave.com/3ycKG-bwDQZyuybdW43gMpF5VG7dhc-kKNL8n5t167s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/NzIxNzgxMy9waG90/by93b21hbi1pbi1h/LXdoaXRlLWNyb3At/dG9wLWFuZC1ibHVl/LWplYW5zLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0xNzJM/UFpuSlRSRFFtSnFT/UUhMT2RnOUNpRVJL/eWw4OHd2MHRpQTFJ/aktVPQ"
  },

  {
    id: 8,
    name: "Beige Trench Coat",
    category: "Trench Coat",
    price: 3499,
    image: "https://imgs.search.brave.com/vN6XELxE4oMQbM1545SYRQX0gyGDYWw-d4kw5No0e84/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFrZjVhMlhhNEwu/anBn"
  },

  {
    id: 9,
    name: "Olive Bomber Jacket",
    category: "Bomber Jacket",
    price: 2899,
    image: "https://imgs.search.brave.com/vDFjBe_m8lhZAPJFt1QkPpHHhcQ8nfA-VPckDGXre8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW5l/MjAxLmNvbS9jZG4v/c2hvcC9maWxlcy9j/ajExMDA1YS1vbGl2/ZS1ib21iZXItamFj/a2V0LTM2OTcwMjc5/NTAxOTkwLmpwZz92/PTE3NTM0NDY3ODMm/d2lkdGg9MjMxNg"
  },

  {
    id: 10,
    name: "Black Leather Jacket",
    category: "Leather Jacket",
    price: 4299,
    image: "https://imgs.search.brave.com/O9oV6hPqlDdtjFBye5YYwL1u8H8nHGpZ3g5lhfqGiAI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YWh1Yi5wcmV0dHls/aXR0bGV0aGluZy5j/b20vY25vMTAyN19i/bGFja194bA"
  },

  {
    id: 11,
    name: "Blue Baggy Jeans",
    category: "Jeans",
    price: 1599,
    image: "https://imgs.search.brave.com/h5hca-inatqGCbN5GPZi4m5K4oh479B22QM7dz21JVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vZmZk/dXR5LmluL2Nkbi9z/aG9wL2ZpbGVzLzFf/NWZmYzM5ODUtMjNl/Mi00N2Q1LWEzMGEt/NWIwYTYxMzVkZWYx/XzFfMV8xNDAweC5w/bmc_dj0xNzYzNzE5/Njg0"
  },

  {
    id: 12,
    name: "Pink Sweatshirt",
    category: "Sweatshirt",
    price: 1199,
    image: ""
  },

  {
    id: 13,
    name: "Brown Boots",
    category: "Boots",
    price: 3199,
    image: "https://imgs.search.brave.com/TEBHMK_6Mnuq08uaWHOl6FBwFDxjH6aUHwpAnZfLtoI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvc2hvZS9lL3Yv/bS8zLWJvb3RzLTMt/MC12ZWVmb3gtYnJv/d24tb3JpZ2luYWwt/aW1haGhkZjN6aHNm/Y3Vmei5qcGVnP3E9/NzA"
  },

  {
    id: 14,
    name: "White Graphic Tee",
    category: "T-Shirt",
    price: 699,
    image: "https://imgs.search.brave.com/tyqEOsUna4DxVdHv-YKv9oqh2c1MZlOINiG95-4aVWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHJl/YWRoZWFkcy5jb20v/Y2RuL3Nob3AvZmls/ZXMvV2hpdGVfT3Zl/cnNpemVkX0Zyb250/XzJfZjU5YTVlYWMt/MjMzNS00Yjg4LTk5/OWYtYWE2MzRlZjYy/MGVkLmpwZz92PTE3/NzM5NjU0ODAmd2lk/dGg9MjAwMA"
  },

  {
    id: 15,
    name: "Black Mini Skirt",
    category: "Mini Skirt",
    price: 899,
    image: "https://imgs.search.brave.com/oXI6teOYPuF_79AgWQksshjZs589uaynHu0tmTbBkNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXR0/bGVib3hpbmRpYS5j/b20vY2RuL3Nob3Av/ZmlsZXMvSGlnaF9X/YWlzdGVkX0JsYWNr/X01pbmlfU2tpcnRf/MTAyNHgxMDI0Lndl/YnA_dj0xNzQyMzc5/MDQ3"
  },

  {
    id: 16,
    name: "Blue Oversized Shirt",
    category: "Shirt",
    price: 1299,
    image: "https://imgs.search.brave.com/71emEOu832Hg25ENsi_o6LP95mKg--He-wbBjWVeRy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b25seS5pbi9jZG4v/c2hvcC9maWxlcy8y/NDAxMzc2MDNfZzMu/anBnP3Y9MTc0NTg5/Njk2MiZ3aWR0aD0x/MDgw"
  },

  {
    id: 17,
    name: "Grey Joggers",
    category: "Joggers",
    price: 999,
    image: "https://imgs.search.brave.com/87tfPedeDeZGtsEc6-F9slZ8T2TQLe6d3q7G_K1MmmQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9ua2Vyc2Nvcm5l/ci5jb20vY2RuL3No/b3AvZmlsZXMvZ3Jl/eS1tZWxhbmdlLWxv/b3NlLWZpdC1qb2dn/ZXJzLXhzLWJvbmtl/cnNjb3JuZXItc3Rv/cmUtMzM2OTAyNjcz/MjA0MjBfMTU1OTRm/MTUtZTg3OS00ODJk/LWIwMTktMjcxODgy/NTI2Yjk3LmpwZz92/PTE3NzM4MTg5MTY"
  },

  {
    id: 18,
    name: "Cream Sweater",
    category: "Sweater",
    price: 1499,
    image: "https://imgs.search.brave.com/Tq2DJ-9-RoYxoM1Bgy-Xq4M4l_0LYXe5UP3wvZg2qCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M1L2Y2/L2ExL2M1ZjZhMTZl/NTc5YzM0ZDkxODE1/OGU3ZTQ3N2YyMWU2/LmpwZw"
  },

  {
    id: 19,
    name: "Black Tote Bag",
    category: "Bag",
    price: 1199,
    image: "https://imgs.search.brave.com/c1wQXMeXbnHNRunaLNBsrOyYkbOOslDTnqjaIOFSfhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzLzA2/LzMzL2EzMDYzMzE1/NWYyNjlmODllOWM5/MjkzNDBjNjA1MDI2/LmpwZw"
  },

  {
    id: 20,
    name: "Green Flannel Shirt",
    category: "Shirt",
    price: 1399,
    image: "https://imgs.search.brave.com/V9NSrrmMWIAfQfrhIdJtPTzDYUVKuL0jz5otsI6_tI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldS5v/bmVpbGwuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzI2NTAwNDlfMzYw/OThfMDFfTU9ERUwu/anBnP3Y9MTc0OTIz/MzgwNSZ3aWR0aD03/MzA"
  },

  {
    id: 21,
    name: "Black Formal Blazer",
    category: "Blazer",
    price: 3999,
    image: "https://imgs.search.brave.com/lxKn-hjH2MMGSdbAbkHrDwYctGwN5wJ6Ny5ZF3Zilps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW50/YWJpbHNob3AuY29t/L2Nkbi9zaG9wL2Zp/bGVzL01CWkYwMDE2/MUFfQkxBQ0tfNS5q/cGc_dj0xNzU5OTA5/MzMwJndpZHRoPTUz/Mw"
  },

  {
    id: 22,
    name: "Lavender Hoodie",
    category: "Hoodie",
    price: 1699,
    image: "https://imgs.search.brave.com/kzQfl0URD1TMvI5HM2uMYPUXQI7zk-QjJxuc7gZUFuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmV5b3Vycy5pbi9j/ZG4vc2hvcC9maWxl/cy9sYXZlbmRlci1o/b29kaWUtZmxhdGxh/eS5qcGc_dj0xNzY5/MTczNjAxJndpZHRo/PTEyMDA"
  },

  {
    id: 23,
    name: "White Linen Pants",
    category: "Pants",
    price: 1499,
    image: "https://imgs.search.brave.com/KUlvoK8D2xSqF4YMXkkNsHOyovv2mhXuw2LI81CNEOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aXRo/bi5pbi9jZG4vc2hv/cC9wcm9kdWN0cy9X/aGl0ZS1MaW5lbi1Q/YW50cy0zLmpwZz92/PTE2ODU2NTIxMDcm/d2lkdGg9MTIwMA"
  },

  {
    id: 24,
    name: "Black Sunglasses",
    category: "Sunglasses",
    price: 899,
    image: "https://imgs.search.brave.com/ZoyL14K_t0Jxoe2QKYreQd60JpFwwenPJO8PUHUJzeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3Lzk2LzE2LzYz/LzM2MF9GXzE3OTYx/NjYzMDlfT3k3U2hu/SzNRd1BOUHFUSGF6/RlhMZXFTNGFBa3E3/c1guanBn"
  },

  {
    id: 25,
    name: "Blue Denim Jacket",
    category: "Denim",
    price: 2599,
    image: "https://imgs.search.brave.com/t3z9Mor9crtL7aVbRKPdiX_2ex5UQ5j_7qoi2z9pTC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVyb21vZGEuaW4v/Y2RuL3Nob3AvZmls/ZXMvMjQ1MTk4NzAx/X2c1LmpwZz92PTE3/NDU3MDAzNTgmd2lk/dGg9MTA4MA"
  },

  {
    id: 26,
    name: "Pink Floral Dress",
    category: "Dress",
    price: 2199,
    image: "https://imgs.search.brave.com/1Wmkn4LN6Fx8BIWfDc4L0hqk6CPuKZ1NHcHrMo4R3tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVyb21vZGEuaW4v/Y2RuL3Nob3AvZmls/ZXMvOTAxODQ3ODAx/XzRfNzk3NzZjNTgt/ZjNmMS00MmFiLWIz/MTctNzAzZjQ5ZDA1/MzgwLmpwZz92PTE3/NTA4MzUwNjAmd2lk/dGg9MTA4MA"
  },

  {
    id: 27,
    name: "Black High Heels",
    category: "Heels",
    price: 3299,
    image: ""
  },

  {
    id: 28,
    name: "Grey Tracksuit",
    category: "Track Pants",
    price: 2499,
    image: "https://imgs.search.brave.com/g5kv6LzDTqlK1z0icXQIG0pkKz248tZ8SV5JWusf4V4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFmLzIw/L2QwLzFmMjBkMGQ0/NzAzMWJkZTExYWMx/YmQ0NTdkYWQ5OWM5/LmpwZw"
  },

  {
    id: 29,
    name: "Brown Leather Handbag",
    category: "Handbag",
    price: 2899,
    image: "https://imgs.search.brave.com/XuDVXqZZ3Y4L3996iSdct3IHOkmtGSFsQ0mgqoPrmlk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzgz/LzcwL2FiODM3MDE1/YmM5ZjVhMTBjZDU5/ZmE0NTc1MjhmNDAy/LmpwZw"
  }
];
export default products;