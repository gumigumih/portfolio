export const PROJECT_TYPE_LABELS: { [key: string]: string } = {
  product: 'プロダクト開発・運営',
  tourism: '観光・地域振興系',
  avatar: 'アバター活用支援',
  promotion: '販促・その他'
};

export const PROJECT_TYPE_COLORS: { [key: string]: string } = {
  product: 'bg-blue-500',
  tourism: 'bg-green-500',
  avatar: 'bg-purple-500',
  promotion: 'bg-orange-500'
};

export const FILTER_CONFIG = [
  { type: 'all', label: 'すべて', color: 'bg-gray-500' },
  { type: 'product', label: 'プロダクト開発・運営', color: 'bg-blue-500' },
  { type: 'tourism', label: '観光・地域振興系', color: 'bg-green-500' },
  { type: 'avatar', label: 'アバター活用支援', color: 'bg-purple-500' },
  { type: 'promotion', label: '販促・その他', color: 'bg-orange-500' }
];
