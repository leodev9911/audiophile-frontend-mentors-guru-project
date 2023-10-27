import headphonesXX99Two from './product-xx99-mark-two-headphones/desktop/image-product.jpg'
import headphonesXX99One from './product-xx99-mark-one-headphones/desktop/image-product.jpg'
import headphonesXX59 from './product-xx59-headphones/desktop/image-product.jpg'
import earphonesYX1 from './product-yx1-earphones/desktop/image-product.jpg'
import speakerZX7 from './product-zx7-speaker/desktop/image-product.jpg'
import speakerZX9 from './product-zx9-speaker/desktop/image-product.jpg'
import yx1EarphonesGallery1 from './product-yx1-earphones/desktop/image-gallery-1.jpg'
import yx1EarphonesGallery2 from './product-yx1-earphones/desktop/image-gallery-2.jpg'
import yx1EarphonesGallery3 from './product-yx1-earphones/desktop/image-gallery-3.jpg'
import xx59HeadphonesGallery1 from './product-xx59-headphones/desktop/image-gallery-1.jpg'
import xx59HeadphonesGallery2 from './product-xx59-headphones/desktop/image-gallery-2.jpg'
import xx59HeadphonesGallery3 from './product-xx59-headphones/desktop/image-gallery-3.jpg'
import xx99IHeadphonesGallery1 from './product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import xx99IHeadphonesGallery2 from './product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import xx99IHeadphonesGallery3 from './product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import xx99IIHeadphonesGallery1 from './product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import xx99IIHeadphonesGallery2 from './product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import xx99IIHeadphonesGallery3 from './product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import zx7SpeakerGallery1 from './product-zx7-speaker/desktop/image-gallery-1.jpg'
import zx7SpeakerGallery2 from './product-zx7-speaker/desktop/image-gallery-2.jpg'
import zx7SpeakerGallery3 from './product-zx7-speaker/desktop/image-gallery-3.jpg'
import zx9SpeakerGallery1 from './product-zx9-speaker/desktop/image-gallery-1.jpg'
import zx9SpeakerGallery2 from './product-zx9-speaker/desktop/image-gallery-2.jpg'
import zx9SpeakerGallery3 from './product-zx9-speaker/desktop/image-gallery-3.jpg'

export function useImages () {
  const imgProduct = {
    headphones: [headphonesXX59, headphonesXX99One, headphonesXX99Two],
    speakers: [speakerZX7, speakerZX9],
    earphones: [earphonesYX1]
  }
  const productsGallery = {
    yx1Earphones: [
      yx1EarphonesGallery1, yx1EarphonesGallery2, yx1EarphonesGallery3
    ],
    xx59Headphones: [
      xx59HeadphonesGallery1, xx59HeadphonesGallery2, xx59HeadphonesGallery3
    ],
    xx99MarkOneHeadphones: [
      xx99IHeadphonesGallery1, xx99IHeadphonesGallery2, xx99IHeadphonesGallery3
    ],
    xx99MarkTwoHeadphones: [
      xx99IIHeadphonesGallery1, xx99IIHeadphonesGallery2, xx99IIHeadphonesGallery3
    ],
    zx7Speaker: [
      zx7SpeakerGallery1, zx7SpeakerGallery2, zx7SpeakerGallery3
    ],
    zx9Speaker: [
      zx9SpeakerGallery1, zx9SpeakerGallery2, zx9SpeakerGallery3
    ]
  }
  return { imgProduct, productsGallery }
}
