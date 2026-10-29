import React from 'react';
import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi';

const navItems = ['Home', 'Shop', 'Pages', 'Blog', 'Contact'];

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f7f7f7' }}>
      <nav
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #eaeaea',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.06em',
              color: '#1b2a47',
            }}
          >
            Bacola
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: '#2b2b2b',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <button
              aria-label="Search"
              style={iconButtonStyle}
            >
              <FiSearch size={18} />
            </button>
            <button
              aria-label="Wishlist"
              style={iconButtonStyle}
            >
              <FiHeart size={18} />
            </button>
            <button
              aria-label="Cart"
              style={{
                ...iconButtonStyle,
                background: '#233a95',
                color: '#fff',
                borderColor: '#233a95',
              }}
            >
              <FiShoppingBag size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '72px 24px 40px',
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            style={{
              color: '#233a95',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Fresh groceries daily
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              marginBottom: '20px',
              color: '#15213f',
            }}
          >
            Healthy food for your everyday life
          </h1>
          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.05rem',
              color: '#5d657a',
              lineHeight: 1.8,
            }}
          >
            Shop premium organic produce, pantry essentials, and household items with
            quick delivery and unbeatable prices.
          </p>
        </div>
      </main>
    </div>
  );
};

const iconButtonStyle = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  border: '1px solid #e4e7ef',
  background: '#fff',
  color: '#233a95',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

export default Home;
