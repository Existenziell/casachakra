import Link from 'next/link'
import Image from 'next/image'

const Social = () => {
  return (
    <div className="absolute right-8">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="https://www.facebook.com/casachakras">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/facebook.png" width={20} height={20} alt="Facebook"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/casachakras/">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/instagram.png" width={20} height={20} alt="Instagram"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://api.whatsapp.com/send?phone=005213221400060">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/whatsapp.png" width={20} height={20} alt="WhatsApp"></Image>
            </a>
          </Link>
        </li >
      </ul >
    </div >
  )
}

export default Social
