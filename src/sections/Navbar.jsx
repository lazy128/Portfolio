import { useState } from "react";
import { motion } from "motion/react";

// Tách data ra một mảng cho code gọn gàng, dễ bảo trì
const navLinks = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "work", name: "Work" },
  { id: "contact", name: "Contact" },
];

// Nhận thêm prop closeMenu để xử lý việc tự động đóng menu trên mobile
function Navigation({ closeMenu }) {
  const handleScroll = (e, id) => {
    e.preventDefault(); // Chặn hành vi nhảy trang giật cục của thẻ <a>
    const element = document.getElementById(id);
    
    if (element) {
      // Cuộn mượt đến section
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Lỗi: Không tìm thấy section nào có id="${id}"`);
    }

    // Nếu đang mở menu trên điện thoại thì đóng lại sau khi click
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <ul className="nav-ul">
      {navLinks.map((link) => (
        <li key={link.id} className="nav-li">
          <a
            href={`#${link.id}`}
            className="nav-link cursor-pointer"
            onClick={(e) => handleScroll(e, link.id)}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm để đóng menu mobile
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Lazy
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt=""
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            {/* Truyền hàm closeMenu xuống cho bản mobile */}
            <Navigation closeMenu={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;