export const PROJECT_TYPE_LABELS: { [key: string]: string } = {
  technical: 'AI・リアルタイムシステム',
  product: 'プロダクト・業務支援',
  tourism: '観光・地域DX',
  avatar: 'XR・3D・アバター',
  promotion: 'コンテンツ・マーケティング'
};

export const PROJECT_TYPE_COLORS: { [key: string]: string } = {
  technical: 'bg-slate-700',
  product: 'bg-sky-500',
  tourism: 'bg-teal-500',
  avatar: 'bg-indigo-500',
  promotion: 'bg-amber-500'
};

export const FILTER_CONFIG = [
  { type: 'all', label: 'すべて', color: 'bg-gray-500' },
  { type: 'technical', label: 'AI・リアルタイムシステム', color: 'bg-slate-700' },
  { type: 'product', label: 'プロダクト・業務支援', color: 'bg-blue-500' },
  { type: 'tourism', label: '観光・地域DX', color: 'bg-green-500' },
  { type: 'avatar', label: 'XR・3D・アバター', color: 'bg-purple-500' },
  { type: 'promotion', label: 'コンテンツ・マーケティング', color: 'bg-orange-500' }
];
