import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="row">
        <div className="col slide-up delay-400ms">
          <a href="tel:07725966021">
            <tel>07725 966 021</tel>
          </a>
          <a href="mailto:fencingserviceswestmidlands@gmail.com">
            <address>
              fencingservices<wbr />westmidlands@gmail.com
            </address>
          </a>
        </div>

        <div className="col slide-up delay-200ms">
          <Image
            src="/media/logo/logo.png"
            className="footer-logo"
            alt="Fencing Services West Midlands"
            width={200}
            height={66}
            loading="lazy"
          />
        </div>

        <div className="col slide-up delay-400ms">
          <div className="socials-container">
            <a
              href="https://www.facebook.com/profile.php?id=100083302689553&sk=reviews"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <Image src="/media/icons/facebook-icon.png" alt="Facebook" width={40} height={40} loading="lazy" />
            </a>

            <a
              href="https://share.google/t4opjbyS5ShErIxFG"
              target="_blank"
              rel="noreferrer"
              title="Google"
            >
              <Image src="/media/icons/google-icon.png" alt="Google" width={40} height={40} loading="lazy" />
            </a>

            <a
              href="https://www.yell.com/biz/fencing-services-west-midlands-birmingham-10266223/"
              target="_blank"
              rel="noreferrer"
              title="Yell"
            >
              <Image src="/media/icons/yell-icon.png" alt="Yell" width={40} height={40} loading="lazy" />
            </a>
          </div>
        </div>
      </div>

      <p className="seo-keywords"></p>

      <div className="footer-bottom">
        <p>
          &copy; <span id="year">{year}</span> Fencing Services West Midlands |{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>

        <p>
          Website by <b>New World Digital Media Ltd.</b>
        </p>
      </div>
    </footer>
  )
}
