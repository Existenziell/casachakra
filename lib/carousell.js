export let images = []
const quantity = 19

Array.from(Array(quantity)).map((_, i) => {
  const image = {
    original: `/yoga/miel${i + 1}.jpg`,
    thumbnail: `/yoga/miel${i + 1}_tn.jpg`,
  }

  images.push(image)
})
