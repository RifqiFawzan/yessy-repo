import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-darkbrown text-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-cream mb-4 tracking-[0.05em]">Yessy</h3>
            <p className="text-sand/80 text-sm leading-relaxed">
              Experience exceptional dining at Yessy. Two unique locations, two distinct menus, one unforgettable culinary journey.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sand/80 hover:text-cream transition-colors duration-150 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/place1" className="text-sand/80 hover:text-cream transition-colors duration-150 text-sm">
                  Place 1
                </Link>
              </li>
              <li>
                <Link href="/place2" className="text-sand/80 hover:text-cream transition-colors duration-150 text-sm">
                  Place 2
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-sand/80 hover:text-cream transition-colors duration-150 text-sm">
                  Make a Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-sand/80">
              <li>
                <a href="mailto:info@yessy.com" className="hover:text-cream transition-colors">
                  info@yessy.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                  WhatsApp: +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brown/50 text-center text-sm text-sand/60">
          <p>&copy; {new Date().getFullYear()} Yessy Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
