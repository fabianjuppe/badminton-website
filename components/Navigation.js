import { useState } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

const Wrapper = styled.header`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px;
  border-bottom: 1px solid #e5e7eb;
  background: white;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: #374151;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? "#108197" : "#374151")};
  padding: 20px 0;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #108197;
    }
  }
`;

const Burger = styled.button`
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }

  background: none;
  border: none;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  z-index: 50;

  background: white;
  border-bottom: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-10px)"};

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  transition: all 0.25s ease;
`;

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <NavLink href="/" $isActive={router.pathname === "/"}>
          <Title>Badminton</Title>
        </NavLink>

        <Nav>
          <NavLink href="/" $isActive={router.pathname === "/"}>
            Kalender
          </NavLink>

          <NavLink
            href="/mannschaften"
            $isActive={router.pathname === "/mannschaften"}
          >
            Mannschaften
          </NavLink>
        </Nav>

        <Burger onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </Burger>
      </Wrapper>

      <MobileMenu $isOpen={isOpen}>
        <NavLink
          href="/"
          $isActive={router.pathname === "/"}
          onClick={() => setIsOpen(false)}
        >
          Kalender
        </NavLink>

        <NavLink
          href="/mannschaften"
          $isActive={router.pathname === "/mannschaften"}
          onClick={() => setIsOpen(false)}
        >
          Mannschaften
        </NavLink>
      </MobileMenu>
    </>
  );
}
