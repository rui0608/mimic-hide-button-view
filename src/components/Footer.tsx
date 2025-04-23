
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 mt-8 border-t">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/placeholder.svg" 
            alt="Company Logo" 
            className="h-8"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 text-xs text-gray-600 mb-2">
          <a href="#" className="hover:underline">
            サイトポリシー
          </a>
          <a href="#" className="hover:underline">
            規約
          </a>
          <a href="#" className="hover:underline">
            広告について
          </a>
          <a href="#" className="hover:underline">
            運営会社
          </a>
          <a href="#" className="hover:underline">
            お問い合わせ
          </a>
          <a href="#" className="hover:underline">
            よくある質問
          </a>
          <a href="#" className="hover:underline">
            外部へのリンクについて
          </a>
        </div>
        <div className="text-center text-xs text-gray-500">
          © 2024 「サービス名」は株式会社○○の登録商標です All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
