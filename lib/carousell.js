export let images = []
const quantity = 19

Array.from(Array(quantity)).map((_, i) => {
  const index = i + 1
  const image = {
    original: `/yoga/miel${index}.jpg`,
    originalAlt: `Miel ${index}`,
    thumbnail: `/yoga/miel${index}_tn.jpg`,
    thumbnailAlt: `Miel Thumbnail ${index}`,
  }

  images.push(image)
})
