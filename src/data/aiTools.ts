import {
  faBrain,
  faCode,
  faFileLines,
  faListCheck,
  faMagnifyingGlassChart,
  faPenRuler,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface AIUsageItem {
  title: string;
  icon: IconDefinition;
  purpose: string;
  examples: string[];
  humanRole: string;
}

export const aiUsageItems: AIUsageItem[] = [
  {
    title: '判断材料の整理',
    icon: faListCheck,
    purpose: '技術・品質・スケジュール・コストなど複数の観点を整理し、意思決定に必要な比較材料をまとめます。',
    examples: ['複数案の比較', 'リスク整理', 'WBSや対応方針の論点整理'],
    humanRole: '最終的な判断、優先順位付け、関係者への説明は自分で行います。',
  },
  {
    title: '技術調査・検証',
    icon: faMagnifyingGlassChart,
    purpose: 'ライブラリ、クラウドサービス、アーキテクチャの比較検討や初期調査に活用します。',
    examples: ['サービス選定の比較', 'PoC方針の整理', 'サンプル実装の確認'],
    humanRole: '実装可否や採用判断は、実際の制約・運用・品質を踏まえて確認します。',
  },
  {
    title: '要件・設計整理',
    icon: faPenRuler,
    purpose: '要求や課題を要件・仕様へ落とし込むための論点整理やドラフト作成に活用します。',
    examples: ['仕様のたたき台', '責務分離の整理', '状態遷移やレビュー観点の整理'],
    humanRole: 'ドラフトをそのまま使わず、実装・運用・関係者の前提に合わせて調整します。',
  },
  {
    title: 'レビュー支援',
    icon: faCode,
    purpose: '設計レビューやPRレビュー時の観点整理、確認漏れ防止、チェック項目の洗い出しに活用します。',
    examples: ['PRレビュー観点の整理', '設計リスクの洗い出し', '品質確認項目の整理'],
    humanRole: 'レビュー判断や差し戻し方針は、コードと仕様を確認したうえで自分で決めます。',
  },
  {
    title: 'ドキュメント作成',
    icon: faFileLines,
    purpose: '議事録、仕様書、調査レポート、説明資料などの構成整理やドラフト作成を効率化します。',
    examples: ['議事録の整理', '仕様書の構成作成', '説明資料・依頼文のドラフト'],
    humanRole: '事実確認、表現調整、関係者に出す内容の最終確認は自分で行います。',
  },
  {
    title: '壁打ち・思考整理',
    icon: faBrain,
    purpose: '複数案の比較、リスク整理、説明方法の検討など、自分の考えを整理する相手として活用します。',
    examples: ['意思決定前の論点整理', '説明文の整理', 'キャリアや見せ方の壁打ち'],
    humanRole: 'AIの回答は材料として扱い、自分の経験・事実・目的に照らして採用可否を判断します。',
  },
];
