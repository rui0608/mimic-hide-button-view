
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CocopitaLinkDialog from "./CocopitaLinkDialog";
import { toast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // フォーム送信時のデフォルト挙動停止＋ダイアログを開く
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで、本来はアカウント確認や登録処理など
    setDialogOpen(true);
  };

  // 「はい」クリック時の処理
  const handleLinkYes = () => {
    setDialogOpen(false);
    toast({
      title: "COCOPiTAと連動しました",
    });
    // ここで連動API呼び出しなど
  };

  // 「いいえ」クリック時の処理
  const handleLinkNo = () => {
    setDialogOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-rose-500 font-medium mb-2">PTA会員向け800円プランお申込みフォーム</h1>
        <h2 className="text-xl font-medium mb-4">新規ユーザー登録</h2>
        <p className="text-sm text-gray-700 mb-2">※お申込み後、2ヶ月無料でご利用いただけます。</p>
        <p className="text-sm text-gray-700 mb-6">（プランの変更に関しては加入後に500円・300円プランにも変更可能です。）</p>
        <p className="text-base mb-6">以下の必要事項をご入力の上、登録ボタンを押してください</p>
      </div>

      {/* The ONELINAVIユーザーはこちら button is intentionally hidden as requested */}
      {/* <div className="flex justify-center mb-6">
        <Button className="w-full max-w-md rounded-full bg-blue-500 hover:bg-blue-600 text-white">
          → ONELINAVIユーザーはこちら
        </Button>
      </div> */}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name fields */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <Label htmlFor="lastName" className="flex items-center text-sm mb-1">
              <span className="text-red-500 mr-1">*</span>姓
            </Label>
            <Input id="lastName" placeholder="" className="bg-white" />
          </div>
          <div>
            <Label htmlFor="firstName" className="flex items-center text-sm mb-1">
              <span className="text-red-500 mr-1">*</span>名
            </Label>
            <Input id="firstName" placeholder="" className="bg-white" />
          </div>
        </div>

        {/* Name in katakana */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="lastNameKana" className="flex items-center text-sm mb-1">
              <span className="text-red-500 mr-1">*</span>セイ
            </Label>
            <Input id="lastNameKana" placeholder="" className="bg-white" />
          </div>
          <div>
            <Label htmlFor="firstNameKana" className="flex items-center text-sm mb-1">
              <span className="text-red-500 mr-1">*</span>メイ
            </Label>
            <Input id="firstNameKana" placeholder="" className="bg-white" />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>メールアドレス
          </Label>
          <Input id="email" type="email" className="bg-white" />
        </div>

        {/* Phone number */}
        <div>
          <Label htmlFor="phone" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>電話番号
          </Label>
          <Input id="phone" placeholder="090-1234-5678" className="bg-white" />
        </div>

        {/* Gender */}
        <div>
          <Label htmlFor="gender" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>性別
          </Label>
          <div className="relative">
            <select id="gender" className="w-full h-10 px-3 py-2 bg-white border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">選択してください</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Birth date */}
        <div>
          <Label htmlFor="birthdate" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>生年月日
          </Label>
          <div className="relative">
            <Input id="birthdate" type="date" className="bg-white" />
          </div>
        </div>

        {/* Postal code */}
        <div>
          <Label htmlFor="postalCode" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>郵便番号
          </Label>
          <Input id="postalCode" placeholder="123-4567" className="bg-white" />
        </div>

        {/* Prefecture */}
        <div>
          <Label htmlFor="prefecture" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>都道府県
          </Label>
          <div className="relative">
            <select id="prefecture" className="w-full h-10 px-3 py-2 bg-white border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">選択してください</option>
              <option value="tokyo">東京都</option>
              <option value="osaka">大阪府</option>
              <option value="hokkaido">北海道</option>
              {/* Add all prefectures */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* City */}
        <div>
          <Label htmlFor="city" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>市区町村
          </Label>
          <Input id="city" className="bg-white" />
        </div>

        {/* Street address */}
        <div>
          <Label htmlFor="address" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>番地
          </Label>
          <Input id="address" className="bg-white" />
        </div>

        {/* Building name */}
        <div>
          <Label htmlFor="building" className="text-sm mb-1">建物名など</Label>
          <Input id="building" className="bg-white" />
        </div>

        {/* Nickname */}
        <div>
          <Label htmlFor="nickname" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>ニックネーム
          </Label>
          <Input id="nickname" className="bg-white" />
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>パスワード
          </Label>
          <Input id="password" type="password" className="bg-white" />
        </div>

        {/* Password confirmation */}
        <div>
          <Label htmlFor="passwordConfirm" className="flex items-center text-sm mb-1">
            <span className="text-red-500 mr-1">*</span>パスワード（確認）
          </Label>
          <Input id="passwordConfirm" type="password" className="bg-white" />
        </div>

        {/* Agreement checkboxes */}
        <div className="space-y-4">
          <div className="flex flex-row items-start space-x-3">
            <Checkbox id="pta-agree" className="mt-1" />
            <div>
              <Label htmlFor="pta-agree" className="text-sm text-blue-600 font-medium">会員によるPTA活動に協力（会費の徴収をして運営に参加する）</Label>
              <p className="text-xs text-gray-500">※同意いただかないと利用できません。</p>
            </div>
          </div>
          
          <div className="flex flex-row items-start space-x-3">
            <Checkbox id="member-agree" className="mt-1" />
            <div>
              <Label htmlFor="member-agree" className="text-sm text-blue-600 font-medium">賛助会員として参加に賛同する</Label>
              <p className="text-xs text-gray-500">※同意いただかないと利用できません。</p>
            </div>
          </div>
          
          <div className="flex flex-row items-start space-x-3">
            <Checkbox id="ad-agree" className="mt-1" />
            <div>
              <Label htmlFor="ad-agree" className="text-sm text-blue-600 font-medium">賛助会員として入会するにココナラを利用する</Label>
            </div>
          </div>
          
          <p className="text-sm">利用規約とプライバシーポリシーに同意します。</p>
          
          <div className="flex flex-row items-start space-x-3 pt-4">
            <Checkbox id="optional-agree" className="mt-1" />
            <div>
              <Label htmlFor="optional-agree" className="text-sm text-blue-600 font-medium">利用目的に同意してオンライン診断を利用する</Label>
              <p className="text-xs text-gray-500">CoCoナラを通じつつあるアプリ（診断系縁結び機能付き）</p>
              <p className="text-xs text-gray-500">※同意いただかなくても利用できます。</p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center space-x-4 pt-4">
          <Button variant="outline" className="w-40 rounded-full" type="button">キャンセル</Button>
          <Button className="w-40 rounded-full bg-blue-500 hover:bg-blue-600" type="submit">次へ</Button>
        </div>
      </form>

      {/* COCOPiTA連動確認ダイアログ */}
      <CocopitaLinkDialog
        open={dialogOpen}
        onYes={handleLinkYes}
        onNo={handleLinkNo}
      />
    </div>
  );
};

export default RegistrationForm;

