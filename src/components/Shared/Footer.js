import React from 'react';

const Footer = () => {
    return (
        <div className="bg-purple-100 py-10">
          <div className="text-center md:text-left justify-center flex">
            <p>&copy; {new Date().getFullYear()} Next.js. All rights reserved.</p>
      </div>
    </div>
    );
};

export default Footer;