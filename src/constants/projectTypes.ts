export const PROJECT_TYPE_LABELS: { [key: string]: string } = {
  technical: 'AI・リアルタイムシステム',
  product: 'AI・キャラクターサービス',
  tool: 'Webツール・業務効率化',
  tourism: '観光・地域DX',
  avatar: '3D・XR制作支援',
  promotion: 'コンテンツ・マーケティング'
};

export const PROJECT_TYPE_COLORS: { [key: string]: string } = {
  technical: 'bg-slate-700',
  product: 'bg-sky-500',
  tool: 'bg-cyan-600',
  tourism: 'bg-teal-500',
  avatar: 'bg-indigo-500',
  promotion: 'bg-amber-500'
};

export const FILTER_CONFIG = [
  { type: 'all', label: 'すべて', color: 'bg-gray-500' },
  { type: 'technical', label: 'AI・リアルタイムシステム', color: 'bg-slate-700' },
  { type: 'product', label: 'AI・キャラクターサービス', color: 'bg-blue-500' },
  { type: 'tool', label: 'Webツール・業務効率化', color: 'bg-cyan-600' },
  { type: 'tourism', label: '観光・地域DX', color: 'bg-green-500' },
  { type: 'avatar', label: '3D・XR制作支援', color: 'bg-purple-500' },
  { type: 'promotion', label: 'コンテンツ・マーケティング', color: 'bg-orange-500' }
];
