import Link from "next/link";


const Footer = () => {
  return (
      <footer className="footer">
       <div className="footer-content">
        <ul className="footer-links">
          <li><Link href="https://learnwithjossy.com">Home</Link></li>
          <li><Link href="https://learnwithjossy.com/about">About</Link></li>
          <li><Link href="https://learnwithjossy.com/contact">Contact</Link></li>
        </ul>
        <p className="credit">&copy; 2025 LearnWithJossy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer