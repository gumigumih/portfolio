import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faPalette, faCode, faUsers, faEye } from '@fortawesome/free-solid-svg-icons';

export default function CrossBorderSkills() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* プロダクト戦略 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-3">
            <div className="bg-blue-500 text-white p-2 rounded-lg">
              <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" />
            </div>
            プロダクト戦略
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              要件整理・見積もり
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              仕様・要件定義
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              検証ループの設計
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              料金プラン・販売文脈設計
            </div>
          </div>
          <div className="mt-3 text-xs text-blue-600 font-medium">
            役割: PdM、プロダクト戦略
          </div>
        </div>

        {/* デザイン・UX */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-3">
            <div className="bg-purple-500 text-white p-2 rounded-lg">
              <FontAwesomeIcon icon={faPalette} className="w-5 h-5" />
            </div>
            デザイン・UX
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              UIデザイン
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              ロゴ制作
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              バナー制作
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              ユーザー体験設計
            </div>
          </div>
          <div className="mt-3 text-xs text-purple-600 font-medium">
            役割: デザイナー、UX設計者
          </div>
        </div>

        {/* エンジニアリング */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-3">
            <div className="bg-green-500 text-white p-2 rounded-lg">
              <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
            </div>
            エンジニアリング
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Webアプリ開発
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Unityアプリディレクション
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              DB設計
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              システム設計
            </div>
          </div>
          <div className="mt-3 text-xs text-green-600 font-medium">
            役割: フルスタックエンジニア
          </div>
        </div>

        {/* プロジェクトマネジメント */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-orange-800 mb-3 flex items-center gap-3">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
            </div>
            プロジェクトマネジメント
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              チームマネジメント
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              タスク管理
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              要件共有
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              外注管理
            </div>
          </div>
          <div className="mt-3 text-xs text-orange-600 font-medium">
            役割: PM、ディレクター
          </div>
        </div>

        {/* カスタマーサクセス */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-3">
            <div className="bg-red-500 text-white p-2 rounded-lg">
              <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
            </div>
            カスタマーサクセス
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              サポート対応
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              改善提案
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              アナウンス文作成
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              チームの心理的安全性
            </div>
          </div>
          <div className="mt-3 text-xs text-red-600 font-medium">
            役割: CS、プロダクト運用
          </div>
        </div>

        {/* 越境型人材の価値 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-3">
            <div className="bg-gray-500 text-white p-2 rounded-lg">
              <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" />
            </div>
            越境型人材の価値
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              全体最適化の視点
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              コミュニケーションコスト削減
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              迅速な意思決定
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-600 font-medium">
            フルサイクルエンジニア × PdM的立ち回り
          </div>
        </div>
      </div>
    </div>
  );
} 