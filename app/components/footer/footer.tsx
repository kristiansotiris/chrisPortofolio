import Link from "next/link";
import { Github, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center">
            <p className="text-center text-sm md:text-2xl">
              © {year} Chris Portfolio. All rights reserved.
            </p>
            <nav className="space-y-2">
              <ul className="flex flex-row gap-2 items-center">
                <li className=" bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100010816416076"
                    target="_blank"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                </li>
                <li className=" bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                  <Link
                    href="https://github.com/kristiansotiris"
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </li>
                <li className=" bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                  <Link href="https://www.instagram.com/kristian_stri" target="_blank">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
